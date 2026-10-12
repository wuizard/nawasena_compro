import type { Localized } from "@/features/i18n";
import type { ProductStatus } from "./data/products";

type ProductsContent = {
  eyebrow: string;
  title: string;
  intro: string;
  cta: string;
  featuresLabel: string;
  screensLabel: string;
  originLabel: string;
  originCta: string;
  status: Record<ProductStatus, string>;
};

export const productsContent: Localized<ProductsContent> = {
  id: {
    eyebrow: "Produk",
    title: "Produk yang membuka kemungkinan baru.",
    intro:
      "Kami mengembangkan produk digital milik perusahaan untuk menjawab kebutuhan yang relevan dan menciptakan manfaat bagi penggunanya.",
    cta: "Jelajahi Produk",
    featuresLabel: "Kemampuan utama",
    screensLabel: "Tampilan produk",
    originLabel: "Asal produk",
    originCta: "Kunjungi Wuebuild",
    status: { available: "Tersedia", beta: "Beta", "in-development": "Dalam Pengembangan" },
  },
  en: {
    eyebrow: "Products",
    title: "Products that open new possibilities.",
    intro:
      "We develop our own digital products to address relevant needs and create useful experiences for their users.",
    cta: "Explore",
    featuresLabel: "Key capabilities",
    screensLabel: "Product screens",
    originLabel: "Origin",
    originCta: "Visit Wuebuild",
    status: { available: "Available", beta: "Beta", "in-development": "In Development" },
  },
};
