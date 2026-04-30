export const slugifyProduct = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const whatsappNumber = "573164720782";

export const createWhatsappUrl = (productName?: string, productPrice?: string) => {
  const message = productName
    ? `Hola 👋, quiero comprar ${productName} por ${productPrice || "el precio publicado"}. ¿Me ayudas con la activación?`
    : "Hola 👋, quiero comprar una licencia digital. ¿Me ayudas con la disponibilidad y activación?";

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};
