import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";
const SPREADSHEET_ID = "1itW-9JtE5EyLeoIjnraoynRHIK81YVp_";
const RANGE = "A:Z";
const VALID_TYPES = ["Windows", "Office", "Antivirus", "IPTV", "Adobe", "Autodesk", "Streaming"];

type Product = {
  name: string;
  type: string;
  description: string;
  price: string;
  image?: string;
  oldPrice?: string;
  badge?: string;
};

const normalize = (value: unknown) =>
  String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const pick = (row: Record<string, string>, keys: string[]) => {
  for (const key of keys) {
    const found = Object.entries(row).find(([header]) => normalize(header) === normalize(key));
    if (found?.[1]) return found[1].trim();
  }
  return "";
};

const normalizeType = (value: string) => {
  const match = VALID_TYPES.find((type) => normalize(type) === normalize(value));
  return match ?? "Streaming";
};

const toProducts = (values: string[][]): Product[] => {
  const [headers = [], ...rows] = values;
  return rows
    .map((cells) => Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""])))
    .map((row) => {
      const name = pick(row, ["nombre", "name", "producto", "product", "licencia"]);
      const type = pick(row, ["tipo", "type", "categoria", "category"]);
      return {
        name,
        type: normalizeType(type),
        description: pick(row, ["descripcion", "descripción", "description", "detalle"]),
        price: pick(row, ["precio", "price", "valor"]),
        image: pick(row, ["imagen", "image", "icono", "icon", "url imagen", "image_url"]),
        oldPrice: pick(row, ["precio anterior", "precio_anterior", "oldPrice", "old_price", "antes"]),
        badge: pick(row, ["etiqueta", "badge", "tag", "oferta"]),
      };
    })
    .filter((product) => product.name && product.price);
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GOOGLE_SHEETS_API_KEY = Deno.env.get("GOOGLE_SHEETS_API_KEY");

    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");
    if (!GOOGLE_SHEETS_API_KEY) throw new Error("GOOGLE_SHEETS_API_KEY is not configured");

    const response = await fetch(`${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}`, {
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": GOOGLE_SHEETS_API_KEY,
      },
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(`Google Sheets API call failed [${response.status}]: ${JSON.stringify(payload)}`);
    }

    const products = toProducts(payload.values ?? []);
    return new Response(JSON.stringify({ products, source: "google_sheets" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ products: [], error: message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
