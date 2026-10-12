"use client";

import { buildWhatsAppUrl, isWhatsAppConfigured } from "@/config/contact";
import { useCopy } from "@/features/i18n";
import { WhatsAppIcon } from "@/shared/components/icons";
import { contactContent } from "../content";

export function FloatingWhatsApp() {
  const copy = useCopy(contactContent);
  if (!isWhatsAppConfigured) return null;

  return (
    <a
      href={buildWhatsAppUrl(copy.floatingMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={copy.floatingLabel}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-[#062a14] shadow-[0_10px_40px_-6px_rgba(37,211,102,0.75)] transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" aria-hidden />
      <WhatsAppIcon className="relative size-6" />
      <span className="relative hidden pr-1 text-sm font-medium sm:inline">{copy.floatingLabel}</span>
    </a>
  );
}
