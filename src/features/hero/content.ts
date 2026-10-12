import type { Localized } from "@/features/i18n";

type HeroContent = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  supporting: string;
  pillars: string[];
  scroll: string;
};

export const heroContent: Localized<HeroContent> = {
  id: {
    eyebrow: "Nawasena Ananta",
    titleLead: "Teknologi untuk",
    titleAccent: "langkah berikutnya.",
    description:
      "Kami merancang dan membangun software, produk digital, serta solusi teknologi yang membantu bisnis Anda melangkah maju.",
    primaryCta: "Diskusikan Proyek",
    secondaryCta: "Jelajahi Layanan",
    supporting: "Building What Comes Next.",
    pillars: ["Software", "Web & Mobile", "Produk Digital", "Automation & AI"],
    scroll: "Gulir",
  },
  en: {
    eyebrow: "Nawasena Ananta",
    titleLead: "Technology for",
    titleAccent: "what comes next.",
    description:
      "We design and build software, digital products, and technology solutions that help businesses move forward.",
    primaryCta: "Build With Us",
    secondaryCta: "Explore Our Services",
    supporting: "Building What Comes Next.",
    pillars: ["Software", "Web & Mobile", "Digital Products", "Automation & AI"],
    scroll: "Scroll",
  },
};
