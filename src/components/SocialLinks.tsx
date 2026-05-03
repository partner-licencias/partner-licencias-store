import { socialLinks, tiktokUrl } from "@/lib/social";
import { cn } from "@/lib/utils";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.09Z" />
  </svg>
);

interface Props {
  className?: string;
  iconClassName?: string;
  variant?: "pill" | "ghost";
}

export const SocialLinks = ({ className, iconClassName, variant = "pill" }: Props) => {
  const base =
    variant === "pill"
      ? "grid size-10 place-items-center rounded-full border border-border bg-card/70 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-glow"
      : "grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socialLinks.map(({ name, url, icon: Icon, label }) => (
        <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className={base}>
          <Icon className={cn("size-4", iconClassName)} />
        </a>
      ))}
      <a
        href={tiktokUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Síguenos en TikTok"
        className={base}
      >
        <TikTokIcon className={cn("size-4", iconClassName)} />
      </a>
    </div>
  );
};

export default SocialLinks;
