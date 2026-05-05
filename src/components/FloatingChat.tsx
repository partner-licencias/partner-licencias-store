import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { socialLinks, tiktokUrl } from "@/lib/social";
import { cn } from "@/lib/utils";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.09Z" />
  </svg>
);

const colorByName: Record<string, string> = {
  WhatsApp: "bg-accent text-accent-foreground shadow-whatsapp",
  Instagram: "bg-gradient-to-tr from-[hsl(330_85%_55%)] via-[hsl(20_95%_55%)] to-[hsl(45_95%_60%)] text-white",
  Facebook: "bg-[hsl(220_85%_50%)] text-white",
  Telegram: "bg-[hsl(200_90%_50%)] text-white",
  TikTok: "bg-foreground text-background",
};

export const FloatingChat = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const items = [
    ...socialLinks.map((s) => ({ name: s.name, url: s.url, label: s.label, Icon: s.icon })),
    { name: "TikTok", url: tiktokUrl, label: "Síguenos en TikTok", Icon: TikTokIcon },
  ];

  return (
    <div ref={ref} className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <div
        className={cn(
          "flex flex-col items-end gap-2 transition-all duration-300",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        {items.map(({ name, url, label, Icon }, i) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group flex items-center gap-2"
            style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
          >
            <span className="rounded-full border border-border bg-card/90 px-3 py-1 text-xs font-black text-foreground shadow-lg backdrop-blur opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
              {name}
            </span>
            <span className={cn("grid size-12 place-items-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110", colorByName[name])}>
              <Icon className="size-5" />
            </span>
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Cerrar opciones de chat" : "Abrir opciones de chat"}
        className="grid size-16 place-items-center rounded-full bg-accent text-accent-foreground shadow-whatsapp animate-pulse-glow transition-transform duration-300 hover:scale-110"
      >
        {open ? <X className="size-7" /> : <MessageCircle className="size-8" />}
      </button>
    </div>
  );
};

export default FloatingChat;
