import { useMemo, useState } from "react";
import { ArrowLeft, KeyRound, Layers, MessageCircle, Search, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import {
  catalogProducts,
  categoryIcons,
  licenseCategories,
  type LicenseCategory,
} from "@/data/catalog";
import { createWhatsappUrl, slugifyProduct } from "@/lib/catalog";

const allFilter = "Todos";
type Filter = LicenseCategory | typeof allFilter;

const Catalog = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>(allFilter);

  const filteredProducts = useMemo(() => {
    const term = query.trim().toLowerCase();
    return catalogProducts.filter((product) => {
      const matchesCategory = filter === allFilter || product.category === filter;
      const haystack = `${product.name} ${product.description} ${product.category} ${product.duration}`.toLowerCase();
      return matchesCategory && (!term || haystack.includes(term));
    });
  }, [filter, query]);

  const categoryCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const product of catalogProducts) {
      map.set(product.category, (map.get(product.category) ?? 0) + 1);
    }
    return map;
  }, []);

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-secondary/70 px-4 py-2 text-sm font-black transition-colors hover:border-primary/60"
          >
            <ArrowLeft className="size-4" /> Inicio
          </Link>
          <div className="text-center font-display text-base font-black sm:text-xl">
            CATÁLOGO <span className="text-primary">PARTNER LICENCIAS</span>
          </div>
          <a
            href={createWhatsappUrl()}
            className="inline-flex items-center gap-2 rounded-2xl bg-accent px-4 py-2 text-sm font-black text-accent-foreground shadow-whatsapp transition-transform hover:-translate-y-0.5"
          >
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
                <Sparkles className="size-4" /> {catalogProducts.length} licencias disponibles
              </div>
              <h1 className="font-display text-4xl font-black leading-tight sm:text-6xl">
                Encuentra tu licencia y compra en minutos.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Software original, activación rápida y atención directa por WhatsApp para todo el catálogo Partner Licencias.
              </p>
            </div>

            <div className="rounded-[1.4rem] border border-border bg-card-premium p-4 shadow-glow">
              <label className="relative block">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar Windows, Office, Adobe, AutoCAD..."
                  className="h-14 w-full rounded-2xl border border-input bg-background/70 px-12 font-semibold text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </label>
              <div className="mt-4 overflow-x-auto pb-1">
                <div className="flex min-w-max gap-2">
                  {[allFilter, ...licenseCategories].map((category) => {
                    const isActive = filter === category;
                    const count =
                      category === allFilter ? catalogProducts.length : categoryCounts.get(category) ?? 0;
                    return (
                      <button
                        key={category}
                        onClick={() => setFilter(category as Filter)}
                        className={`rounded-full border px-4 py-2 text-sm font-black transition-all ${
                          isActive
                            ? "border-primary bg-primary text-primary-foreground shadow-glow"
                            : "border-border bg-secondary/70 text-muted-foreground hover:border-primary/60 hover:text-foreground"
                        }`}
                      >
                        {category}
                        <span className="ml-2 rounded-full bg-background/30 px-2 py-0.5 text-[10px] font-black tracking-wider">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between gap-3 text-sm font-bold text-muted-foreground">
            <span>{filteredProducts.length} productos encontrados</span>
            <span className="hidden sm:inline">Scroll para ver todo el catálogo</span>
          </div>

          <div className="grid gap-5 pb-24 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => {
              const Icon = categoryIcons[product.category] ?? Layers;
              const slug = slugifyProduct(`${product.name}-${product.duration}`);
              return (
                <article
                  key={`${product.category}-${product.name}-${product.duration}`}
                  className="group relative overflow-hidden rounded-[1.35rem] border border-border bg-card-premium p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
                >
                  <Link
                    to={`/catalogo/${slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={`Ver detalle de ${product.name}`}
                  />
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="grid size-20 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/25 to-background shadow-glow">
                      <Icon className="size-9 text-primary" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {product.badge && (
                        <span className="rounded-full bg-hot px-3 py-1 text-xs font-black text-destructive-foreground">
                          {product.badge}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-black text-primary">
                        <Icon className="size-3.5" /> {product.category}
                      </span>
                    </div>
                  </div>
                  <h2 className="font-display text-xl font-black leading-tight">{product.name}</h2>
                  <p className="mt-3 line-clamp-3 min-h-16 text-sm leading-6 text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-black">
                    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 px-3 py-1 text-muted-foreground">
                      <Zap className="size-3" /> {product.duration || "Digital"}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/60 px-3 py-1 text-muted-foreground">
                      <KeyRound className="size-3" /> {product.activation || "Digital"}
                    </span>
                  </div>
                  <div className="mt-5 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Precio cliente
                      </p>
                      <p className="font-display text-3xl font-black text-accent">{product.price}</p>
                    </div>
                    <Icon className="size-8 text-gold" />
                  </div>
                  <a
                    href={createWhatsappUrl(product.name, product.price)}
                    className="relative z-20 mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-cta-premium px-5 py-3 font-display font-black text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Comprar por WhatsApp <MessageCircle className="size-4" />
                  </a>
                </article>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card-premium p-8 text-center shadow-glow">
              <p className="font-display text-2xl font-black">Sin resultados</p>
              <p className="mt-2 text-muted-foreground">
                Prueba con otra búsqueda o pídenos tu licencia directamente por WhatsApp.
              </p>
              <a
                href={createWhatsappUrl()}
                className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-accent px-5 py-3 font-black text-accent-foreground shadow-whatsapp"
              >
                <MessageCircle className="size-4" /> Consultar disponibilidad
              </a>
            </div>
          )}
        </section>
      </main>

      <a
        href={createWhatsappUrl()}
        aria-label="Comprar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid size-16 place-items-center rounded-full bg-accent text-accent-foreground shadow-whatsapp animate-pulse-glow transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle className="size-8" />
      </a>
    </div>
  );
};

export default Catalog;
