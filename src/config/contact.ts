/**
 * Public contact channels for inquiries.
 *
 * Fill these in before launch:
 * WHATSAPP_NUMBER uses international format, digits only, no "+" or spaces (e.g. "6281234567890").
 * CONTACT_EMAIL is the inbox that receives project inquiries.
 *
 * While a value is empty, its buttons are shown as disabled and the floating WhatsApp button is hidden.
 */
export const WHATSAPP_NUMBER = "628194255211";
export const CONTACT_EMAIL = "support@nawantech.com";

export const isWhatsAppConfigured = WHATSAPP_NUMBER.trim().length > 0;
export const isEmailConfigured = CONTACT_EMAIL.trim().length > 0;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoUrl(subject: string, body: string): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
