import { Facebook, Instagram, MessageCircle, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SocialLink = {
  name: string;
  url: string;
  icon: LucideIcon;
  label: string;
};

// TikTok icon (lucide doesn't include it) - render via inline SVG component
export const socialLinks: SocialLink[] = [
  {
    name: "WhatsApp",
    url: "https://wa.me/573164720782",
    icon: MessageCircle,
    label: "Escríbenos por WhatsApp",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/partner_licencias/",
    icon: Instagram,
    label: "Síguenos en Instagram",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/PartnerLicenciasOficial",
    icon: Facebook,
    label: "Síguenos en Facebook",
  },
  {
    name: "Telegram",
    url: "https://t.me/PartnerLicencias",
    icon: Send,
    label: "Escríbenos por Telegram",
  },
];

export const tiktokUrl = "https://www.tiktok.com/@partner_licencias";
