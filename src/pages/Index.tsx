import {
  BadgeCheck,
  Clock3,
  CreditCard,
  DownloadCloud,
  Flame,
  Headphones,
  LockKeyhole,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  { tag: "HOT", name: "Windows 11 Pro", logo: "W11", old: "$49.990", price: "$19.990", tone: "from-primary/30" },
  { tag: "OFERTA", name: "Office 2024 Pro", logo: "365", old: "$59.990", price: "$24.990", tone: "from-accent/25" },
  { tag: "-60%", name: "ESET Internet Security", logo: "ESET", old: "$39.990", price: "$15.990", tone: "from-neon-green/25" },
  { tag: "TOP", name: "IPTV Premium", logo: "TV", old: "$29.990", price: "$12.990", tone: "from-hot/25" },
  { tag: "PRO", name: "Adobe Creative Cloud", logo: "AD", old: "$89.990", price: "$34.990", tone: "from-gold/25" },
  { tag: "BUNDLE", name: "Autodesk Pack", logo: "AUTO", old: "$99.990", price: "$39.990", tone: "from-primary/25" },
];

const benefits = [
  { icon: DownloadCloud, title: "Entrega inmediata", text: "Recibe tu licencia digital en minutos." },
  { icon: BadgeCheck, title: "Licencias originales", text: "Activaciones online listas para usar." },
  { icon: Headphones, title: "Soporte remoto", text: "Acompañamiento en instalación y activación." },
  { icon: ShieldCheck, title: "Garantía incluida", text: "Compra segura con respaldo postventa." },
  { icon: CreditCard, title: "Pago seguro", text: "Proceso simple, rápido y confiable." },
  { icon: LockKeyhole, title: "Activación protegida", text: "Software verificado para uso profesional." },
];

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="Partner Licencias inicio">
            <span className="grid size-11 place-items-center rounded-xl bg-cta-premium font-display text-lg font-black text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-105">PL</span>
            <span className="font-display text-lg font-extrabold tracking-wide">PARTNER <span className="text-primary">LICENCIAS</span></span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#catalogo">Catálogo</a>
            <a className="transition-colors hover:text-foreground" href="#beneficios">Beneficios</a>
            <a className="transition-colors hover:text-foreground" href="#ofertas">Ofertas</a>
            <a className="transition-colors hover:text-foreground" href="#contacto">Contacto</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://wa.me/573000000000" className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-black text-accent-foreground shadow-whatsapp transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex">
              WhatsApp
            </a>
            <button className="grid size-10 place-items-center rounded-xl border border-border bg-secondary md:hidden" aria-label="Abrir menú">
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="inicio" className="relative bg-hero-radial">
          <div className="pointer-events-none absolute inset-0 tech-grid opacity-50" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden bg-border">
            <span className="block h-px w-1/2 animate-scan bg-cta-premium" />
          </div>
          <div className="relative mx-auto grid min-h-[calc(100svh-68px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-16">
            <div className="max-w-3xl animate-fade-in">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-black text-primary shadow-glow">
                <Flame className="size-4" /> Oferta limitada · Activación hoy
              </div>
              <h1 className="font-display text-5xl font-black leading-[0.94] tracking-normal sm:text-6xl lg:text-7xl">
                🔥 LICENCIAS ORIGINALES AL MEJOR PRECIO 🔥
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Windows, Office, antivirus, IPTV, Adobe, Autodesk y streaming con entrega digital inmediata, soporte experto y precios agresivos para activar sin esperar.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#catalogo" className="rounded-2xl bg-cta-premium px-7 py-4 text-center font-display text-base font-black text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-1">Comprar Ahora</a>
                <Link to="/catalogo" className="rounded-2xl border border-primary/40 bg-secondary/70 px-7 py-4 text-center font-display text-base font-black text-foreground backdrop-blur transition-all duration-300 hover:border-primary hover:bg-primary/10">Ver Catálogo</Link>
                <a href="https://wa.me/573000000000" className="rounded-2xl bg-accent px-7 py-4 text-center font-display text-base font-black text-accent-foreground shadow-whatsapp transition-transform duration-300 hover:-translate-y-1">WhatsApp</a>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-center">
                {[
                  ["+8K", "activaciones"],
                  ["24/7", "ventas rápidas"],
                  ["100%", "digital"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur">
                    <div className="font-display text-2xl font-black text-primary">{value}</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg animate-float lg:max-w-none">
              <div className="absolute -inset-6 rounded-[2rem] bg-cta-premium opacity-20 blur-3xl" />
              <div className="relative rounded-[2rem] border border-border bg-card-premium p-4 shadow-glow">
                <div className="mb-4 flex items-center justify-between rounded-2xl border border-border bg-background/60 p-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">Flash Deals</p>
                    <p className="font-display text-2xl font-black">Catálogo digital</p>
                  </div>
                  <Zap className="size-8 text-gold" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {products.slice(0, 4).map((product) => (
                    <div key={product.name} className="rounded-2xl border border-border bg-secondary/70 p-4 transition-transform duration-300 hover:-translate-y-1">
                      <div className={`mb-4 grid aspect-square place-items-center rounded-2xl bg-gradient-to-br ${product.tone} to-background font-display text-2xl font-black text-foreground`}>
                        {product.logo}
                      </div>
                      <p className="line-clamp-1 text-sm font-black">{product.name}</p>
                      <p className="text-xs text-muted-foreground line-through">{product.old}</p>
                      <p className="font-display text-xl font-black text-accent">{product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="catalogo" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-sm font-black uppercase tracking-[0.28em] text-primary">Productos destacados</p>
              <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">Compra, activa y listo.</h2>
            </div>
            <a href="https://wa.me/573000000000" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3 font-black text-accent-foreground shadow-whatsapp transition-transform duration-300 hover:-translate-y-1">
              <MessageCircle className="size-5" /> Cotizar combo
            </a>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="group relative overflow-hidden rounded-[1.4rem] border border-border bg-card-premium p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-glow">
                <div className="absolute right-4 top-4 rounded-full bg-hot px-3 py-1 text-xs font-black text-destructive-foreground">{product.tag}</div>
                <div className={`mb-5 grid aspect-[1.45] place-items-center rounded-2xl bg-gradient-to-br ${product.tone} to-background transition-transform duration-300 group-hover:scale-[1.02]`}>
                  <span className="font-display text-5xl font-black text-foreground drop-shadow-lg">{product.logo}</span>
                </div>
                <h3 className="font-display text-2xl font-black">{product.name}</h3>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground line-through">Antes {product.old}</p>
                    <p className="font-display text-4xl font-black text-accent">{product.price}</p>
                  </div>
                  <Sparkles className="size-7 text-gold" />
                </div>
                <Link to="/catalogo" className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 font-display font-black text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5">
                  Comprar <MessageCircle className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="beneficios" className="border-y border-border bg-secondary/35">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="font-display text-sm font-black uppercase tracking-[0.28em] text-accent">Confianza de compra</p>
              <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">Todo diseñado para activar rápido y comprar seguro.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-border bg-card/70 p-5 backdrop-blur transition-transform duration-300 hover:-translate-y-1">
                  <Icon className="mb-4 size-9 text-primary" />
                  <h3 className="font-display text-xl font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ofertas" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-primary/30 bg-card-premium shadow-glow">
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-hot px-4 py-2 text-sm font-black text-destructive-foreground">
                  <Clock3 className="size-4" /> Oferta flash activa
                </div>
                <h2 className="font-display text-4xl font-black sm:text-5xl">Combos digitales con descuento agresivo.</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">Arma tu pack de Windows + Office + Antivirus o solicita licencias para empresa con precio preferencial por volumen.</p>
                <a href="https://wa.me/573000000000" className="mt-7 inline-flex rounded-2xl bg-cta-premium px-7 py-4 font-display font-black text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-1">Quiero mi descuento</a>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center sm:gap-4">
                {["02", "14", "39"].map((time, index) => (
                  <div key={time} className="rounded-2xl border border-border bg-background/60 p-4 sm:p-6">
                    <div className="font-display text-4xl font-black text-primary sm:text-5xl">{time}</div>
                    <div className="mt-1 text-xs font-black uppercase tracking-widest text-muted-foreground">{["horas", "min", "seg"][index]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.2rem] bg-cta-premium p-8 text-center text-primary-foreground shadow-glow sm:p-12">
            <h2 className="font-display text-4xl font-black sm:text-6xl">⚡ ACTIVA TU SOFTWARE HOY MISMO ⚡</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold opacity-90">Escríbenos por WhatsApp, confirma disponibilidad y recibe tu licencia digital con soporte de activación.</p>
            <a href="https://wa.me/573000000000" className="mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-background px-8 py-5 font-display text-lg font-black text-foreground shadow-whatsapp transition-transform duration-300 hover:-translate-y-1">
              <MessageCircle className="size-6" /> Comprar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-black text-foreground">PARTNER <span className="text-primary">LICENCIAS</span></p>
            <p>Licencias digitales, software, streaming y activaciones online.</p>
          </div>
          <div className="flex flex-wrap gap-3 font-semibold">
            <span>WhatsApp</span><span>Instagram</span><span>TikTok</span><span>Visa</span><span>Mastercard</span><span>Transferencia</span>
          </div>
          <p>© 2026 Partner Licencias. Todos los derechos reservados.</p>
        </div>
      </footer>

      <a href="https://wa.me/573000000000" aria-label="Comprar por WhatsApp" className="fixed bottom-5 right-5 z-50 grid size-16 place-items-center rounded-full bg-accent text-accent-foreground shadow-whatsapp animate-pulse-glow transition-transform duration-300 hover:scale-110">
        <MessageCircle className="size-8" />
      </a>
    </div>
  );
};

export default Index;
