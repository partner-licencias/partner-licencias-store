import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowUpDown,
  KeyRound,
  Layers,
  MessageCircle,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  catalogProducts,
  categoryIcons,
  licenseCategories,
  type LicenseCategory,
} from "@/data/catalog";
import { getProductImage } from "@/data/categoryImages";
import { createWhatsappUrl, slugifyProduct } from "@/lib/catalog";
import logoPartner from "@/assets/logo-partner-licencias.png";
import SocialLinks from "@/components/SocialLinks";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const allFilter = "Todos";
type Filter = LicenseCategory | typeof allFilter;

type SortKey = "relevance" | "price-asc" | "price-desc" | "name-asc";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "relevance", label: "Relevancia" },
  { value: "price-asc", label: "Precio: menor a mayor" },
  { value: "price-desc", label: "Precio: mayor a menor" },
  { value: "name-asc", label: "Nombre A-Z" },
];

const Catalog = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>(allFilter);
  const [sort, setSort] = useState<SortKey>("relevance");
  const [onlyOffers, setOnlyOffers] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const categoryCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const product of catalogProducts) {
      map.set(product.category, (map.get(product.category) ?? 0) + 1);
    }
    return map;
  }, []);

  const filteredProducts = useMemo(() => {
    const term = query.trim().toLowerCase();
    const tokens = term ? term.split(/\s+/).filter(Boolean) : [];
    const list = catalogProducts.filter((product) => {
      if (filter !== allFilter && product.category !== filter) return false;
      if (onlyOffers && !product.badge) return false;
      if (tokens.length === 0) return true;
      const haystack =
        `${product.name} ${product.description} ${product.category} ${product.duration} ${product.activation} ${product.format}`.toLowerCase();
      return tokens.every((t) => haystack.includes(t));
    });

    const sorted = [...list];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.priceValue - b.priceValue);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.priceValue - a.priceValue);
        break;
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    return sorted;
  }, [filter, query, sort, onlyOffers]);

  const activeFiltersCount =
    (filter !== allFilter ? 1 : 0) + (onlyOffers ? 1 : 0) + (sort !== "relevance" ? 1 : 0);

  const resetFilters = () => {
    setFilter(allFilter);
    setSort("relevance");
    setOnlyOffers(false);
    setQuery("");
  };

  const CategoryChips = ({ onPick }: { onPick?: () => void }) => (
    <div className="flex flex-wrap gap-2">
      {[allFilter, ...licenseCategories].map((category) => {
        const isActive = filter === category;
        const count =
          category === allFilter ? catalogProducts.length : categoryCounts.get(category) ?? 0;
        return (
          <button
            key={category}
            onClick={() => {
              setFilter(category as Filter);
              onPick?.();
            }}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-black transition-all sm:text-sm ${
              isActive
                ? "border-primary bg-primary text-primary-foreground shadow-glow"
                : "border-border bg-secondary/70 text-muted-foreground hover:border-primary/60 hover:text-foreground"
            }`}
          >
            <span className="truncate max-w-[140px]">{category}</span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] font-black tracking-wider ${
                isActive ? "bg-background/20" : "bg-background/40"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-secondary/70 px-3 py-2 text-sm font-black transition-colors hover:border-primary/60 sm:px-4"
          >
            <ArrowLeft className="size-4" /> <span className="hidden sm:inline">Inicio</span>
          </Link>
          <div className="text-center font-display text-sm font-black sm:text-xl flex items-center gap-2">
            <img src={logoPartner} alt="Partner Licencias" className="size-9 sm:size-11 object-contain" width={44} height={44} />
            <span className="hidden sm:inline">CATÁLOGO <span className="text-primary">PARTNER LICENCIAS</span></span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/activacion-microsoft"
              className="hidden rounded-2xl bg-gold px-3 py-2 text-xs font-black text-background shadow-glow transition-transform hover:-translate-y-0.5 md:inline-flex"
            >
              Activación MS · ID
            </Link>
            <a
              href={createWhatsappUrl()}
              className="inline-flex items-center gap-2 rounded-2xl bg-accent px-3 py-2 text-sm font-black text-accent-foreground shadow-whatsapp transition-transform hover:-translate-y-0.5 sm:px-4"
            >
              <MessageCircle className="size-4" /> <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </nav>
      </header>

      <main className="relative overflow-hidden bg-hero-radial">
        <div className="pointer-events-none absolute inset-0 tech-grid opacity-40" />
        <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-black text-primary shadow-glow sm:px-4 sm:py-2 sm:text-sm">
              <Sparkles className="size-4" /> {catalogProducts.length} licencias disponibles
            </div>
            <h1 className="font-display text-3xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Encuentra tu licencia y compra en minutos.
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-lg sm:leading-7">
              Software original, activación rápida y atención directa por WhatsApp para todo el catálogo Partner Licencias.
            </p>
          </div>

          {/* Barra de búsqueda + controles */}
          <div className="rounded-[1.4rem] border border-border bg-card-premium p-3 shadow-glow sm:p-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <label className="relative block flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar Windows, Office, Adobe, AutoCAD..."
                  className="h-12 w-full rounded-2xl border border-input bg-background/70 pl-12 pr-12 font-semibold text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary sm:h-14"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    aria-label="Limpiar búsqueda"
                    className="absolute right-3 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full bg-secondary text-muted-foreground hover:text-foreground"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </label>

              <div className="flex flex-wrap items-center gap-2">
                <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
                  <SelectTrigger className="h-12 w-[180px] rounded-2xl border-border bg-background/70 font-bold sm:h-12">
                    <ArrowUpDown className="mr-2 size-4 text-primary" />
                    <SelectValue placeholder="Ordenar" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <button
                  onClick={() => setOnlyOffers((v) => !v)}
                  className={`h-12 rounded-2xl border px-4 text-sm font-black transition-all ${
                    onlyOffers
                      ? "border-hot bg-hot text-destructive-foreground shadow-glow"
                      : "border-border bg-background/70 text-muted-foreground hover:border-primary/60 hover:text-foreground"
                  }`}
                >
                  🔥 Ofertas
                </button>

                <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                  <SheetTrigger asChild>
                    <button className="relative inline-flex h-12 items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 text-sm font-black text-muted-foreground hover:border-primary/60 hover:text-foreground lg:hidden">
                      <SlidersHorizontal className="size-4" /> Filtros
                      {activeFiltersCount > 0 && (
                        <span className="grid size-5 place-items-center rounded-full bg-primary text-[10px] font-black text-primary-foreground">
                          {activeFiltersCount}
                        </span>
                      )}
                    </button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="max-h-[85vh] overflow-y-auto rounded-t-3xl">
                    <SheetHeader className="text-left">
                      <SheetTitle className="font-display text-2xl font-black">
                        Filtrar por categoría
                      </SheetTitle>
                    </SheetHeader>
                    <div className="mt-5">
                      <CategoryChips onPick={() => setFiltersOpen(false)} />
                    </div>
                    <button
                      onClick={() => {
                        resetFilters();
                        setFiltersOpen(false);
                      }}
                      className="mt-6 w-full rounded-2xl border border-border bg-secondary py-3 font-black text-muted-foreground hover:text-foreground"
                    >
                      Limpiar filtros
                    </button>
                  </SheetContent>
                </Sheet>
              </div>
            </div>

            {/* Chips de categoría: visibles en desktop, plegados en móvil */}
            <div className="mt-4 hidden lg:block">
              <CategoryChips />
            </div>
          </div>

          {/* Resumen + botón limpiar */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm font-bold text-muted-foreground">
            <span>
              <span className="text-primary">{filteredProducts.length}</span> de {catalogProducts.length} productos
              {filter !== allFilter && <span> · {filter}</span>}
              {onlyOffers && <span> · solo ofertas</span>}
            </span>
            {activeFiltersCount > 0 && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-secondary/70 px-3 py-1 text-xs font-black hover:border-primary/60 hover:text-foreground"
              >
                <X className="size-3" /> Limpiar filtros ({activeFiltersCount})
              </button>
            )}
          </div>

          <div className="mt-5 grid gap-5 pb-24 sm:grid-cols-2 lg:grid-cols-3">
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
                  <div className="relative mb-5 overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-primary/15 to-background">
                    <img
                      src={getProductImage(product.category)}
                      alt={`${product.category} - ${product.name}`}
                      loading="lazy"
                      width={768}
                      height={768}
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-black text-primary backdrop-blur">
                      <Icon className="size-3.5" /> {product.category}
                    </div>
                    {product.badge && (
                      <span className="absolute right-3 top-3 rounded-full bg-hot px-3 py-1 text-xs font-black text-destructive-foreground shadow-glow">
                        {product.badge}
                      </span>
                    )}
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
                Prueba con otra búsqueda, ajusta los filtros o pídenos tu licencia directamente por WhatsApp.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 rounded-2xl border border-border bg-secondary px-5 py-3 font-black hover:border-primary/60"
                >
                  <X className="size-4" /> Limpiar filtros
                </button>
                <a
                  href={createWhatsappUrl()}
                  className="inline-flex items-center gap-2 rounded-2xl bg-accent px-5 py-3 font-black text-accent-foreground shadow-whatsapp"
                >
                  <MessageCircle className="size-4" /> Consultar disponibilidad
                </a>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="border-t border-border bg-surface px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p className="font-display font-black text-foreground">PARTNER <span className="text-primary">LICENCIAS</span> · Síguenos</p>
          <SocialLinks />
          <p>© 2026 Partner Licencias</p>
        </div>
      </footer>

      <FloatingChat />
    </div>
  );
};

export default Catalog;
