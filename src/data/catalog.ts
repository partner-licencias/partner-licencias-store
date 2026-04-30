import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Clapperboard, MonitorCog, Palette, ShieldCheck, Tv, Wrench, Layers } from "lucide-react";

export type LicenseType = "Windows" | "Office" | "Antivirus" | "IPTV" | "Adobe" | "Autodesk" | "Streaming";

export type CatalogProduct = {
  type: LicenseType;
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  badge: string;
  icon: LucideIcon;
  logo: string;
};

export const licenseTypes: LicenseType[] = ["Windows", "Office", "Antivirus", "IPTV", "Adobe", "Autodesk", "Streaming"];

export const catalogProducts: CatalogProduct[] = [
  { type: "Windows", name: "Windows 11 Pro", description: "Licencia digital para activación online, ideal para equipos personales y profesionales.", price: "$19.990", oldPrice: "$49.990", badge: "Más vendido", icon: MonitorCog, logo: "W11" },
  { type: "Windows", name: "Windows 10 Pro", description: "Activación rápida para computadores compatibles con soporte de instalación remoto.", price: "$17.990", oldPrice: "$42.990", badge: "Oferta", icon: MonitorCog, logo: "W10" },
  { type: "Office", name: "Office 2024 Pro Plus", description: "Suite completa con Word, Excel, PowerPoint, Outlook y herramientas productivas.", price: "$24.990", oldPrice: "$59.990", badge: "Pro", icon: BadgeCheck, logo: "365" },
  { type: "Office", name: "Office 2021 Professional", description: "Licencia perpetua para productividad diaria con activación guiada paso a paso.", price: "$21.990", oldPrice: "$52.990", badge: "Popular", icon: BadgeCheck, logo: "OFF" },
  { type: "Antivirus", name: "ESET Internet Security", description: "Protección avanzada para navegación, banca online y seguridad del dispositivo.", price: "$15.990", oldPrice: "$39.990", badge: "-60%", icon: ShieldCheck, logo: "ESET" },
  { type: "Antivirus", name: "Kaspersky Plus", description: "Seguridad digital multicapa con protección contra amenazas y privacidad online.", price: "$16.990", oldPrice: "$41.990", badge: "Seguro", icon: ShieldCheck, logo: "KAV" },
  { type: "IPTV", name: "IPTV Premium 1 Mes", description: "Acceso digital con contenido premium, activación inmediata y soporte por WhatsApp.", price: "$12.990", oldPrice: "$29.990", badge: "HOT", icon: Tv, logo: "TV" },
  { type: "IPTV", name: "IPTV Premium 3 Meses", description: "Plan extendido para usuarios intensivos con entrega rápida y asistencia de configuración.", price: "$29.990", oldPrice: "$59.990", badge: "Combo", icon: Tv, logo: "3M" },
  { type: "Adobe", name: "Adobe Creative Cloud", description: "Pack creativo para diseño, edición, fotografía y producción de contenido digital.", price: "$34.990", oldPrice: "$89.990", badge: "Creator", icon: Palette, logo: "AD" },
  { type: "Adobe", name: "Adobe Photoshop", description: "Acceso para edición profesional de imágenes, piezas publicitarias y contenido visual.", price: "$22.990", oldPrice: "$54.990", badge: "Diseño", icon: Palette, logo: "PS" },
  { type: "Autodesk", name: "Autodesk Pack", description: "Herramientas para arquitectura, ingeniería, modelado y flujos técnicos avanzados.", price: "$39.990", oldPrice: "$99.990", badge: "Bundle", icon: Wrench, logo: "AUTO" },
  { type: "Autodesk", name: "AutoCAD Professional", description: "Licencia digital para dibujo técnico, planos y productividad CAD profesional.", price: "$31.990", oldPrice: "$79.990", badge: "CAD", icon: Wrench, logo: "CAD" },
  { type: "Streaming", name: "Streaming Premium", description: "Cuenta digital lista para usar con entrega ágil y validación por atención directa.", price: "$13.990", oldPrice: "$27.990", badge: "Full", icon: Clapperboard, logo: "STR" },
  { type: "Streaming", name: "Combo Entretenimiento", description: "Pack de servicios digitales para ahorrar más con disponibilidad confirmada por WhatsApp.", price: "$25.990", oldPrice: "$49.990", badge: "Pack", icon: Layers, logo: "PLAY" },
];
