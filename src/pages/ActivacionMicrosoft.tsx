import { Link } from "react-router-dom";
import { MessageCircle, ShieldCheck, Phone, AlertTriangle } from "lucide-react";
import { createWhatsappUrl } from "@/lib/catalog";
import logoPartner from "@/assets/logo-partner-licencias.png";

const ActivacionMicrosoft = () => {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <img src={logoPartner} alt="Partner Licencias" width={48} height={48} className="size-12 object-contain drop-shadow-[0_0_12px_hsl(var(--primary)/0.45)]" />
            <span className="font-display text-lg font-extrabold tracking-wide">PARTNER <span className="text-primary">LICENCIAS</span></span>
          </Link>
          <div className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
            <Link to="/catalogo" className="transition-colors hover:text-foreground">Catálogo</Link>
            <Link to="/activacion-microsoft" className="text-foreground">Activación MS</Link>
            <Link to="/" className="transition-colors hover:text-foreground">Inicio</Link>
          </div>
          <a href={createWhatsappUrl()} className="rounded-full bg-accent px-5 py-2.5 text-sm font-black text-accent-foreground shadow-whatsapp">WhatsApp</a>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-black text-gold">
            <ShieldCheck className="size-4" /> Soporte oficial PARTNER LICENCIAS
          </div>
          <h1 className="font-display text-4xl font-black sm:text-5xl lg:text-6xl">
            Activación de Licencias <span className="text-primary">- ID de confirmación de Microsoft</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Active productos de Microsoft mediante el método telefónico con facilidad.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <article className="rounded-2xl border border-border bg-card-premium p-6 shadow-lg">
              <h2 className="flex items-center gap-2 font-display text-2xl font-black">
                <Phone className="size-6 text-primary" /> ¿Por qué es necesario activar el teléfono?
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Obligatorio para ciertas claves:</strong> La activación del teléfono es necesaria para las claves de activación por teléfono que vendemos en nuestra tienda.
                </li>
                <li>
                  <strong className="text-foreground">Opción de copia de seguridad:</strong> utilice la activación del teléfono cuando la activación en línea falle debido a errores de la aplicación o problemas de conectividad.
                </li>
                <li>
                  <strong className="text-foreground">Confiable y seguro:</strong> es un método alternativo para garantizar que su producto se active correctamente.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-hot/40 bg-card-premium p-6 shadow-lg">
              <h2 className="flex items-center gap-2 font-display text-2xl font-black">
                <AlertTriangle className="size-6 text-hot" /> Solución de problemas de activación
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Si experimenta problemas con la activación telefónica de una clave de producto comprada en <strong className="text-foreground">PARTNER LICENCIAS</strong>, nuestro equipo de soporte está aquí para ayudarlo. Contáctenos para resolver cualquier desafío de activación.
              </p>
              <a href={createWhatsappUrl()} className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3 font-display font-black text-accent-foreground shadow-whatsapp transition-transform duration-300 hover:-translate-y-0.5">
                <MessageCircle className="size-5" /> Contactar soporte
              </a>
            </article>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <div className="flex items-center justify-between border-b border-border bg-secondary/60 px-4 py-3">
              <p className="font-display text-sm font-black uppercase tracking-wider text-primary">Generador de ID de confirmación</p>
              <a href="https://getcid.us/" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-muted-foreground hover:text-foreground">Abrir en nueva pestaña ↗</a>
            </div>
            <iframe
              src="https://getcid.us/"
              title="Microsoft Confirmation ID - getcid.us"
              className="h-[800px] w-full bg-white"
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p className="font-display font-black text-foreground">PARTNER <span className="text-primary">LICENCIAS</span> · Síguenos</p>
          <SocialLinks />
          <p>© 2026 Partner Licencias</p>
        </div>
      </footer>

      <a href={createWhatsappUrl()} aria-label="WhatsApp" className="fixed bottom-5 right-5 z-50 grid size-16 place-items-center rounded-full bg-accent text-accent-foreground shadow-whatsapp animate-pulse-glow">
        <MessageCircle className="size-8" />
      </a>
    </div>
  );
};

export default ActivacionMicrosoft;
