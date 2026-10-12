import { Blocks, BrainCircuit, Code2, Compass, Smartphone, type LucideIcon } from "lucide-react";
import type { Localized } from "@/features/i18n";

type Service = { icon: LucideIcon; title: string; body: string };

type ServicesContent = {
  eyebrow: string;
  title: string;
  intro: string;
  cta: string;
  items: Service[];
};

const icons = [Code2, Smartphone, Blocks, BrainCircuit, Compass];
const titles = [
  "Software Development",
  "Web & Mobile Applications",
  "Digital Product Development",
  "Automation & AI",
  "Technology Consulting",
];

const withMeta = (bodies: string[]): Service[] =>
  bodies.map((body, i) => ({ icon: icons[i], title: titles[i], body }));

export const servicesContent: Localized<ServicesContent> = {
  id: {
    eyebrow: "Layanan Kami",
    title: "Membangun solusi untuk kebutuhan Anda.",
    intro:
      "Dari sistem operasional hingga pengalaman pengguna, kami membantu merancang teknologi sesuai tujuan bisnis Anda.",
    cta: "Ceritakan Kebutuhan Anda",
    items: withMeta([
      "Software khusus dan sistem internal yang mendukung alur kerja, pengelolaan data, dan kebutuhan operasional bisnis.",
      "Website dan aplikasi yang menghubungkan bisnis dengan pengguna melalui pengalaman yang jelas dan mudah digunakan.",
      "Pengembangan ide menjadi produk digital, dari penentuan kebutuhan dan MVP hingga pengembangan fitur berikutnya.",
      "Integrasi, otomatisasi alur kerja, dan penerapan AI untuk membantu menangani tugas berulang serta mengolah informasi.",
      "Pendampingan dalam menentukan kebutuhan, prioritas pengembangan, dan arah teknologi yang sesuai dengan tujuan bisnis.",
    ]),
  },
  en: {
    eyebrow: "Our Services",
    title: "Built around your business needs.",
    intro: "From operational systems to user experience, we help design technology that fits your business goals.",
    cta: "Tell Us What You Need",
    items: withMeta([
      "Custom software and internal systems that support workflows, data management, and business operations.",
      "Websites and applications that connect businesses with users through clear, accessible experiences.",
      "Support for turning an idea into a digital product, from defining requirements and building an MVP to developing its next features.",
      "Integrations, workflow automation, and AI applications that help handle repetitive tasks and make information more useful.",
      "Guidance on requirements, development priorities, and technology choices aligned with business goals.",
    ]),
  },
};
