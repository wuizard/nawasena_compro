import { SECTION_IDS } from "@/config/site";
import type { Localized } from "@/features/i18n";

type NavContent = {
  links: { href: string; label: string }[];
  cta: string;
  menu: string;
  close: string;
};

export const navContent: Localized<NavContent> = {
  id: {
    links: [
      { href: `#${SECTION_IDS.services}`, label: "Layanan" },
      { href: `#${SECTION_IDS.products}`, label: "Produk" },
      { href: `#${SECTION_IDS.about}`, label: "Tentang" },
      { href: `#${SECTION_IDS.contact}`, label: "Kontak" },
    ],
    cta: "Diskusikan Proyek",
    menu: "Buka menu",
    close: "Tutup menu",
  },
  en: {
    links: [
      { href: `#${SECTION_IDS.services}`, label: "Services" },
      { href: `#${SECTION_IDS.products}`, label: "Products" },
      { href: `#${SECTION_IDS.about}`, label: "About" },
      { href: `#${SECTION_IDS.contact}`, label: "Contact" },
    ],
    cta: "Build With Us",
    menu: "Open menu",
    close: "Close menu",
  },
};
