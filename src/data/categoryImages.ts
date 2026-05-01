import type { LicenseCategory } from "./catalog";
import imgWindows from "@/assets/cat-windows.jpg";
import imgWindowsServer from "@/assets/cat-windows-server.jpg";
import imgOffice from "@/assets/cat-office.jpg";
import imgMicrosoft from "@/assets/cat-microsoft.jpg";
import imgAntivirus from "@/assets/cat-antivirus.jpg";
import imgCad from "@/assets/cat-cad.jpg";
import imgDesign from "@/assets/cat-design.jpg";
import imgAi from "@/assets/cat-ai.jpg";
import imgStreaming from "@/assets/cat-streaming.jpg";
import imgPdf from "@/assets/cat-pdf.jpg";
import imgRemote from "@/assets/cat-remote.jpg";
import imgBackup from "@/assets/cat-backup.jpg";
import imgEducation from "@/assets/cat-education.jpg";
import imgBusiness from "@/assets/cat-business.jpg";
import imgUtilities from "@/assets/cat-utilities.jpg";

export const categoryImages: Record<LicenseCategory, string> = {
  "Acceso Remoto": imgRemote,
  "Antivirus": imgAntivirus,
  "Backup/Recovery": imgBackup,
  "CAD/Ingeniería": imgCad,
  "Diseño": imgDesign,
  "Educación/Audio": imgEducation,
  "IA": imgAi,
  "Microsoft": imgMicrosoft,
  "Negocios": imgBusiness,
  "Office": imgOffice,
  "PDF": imgPdf,
  "Streaming/Video": imgStreaming,
  "Utilidades": imgUtilities,
  "Windows": imgWindows,
  "Windows Server": imgWindowsServer,
};

export const getProductImage = (category: LicenseCategory) =>
  categoryImages[category] ?? imgUtilities;
