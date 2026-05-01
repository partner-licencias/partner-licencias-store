import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Brain, Cloud, Clapperboard, FileText, HardDrive, Laptop, Layers, Lock, MonitorCog, Package, Palette, Server, ShieldCheck, Tv, Video, Wrench } from "lucide-react";

export type LicenseCategory =
  | "Acceso Remoto"
  | "Antivirus"
  | "Backup/Recovery"
  | "CAD/Ingeniería"
  | "Diseño"
  | "Educación/Audio"
  | "IA"
  | "Microsoft"
  | "Negocios"
  | "Office"
  | "PDF"
  | "Streaming/Video"
  | "Utilidades"
  | "Windows"
  | "Windows Server";

export type CatalogProduct = {
  category: LicenseCategory;
  name: string;
  duration: string;
  activation: string;
  format: string;
  description: string;
  price: string;
  priceValue: number;
  badge?: string;
};

export const categoryIcons: Record<LicenseCategory, LucideIcon> = {
  "Acceso Remoto": MonitorCog,
  "Antivirus": ShieldCheck,
  "Backup/Recovery": HardDrive,
  "CAD/Ingeniería": Wrench,
  "Diseño": Palette,
  "Educación/Audio": Video,
  "IA": Brain,
  "Microsoft": BadgeCheck,
  "Negocios": Package,
  "Office": BadgeCheck,
  "PDF": FileText,
  "Streaming/Video": Tv,
  "Utilidades": Layers,
  "Windows": Laptop,
  "Windows Server": Server,
};

export const licenseCategories: LicenseCategory[] = [
  "Acceso Remoto",
  "Antivirus",
  "Backup/Recovery",
  "CAD/Ingeniería",
  "Diseño",
  "Educación/Audio",
  "IA",
  "Microsoft",
  "Negocios",
  "Office",
  "PDF",
  "Streaming/Video",
  "Utilidades",
  "Windows",
  "Windows Server",
];

export const catalogProducts: CatalogProduct[] = [
  { category: "CAD/Ingeniería", name: "Solidworks 2026", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$110.000", priceValue: 110000, badge: "Vitalicio" },
  { category: "CAD/Ingeniería", name: "Arcgis Pro", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$120.000", priceValue: 120000, badge: "Vitalicio" },
  { category: "Backup/Recovery", name: "Icare Data Recovery Pro 2026 Recupera Archivos", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$80.000", priceValue: 80000, badge: "Vitalicio" },
  { category: "CAD/Ingeniería", name: "Pix4d Mapper Pro (software Fotogrametria)", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$180.000", priceValue: 180000, badge: "Vitalicio" },
  { category: "PDF", name: "Pdf Editor 14 Profesional 2026", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$90.000", priceValue: 90000, badge: "Vitalicio" },
  { category: "PDF", name: "Pdf Y Visor Lighpdf", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$90.000", priceValue: 90000, badge: "Vitalicio" },
  { category: "Utilidades", name: "Detector De Plagio Unico Pago Sin Suscripciones", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$150.000", priceValue: 150000, badge: "Vitalicio" },
  { category: "Negocios", name: "Internet Ilimitado Movistar,claro,wom,tigo,avante,swift", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$100.000", priceValue: 100000, badge: "Vitalicio" },
  { category: "Antivirus", name: "Avg Tuneup 2026", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$120.000", priceValue: 120000, badge: "Vitalicio" },
  { category: "Backup/Recovery", name: "Recuperador De Archivos Disk Drill Windows | Mac", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$130.000", priceValue: 130000, badge: "Vitalicio" },
  { category: "Acceso Remoto", name: "Alternativa Anydesk Software De Acceso Remoto Y Soporte", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$90.000", priceValue: 90000, badge: "Vitalicio" },
  { category: "Negocios", name: "Software Hotelero", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$180.000", priceValue: 180000, badge: "Vitalicio" },
  { category: "Diseño", name: "VRAY PREMIUM", duration: "1 Año", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$100.000", priceValue: 100000, badge: "1 Año" },
  { category: "Diseño", name: "Affinity Suite V2 Vitalicia", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$100.000", priceValue: 100000, badge: "Vitalicio" },
  { category: "Educación/Audio", name: "DOMESTIKA PLUS", duration: "1 Año", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$85.000", priceValue: 85000, badge: "1 Año" },
  { category: "Diseño", name: "RESOLUME ARENA 7", duration: "1 Año", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$90.000", priceValue: 90000, badge: "1 Año" },
  { category: "CAD/Ingeniería", name: "LUMION PRO 1 PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$11.000", priceValue: 11000, badge: "Vitalicio" },
  { category: "Backup/Recovery", name: "EaseUs Todo Backup Vitalicio", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$95.000", priceValue: 95000, badge: "Vitalicio" },
  { category: "Backup/Recovery", name: "EaseUs Data Recovery Wizard Vitalicio 1 Pc", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$110.000", priceValue: 110000, badge: "Vitalicio" },
  { category: "Negocios", name: "Bluebream Core 12 Meses", duration: "1 Año", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$120.000", priceValue: 120000, badge: "1 Año" },
  { category: "Backup/Recovery", name: "Iperius Backup Plan Full Vitalicio", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$90.000", priceValue: 90000, badge: "Vitalicio" },
  { category: "Backup/Recovery", name: "Iperius Backup Plan Basic 1 Pc Vitalicio", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$60.000", priceValue: 60000, badge: "Vitalicio" },
  { category: "Streaming/Video", name: "vMIX HD", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$90.000", priceValue: 90000, badge: "Vitalicio" },
  { category: "Streaming/Video", name: "vMIX 4K", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$110.000", priceValue: 110000, badge: "Vitalicio" },
  { category: "Streaming/Video", name: "vMIX PRO", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$150.000", priceValue: 150000, badge: "Vitalicio" },
  { category: "Streaming/Video", name: "vMIX MAX", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$200.000", priceValue: 200000, badge: "Vitalicio" },
  { category: "Acceso Remoto", name: "SUPREMO RDP", duration: "1 Año", activation: "Key", format: "Digital", description: "programa de soporte y asistencia remota profesional", price: "$90.000", priceValue: 90000, badge: "1 Año" },
  { category: "PDF", name: "NITRO PDF Standard", duration: "1 Año", activation: "Key", format: "Digital", description: "Programa de Edicion de PDF", price: "$100.000", priceValue: 100000, badge: "1 Año" },
  { category: "Antivirus", name: "VPN Avast SecureLine", duration: "1 Año", activation: "KEY", format: "Digital", description: "VPN Seguridad para la Navegacion", price: "$60.000", priceValue: 60000, badge: "1 Año" },
  { category: "IA", name: "PERPLEXITY IA", duration: "1 Mes", activation: "Email Personal", format: "Digital", description: "Perplexity es un motor de búsqueda de inteligencia artificial que ofrece respuestas rápidas y claras con información en tiempo real.", price: "$15.000", priceValue: 15000, badge: "1 Mes" },
  { category: "IA", name: "PERPLEXITY IA", duration: "1 Año", activation: "Email Personal", format: "Digital", description: "Perplexity es un motor de búsqueda de inteligencia artificial que ofrece respuestas rápidas y claras con información en tiempo real.", price: "$100.000", priceValue: 100000, badge: "1 Año" },
  { category: "Diseño", name: "CORELDRAW 2016 - 2025", duration: "12 Meses", activation: "KEY", format: "Digital", description: "Suite mas 20 apps, Adobe incluye Photoshop, Illustrator, Premiere Pro, After Effects, Acrobat Pro", price: "$70.000", priceValue: 70000, badge: "12 Meses" },
  { category: "Educación/Audio", name: "SERATO PRODUCER SUITE", duration: "2 Meses", activation: "Email Personal", format: "Digital", description: "paquete de suscripción de software para productores musicales que incluye herramientas completas para crear ritmos y remezclas", price: "$45.000", priceValue: 45000, badge: "2 Meses" },
  { category: "Diseño", name: "Wondershare filmora 15", duration: "12 Meses", activation: "Email Personal", format: "Digital", description: "Activacion con Gmail - Edición de Video Potenciada por IA - Licencia global por 1 año | 5 dispositivos (PC, Mac, Android, iOS)", price: "$90.000", priceValue: 90000, badge: "12 Meses" },
  { category: "Acceso Remoto", name: "Anydesk - Correo Personal 1 sola Conexion", duration: "1 Año", activation: "Email Personal", format: "Digital", description: "Conexiones Ilimitadas sin limite de tiempo", price: "$90.000", priceValue: 90000, badge: "1 Año" },
  { category: "Acceso Remoto", name: "Anydesk - Correo Personal 2 Conexiones al tiempo", duration: "1 Año", activation: "Email Personal", format: "Digital", description: "Conexiones Ilimitadas sin limite de tiempo", price: "$150.000", priceValue: 150000, badge: "1 Año" },
  { category: "Diseño", name: "Adobe Creative Cloud", duration: "6 Meses", activation: "Email Personal", format: "Digital", description: "Suite mas 20 apps, Adobe incluye Photoshop, Illustrator, Premiere Pro, After Effects, Acrobat Pro", price: "$150.000", priceValue: 150000, badge: "6 Meses" },
  { category: "Diseño", name: "Adobe Creative Cloud", duration: "12 Meses", activation: "Email Personal", format: "Digital", description: "Suite mas 20 apps, Adobe incluye Photoshop, Illustrator, Premiere Pro, After Effects, Acrobat Pro", price: "$200.000", priceValue: 200000, badge: "12 Meses" },
  { category: "CAD/Ingeniería", name: "AutoCAD", duration: "1 año", activation: "Email Personal", format: "Digital", description: "Software de diseño CAD profesional.", price: "$20.000", priceValue: 20000, badge: "1 año" },
  { category: "CAD/Ingeniería", name: "AutoDesk Suite", duration: "1 año", activation: "Email Personal", format: "Digital", description: "Acceso completo a herramientas de Autodesk (2022-2026). La Autodesk Suite 2026 reúne en una sola licencia digital las principales herramientas profesionales de Autodesk para arquitectura, ingeniería, construcción, manufactura e imagen 3D. Incluye programas como AutoCAD, Revit, Civil 3D, Inventor, Fusion, Advance Steel, Navisworks, InfraWorks, Robot Structural Analysis, 3ds Max, Maya, Arnold, VRED, entre otros.", price: "$20.000", priceValue: 20000, badge: "1 año" },
  { category: "CAD/Ingeniería", name: "AutoDesk Suite", duration: "2 año", activation: "Email Personal", format: "Digital", description: "Acceso completo a herramientas de Autodesk (2022-2026). La Autodesk Suite 2026 reúne en una sola licencia digital las principales herramientas profesionales de Autodesk para arquitectura, ingeniería, construcción, manufactura e imagen 3D. Incluye programas como AutoCAD, Revit, Civil 3D, Inventor, Fusion, Advance Steel, Navisworks, InfraWorks, Robot Structural Analysis, 3ds Max, Maya, Arnold, VRED, entre otros.", price: "$40.000", priceValue: 40000, badge: "2 año" },
  { category: "Antivirus", name: "McAfee Total Protection", duration: "4 años", activation: "KEY", format: "Digital", description: "Antivirus y seguridad completa.", price: "$25.000", priceValue: 25000, badge: "4 años" },
  { category: "Diseño", name: "Adobe Acrobat Pro 2020", duration: "Permanente", activation: "KEY", format: "Digital", description: "Versión vitalicia de Acrobat Pro.", price: "$75.000", priceValue: 75000, badge: "Vitalicio" },
  { category: "Diseño", name: "Canva Pro Premium", duration: "1 año", activation: "Email Personal", format: "Digital", description: "Funciones ilimitadas para diseño.", price: "$25.000", priceValue: 25000, badge: "1 año" },
  { category: "Office", name: "Microsoft Office 365 FAMILY (Personal - Invitacion)", duration: "1 año", activation: "Email Personal", format: "Digital", description: "1 TB OneDrive por usuario, hasta 6 usuarios.", price: "$135.000", priceValue: 135000, badge: "1 año" },
  { category: "Office", name: "Microsoft Office 365 familia (CODIGO CANJEABLE)", duration: "1 año", activation: "Email Personal", format: "Digital", description: "1 TB OneDrive por usuario, hasta 6 usuarios.", price: "$320.000", priceValue: 320000, badge: "1 año" },
  { category: "Office", name: "Microsoft Office 365 familia (cuenta predeterminada)", duration: "1 año", activation: "Predeterminada", format: "Digital", description: "1 TB OneDrive, 25 Equipos, Microsoft Defender.", price: "$280.000", priceValue: 280000, badge: "1 año" },
  { category: "Office", name: "Microsoft Office 365 Personal 5 equipos 1 TB (Email personal - Invitacion)", duration: "1 año", activation: "Email Personal", format: "Digital", description: "1 TB OneDrive, 5 Equipos.", price: "$80.000", priceValue: 80000, badge: "1 año" },
  { category: "Office", name: "Microsoft Office 365 Personal plan (Email Personal - Codigo canjeable)", duration: "1 año", activation: "Email Personal", format: "Digital", description: "1 TB OneDrive, 5 Equipos.", price: "$235.000", priceValue: 235000, badge: "1 año" },
  { category: "Office", name: "Microsoft Office 365 Professional Plus 100Gb OneDrive", duration: "1 año", activation: "Predeterminada", format: "Digital", description: "100Gb OneDrive,Outlook Paquete Oficina", price: "$20.000", priceValue: 20000, badge: "1 año" },
  { category: "Office", name: "Microsoft Office 2024 Profesional Plus", duration: "Permanente", activation: "KEY", format: "Digital", description: "Incluye Word, Excel, PowerPoint, Outlook, Access.", price: "$35.000", priceValue: 35000, badge: "Vitalicio" },
  { category: "Office", name: "Microsoft Office 2021 Profesional", duration: "Permanente", activation: "KEY", format: "Digital", description: "Compatible con Windows 10 y 11.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Office", name: "Microsoft Office 2019 Profesional", duration: "Permanente", activation: "KEY", format: "Digital", description: "Compatible con Windows 10 y 11.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Office", name: "Microsoft Office 2016 Profesional", duration: "Permanente", activation: "KEY", format: "Digital", description: "Ideal para equipos antiguos.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Microsoft", name: "Microsoft Project 2021 Profesional", duration: "Permanente", activation: "KEY", format: "Digital", description: "Gestión de proyectos avanzada.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Microsoft", name: "Microsoft Visio 2021 Profesional", duration: "Permanente", activation: "KEY", format: "Digital", description: "Diseño de diagramas profesionales.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Microsoft", name: "Microsoft Project 2024 Profesional", duration: "Permanente", activation: "KEY", format: "Digital", description: "Última versión de Project.", price: "$38.000", priceValue: 38000, badge: "Vitalicio" },
  { category: "Microsoft", name: "Microsoft Visio 2024 Profesional", duration: "Permanente", activation: "KEY", format: "Digital", description: "Última versión de Visio.", price: "$38.000", priceValue: 38000, badge: "Vitalicio" },
  { category: "Microsoft", name: "Microsoft Power BI Profesional", duration: "2 años", activation: "KEY", format: "Digital", description: "Herramienta de análisis de datos.", price: "$65.000", priceValue: 65000, badge: "2 años" },
  { category: "Windows", name: "Windows 10 Profesional OEM", duration: "Permanente", activation: "KEY", format: "Digital", description: "Activación oficial y segura.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Windows", name: "Windows 11 Profesional OEM", duration: "Permanente", activation: "KEY", format: "Digital", description: "Versión más reciente.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Windows", name: "Windows 10 Home OEM", duration: "Permanente", activation: "KEY", format: "Digital", description: "Ideal para uso doméstico.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Windows", name: "Windows 11 Home OEM", duration: "Permanente", activation: "KEY", format: "Digital", description: "Uso personal y educativo.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2025 - 50 CAL - 1 licencia 50 Usuarios", duration: "Permanente", activation: "KEY", format: "Digital", description: "Una CAL de Windows Server es una licencia que concede a usuarios o dispositivos RDP para 50 Usuarios.", price: "$80.000", priceValue: 80000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server Datacenter 2025", duration: "Permanente", activation: "KEY", format: "Digital", description: "Versión avanzada para servidores.", price: "$60.000", priceValue: 60000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server Standard 2025", duration: "Permanente", activation: "KEY", format: "Digital", description: "Ideal para PYMES y corporaciones.", price: "$60.000", priceValue: 60000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server Standard 2019", duration: "Permanente", activation: "KEY", format: "Digital", description: "Compatibilidad con versiones anteriores.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Microsoft", name: "Microsoft SQL Server Standard 2022", duration: "Permanente", activation: "KEY", format: "Digital", description: "Base de datos empresarial potente.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2022 Standard 2PC", duration: "Permanente", activation: "KEY", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$40.000", priceValue: 40000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2022 Standard 5PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$80.000", priceValue: 80000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2022 Standard 100PC [MAK:Volume]", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$150.000", priceValue: 150000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2022 Datacenter 2PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$35.000", priceValue: 35000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2022 Datacenter 5PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$95.000", priceValue: 95000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2022 Datacenter 1000PC [MAK:Volume]", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$220.000", priceValue: 220000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2019 Standard 2PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$30.000", priceValue: 30000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2019 Standard 5PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$90.000", priceValue: 90000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2019 Standard 100PC [MAK:Volume]", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$180.000", priceValue: 180000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2019 Datacenter 2PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$30.000", priceValue: 30000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2019 Datacenter 1000PC [MAK:Volume]", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$150.000", priceValue: 150000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2019 Essentials 2PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$50.000", priceValue: 50000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2019 Essentials 5PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$90.000", priceValue: 90000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2016 Standard 2PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$40.000", priceValue: 40000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2016 Standard 5PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$80.000", priceValue: 80000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2016 Datacenter 2PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$40.000", priceValue: 40000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2016 Essentials 2PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$30.000", priceValue: 30000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2016 Essentials 5PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$40.000", priceValue: 40000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2016 R2 Standard 2PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$50.000", priceValue: 50000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2012 Standard 5PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$70.000", priceValue: 70000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2012 Datacenter 5PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$70.000", priceValue: 70000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2012 Essentials 2PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2012 R2 Standard 5PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$30.000", priceValue: 30000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2012 R2 Datacenter 5PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$50.000", priceValue: 50000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2012 R2 Essentials 5PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2008 Standard 1PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2008 R2 Standard 1PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2008 R2 Datacenter 1PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2008 R2 Enterprise 1PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$25.000", priceValue: 25000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2022 Remote Desktop Services User connections (50) CAL", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$90.000", priceValue: 90000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2022 Remote Desktop Services Device connections (50) CAL", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$90.000", priceValue: 90000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2019 Remote Desktop Services User connections (50) CAL", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$70.000", priceValue: 70000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2019 Remote Desktop Services Device connections (50) CAL", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$70.000", priceValue: 70000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2016 Remote Desktop Services User connections (50) CAL", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$60.000", priceValue: 60000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2016 Remote Desktop Services Device connections (50) CAL", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$60.000", priceValue: 60000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2012 Remote Desktop Services User connections (50) CAL", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$60.000", priceValue: 60000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2012 Remote Desktop Services Device connections (50) CAL", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$50.000", priceValue: 50000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2012 R2 Remote Desktop Services User connections (50) CAL", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$50.000", priceValue: 50000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2012 R2 Remote Desktop Services Device connections (50) CAL", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$50.000", priceValue: 50000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2008 R2 Remote Desktop Services Device connections (20) CAL", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$40.000", priceValue: 40000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2008 R2 Remote Desktop Services User connections (20) CAL", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$40.000", priceValue: 40000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2025 Datacenter 1000PC [MAK:Volume]", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$180.000", priceValue: 180000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2025 Datacenter 5PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$150.000", priceValue: 150000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2025 Standard 100PC [MAK:Volume]", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$250.000", priceValue: 250000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2025 Standard 5PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$10.000", priceValue: 10000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2025 Remote Desktop Services Device connections (50) CAL", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$120.000", priceValue: 120000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2025 Remote Desktop Services User connections (50) CAL", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$90.000", priceValue: 90000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2025 Standard 2PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$80.000", priceValue: 80000, badge: "Vitalicio" },
  { category: "Windows Server", name: "Windows Server 2025 Datacenter 2PC", duration: "Permanente", activation: "Key", format: "Digital", description: "Licencia digital con activación key y soporte por WhatsApp.", price: "$80.000", priceValue: 80000, badge: "Vitalicio" },
];

export type LicenseType = LicenseCategory;
export const licenseTypes = licenseCategories;
