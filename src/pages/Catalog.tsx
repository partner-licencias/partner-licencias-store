import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  BadgeCheck,
  Clapperboard,
  ImageIcon,
  Layers,
  Loader2,
  MessageCircle,
  MonitorCog,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Tv,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { catalogProducts as fallbackProducts, licenseTypes, type LicenseType } from "@/data/catalog";
import { slugifyProduct } from "@/lib/catalog";

const whatsappNumber = "573000000000";
const allFilter = "Todos";

type Filter = LicenseType | typeof allFilter;
type SheetProduct = {
  name: string;
  type: LicenseType;
  description: string;
  price: string;
  image?: string;
  oldPrice?: string;
  badge?: string;
};

const iconByType = {
  Windows: MonitorCog,
  Office: BadgeCheck,
  Antivirus: ShieldCheck,
  IPTV: Tv,
  Adobe: Palette,
  Autodesk: Wrench,
  Streaming: Clapperboard,
};

const Catalog = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>(allFilter);
  const [products, setProducts] = useState<SheetProduct[]>(fallbackProducts);
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">("loading");

  useEffect(() => {
    let mounted = true;

    const loadCatalog = async () => {
      const { data, error } = await supabase.functions.invoke<{ products: SheetProduct[] }>("catalog-from-sheets");

      if (!mounted) return;

      if (error || !data?.products?.length) {
        setProducts(fallbackProducts);
        setStatus("fallback");
        return;
      }

      setProducts(data.products);
      setStatus("ready");
    };

    loadCatalog();

    return () => {
      mounted = false;
    };
  }, []);

  const filteredProducts = useMemo(() => {
    const term = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesType = filter === allFilter || product.type === filter;
      const matchesSearch = !term || `${product.name} ${product.description} ${product.type}`.toLowerCase().includes(term);
      return matchesType && matchesSearch;
    });
  }, [filter, products, query]);

  const productMessage = (name: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola, quiero comprar ${name}. ¿Está disponible?`)}`;

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 rounded-2xl border border-border bg-secondary/70 px-4 py-2 text-sm font-black transition-colors hover:border-primary/60">
            <ArrowLeft className="size-4" /> Inicio
          </Link>
          <div className="text-center font-display text-base font-black sm:text-xl">CATÁLOGO <span className="text-primary">PARTNER LICENCIAS</span></div>
          <a href={`https://wa.me/${whatsappNumber}`} className="inline-flex items-center gap-2 rounded-2xl bg-accent px-4 py-2 text-sm font-black text-accent-foreground shadow-whatsapp transition-transform hover:-translate-y-0.5">
            <MessageCircle className="size-4" /> <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </nav>
      </header>

      <main className="relative overflow-hidden bg-hero-radial">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
        <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-black text-primary shadow-glow">
                <Sparkles className="size-4" /> Catálogo completo
              </div>
              <h1 className="font-display text-4xl font-black leading-tight sm:text-6xl">Busca tu licencia y compra en minutos.</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Filtra por tipo, encuentra el producto exacto y solicita disponibilidad inmediata por WhatsApp.</p>
            </div>

            <div className="rounded-[1.4rem] border border-border bg-card-premium p-4 shadow-glow">
              <label className="relative block">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar Windows, Office, Adobe..."
                  className="h-14 w-full rounded-2xl border border-input bg-background/70 px-12 font-semibold text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </label>
              <div className="mt-4 overflow-x-auto pb-1">
                <div className="flex min-w-max gap-2">
                  {[allFilter, ...licenseTypes].map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilter(type as Filter)}
                      className={`rounded-full border px-4 py-2 text-sm font-black transition-all ${
                        filter === type
                          ? "border-primary bg-primary text-primary-foreground shadow-glow"
                          : "border-border bg-secondary/70 text-muted-foreground hover:border-primary/60 hover:text-foreground"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between gap-3 text-sm font-bold text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              {status === "loading" && <Loader2 className="size-4 animate-spin" />}
              {filteredProducts.length} productos encontrados
            </span>
            <span className="hidden sm:inline">{status === "ready" ? "Sincronizado con Google Sheets" : "Scroll para ver todo el catálogo"}</span>
          </div>

          <div className="max-h-[68vh] overflow-y-auto pr-1 sm:pr-2">
            <div className="grid gap-5 pb-24 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => {
                const Icon = iconByType[product.type] ?? Layers;
                return (
                  <article key={`${product.type}-${product.name}`} className="group relative overflow-hidden rounded-[1.35rem] border border-border bg-card-premium p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
                    <Link to={`/catalogo/${slugifyProduct(product.name)}`} className="absolute inset-0 z-10" aria-label={`Ver detalle de ${product.name}`} />
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="grid size-20 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/25 to-background font-display text-xl font-black shadow-glow">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
                        ) : (
                          <div className="grid h-full w-full place-items-center"><ImageIcon className="size-8 text-primary" /></div>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="rounded-full bg-hot px-3 py-1 text-xs font-black text-destructive-foreground">{product.badge || "Digital"}</span>
                        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-black text-primary"><Icon className="size-3.5" /> {product.type}</span>
                      </div>
                    </div>
                    <h2 className="font-display text-2xl font-black leading-tight">{product.name}</h2>
                    <p className="mt-3 min-h-20 text-sm leading-6 text-muted-foreground">{product.description}</p>
                    <div className="mt-5 flex items-end justify-between gap-3">
                      <div>
                        {product.oldPrice && <p className="text-sm font-semibold text-muted-foreground line-through">Antes {product.oldPrice}</p>}
                        <p className="font-display text-4xl font-black text-accent">{product.price}</p>
                      </div>
                      <Icon className="size-9 text-gold" />
                    </div>
                    <a href={productMessage(product.name)} className="relative z-20 mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-cta-premium px-5 py-3 font-display font-black text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5">
                      Comprar por WhatsApp <MessageCircle className="size-4" />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <a href={`https://wa.me/${whatsappNumber}`} aria-label="Comprar por WhatsApp" className="fixed bottom-5 right-5 z-50 grid size-16 place-items-center rounded-full bg-accent text-accent-foreground shadow-whatsapp animate-pulse-glow transition-transform duration-300 hover:scale-110">
        <MessageCircle className="size-8" />
      </a>
    </div>
  );
};

export default Catalog;
