import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  KeyRound,
  Layers,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import { catalogProducts, categoryIcons } from "@/data/catalog";
import { getProductImage } from "@/data/categoryImages";
import { createWhatsappUrl, slugifyProduct } from "@/lib/catalog";
import logoPartner from "@/assets/logo-partner-licencias.png";

const benefits = [
  "Entrega digital inmediata",
  "Soporte de activación incluido",
  "Atención directa por WhatsApp",
];

const ProductDetail = () => {
  const { slug = "" } = useParams();

  const product = useMemo(
    () => catalogProducts.find((item) => slugifyProduct(`${item.name}-${item.duration}`) === slug),
    [slug],
  );

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return catalogProducts
      .filter((item) => item.category === product.category && item.name !== product.name)
      .slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <div className="grid min-h-screen place-items-center bg-hero-radial px-4 text-center text-foreground">
        <div className="max-w-xl rounded-[1.5rem] border border-border bg-card-premium p-8 shadow-glow">
          <h1 className="font-display text-4xl font-black">Producto no encontrado</h1>
          <p className="mt-3 text-muted-foreground">
            Vuelve al catálogo para elegir una licencia disponible.
          </p>
          <Link
            to="/catalogo"
            className="mt-6 inline-flex rounded-2xl bg-cta-premium px-6 py-3 font-display font-black text-primary-foreground shadow-glow"
          >
            Ver catálogo
          </Link>
        </div>
      </div>
    );
  }

  const Icon = categoryIcons[product.category] ?? Layers;
  const whatsappUrl = createWhatsappUrl(product.name, product.price);

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-secondary/70 px-4 py-2 text-sm font-black transition-colors hover:border-primary/60"
          >
            <ArrowLeft className="size-4" /> Catálogo
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <img src={logoPartner} alt="Partner Licencias" width={40} height={40} className="size-10 object-contain" />
            <span className="hidden font-display text-base font-black sm:inline sm:text-xl">
              PARTNER <span className="text-primary">LICENCIAS</span>
            </span>
          </Link>
          <a
            href={whatsappUrl}
            className="inline-flex items-center gap-2 rounded-2xl bg-accent px-4 py-2 text-sm font-black text-accent-foreground shadow-whatsapp transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="size-4" /> <span className="hidden sm:inline">Comprar</span>
          </a>
        </nav>
      </header>

      <main className="relative overflow-hidden bg-hero-radial">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
        <section className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-14">
          <div className="rounded-[2rem] border border-border bg-card-premium p-5 shadow-glow">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-primary/25 to-background">
              <img
                src={getProductImage(product.category)}
                alt={`${product.category} - ${product.name}`}
                width={768}
                height={768}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-4 py-2 text-sm font-black text-primary backdrop-blur shadow-glow">
                <Icon className="size-4" /> {product.category}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-black text-primary shadow-glow">
                <Icon className="size-4" /> {product.category}
              </span>
              {product.badge && (
                <span className="rounded-full bg-hot px-4 py-2 text-sm font-black text-destructive-foreground">
                  {product.badge}
                </span>
              )}
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-black text-muted-foreground">
                <KeyRound className="size-4" /> {product.activation || "Digital"}
              </span>
            </div>

            <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-secondary/60 p-4">
                <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">Duración</p>
                <p className="mt-1 font-display text-lg font-black">{product.duration || "Digital"}</p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary/60 p-4">
                <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">Activación</p>
                <p className="mt-1 font-display text-lg font-black">{product.activation || "Digital"}</p>
              </div>
              <div className="rounded-2xl border border-border bg-secondary/60 p-4">
                <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">Formato</p>
                <p className="mt-1 font-display text-lg font-black">{product.format || "Digital"}</p>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-border bg-card-premium p-5">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-muted-foreground">
                    Precio cliente
                  </p>
                  <p className="font-display text-5xl font-black text-accent sm:text-6xl">
                    {product.price}
                  </p>
                </div>
                <a
                  href={whatsappUrl}
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-cta-premium px-8 py-5 font-display text-lg font-black text-primary-foreground shadow-glow transition-transform hover:-translate-y-1"
                >
                  Comprar por WhatsApp <MessageCircle className="size-6" />
                </a>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl border border-border bg-secondary/60 p-4">
                  <CheckCircle2 className="mb-3 size-6 text-accent" />
                  <p className="text-sm font-black leading-5">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div className="mb-5 flex items-center gap-2 font-display text-2xl font-black">
              <Sparkles className="size-6 text-gold" /> Productos relacionados
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedProducts.map((item) => {
                const RelIcon = categoryIcons[item.category] ?? Layers;
                return (
                  <Link
                    key={item.name}
                    to={`/catalogo/${slugifyProduct(`${item.name}-${item.duration}`)}`}
                    className="rounded-[1.2rem] border border-border bg-card-premium p-5 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
                  >
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-black text-primary">
                      <RelIcon className="size-3.5" /> {item.category}
                    </div>
                    <h2 className="font-display text-lg font-black">{item.name}</h2>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-display text-2xl font-black text-accent">{item.price}</span>
                      <Zap className="size-5 text-gold" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ProductDetail;
