"use client";

import { SECTION_IDS } from "@/config/site";
import { useCopy, type Localized } from "@/features/i18n";
import { Reveal } from "@/shared/components/Reveal";
import { SectionHeading } from "@/shared/components/SectionHeading";

type AboutContent = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  missionLabel: string;
  mission: string;
  visionLabel: string;
  vision: string;
  nameLabel: string;
  nameParts: { word: string; meaning: string }[];
  principlesLabel: string;
  principles: { title: string; body: string }[];
};

const content: Localized<AboutContent> = {
  id: {
    eyebrow: "Tentang",
    title: "Masa depan dengan kemungkinan tanpa batas.",
    paragraphs: [
      "Nawasena Ananta adalah perusahaan teknologi dan produk digital yang berfokus pada pengembangan solusi untuk bisnis dan produk milik perusahaan.",
      "Kami percaya bahwa kemajuan lahir dari ide yang dipahami dengan baik dan dibangun dengan tujuan yang jelas. Melalui software, aplikasi, dan teknologi yang relevan, kami membantu membuka langkah berikutnya bagi bisnis dan pengguna.",
    ],
    missionLabel: "Misi Kami",
    mission: "Mengubah ide menjadi teknologi yang berguna dan dapat berkembang.",
    visionLabel: "Visi",
    vision: "Membangun teknologi dan produk digital yang membuka kemungkinan tanpa batas bagi masa depan.",
    nameLabel: "Filosofi nama",
    nameParts: [
      { word: "Nawasena", meaning: "Semangat masa depan baru, harapan, dan kemajuan." },
      { word: "Ananta", meaning: "Kemungkinan tanpa batas." },
    ],
    principlesLabel: "Prinsip kerja",
    principles: [
      { title: "Memahami sebelum membangun.", body: "Mulai dari tujuan bisnis, kebutuhan pengguna, dan masalah yang ingin diselesaikan." },
      { title: "Membuat teknologi bermanfaat.", body: "Utamakan fungsi, kemudahan penggunaan, dan dampak yang relevan." },
      { title: "Berkomunikasi dengan jelas.", body: "Jelaskan prioritas, pilihan, dan batasan agar keputusan dapat dibuat bersama." },
      { title: "Membangun untuk berkembang.", body: "Siapkan dasar yang dapat dipelihara dan ditingkatkan sesuai kebutuhan." },
      { title: "Melangkah secara terarah.", body: "Ubah ide besar menjadi langkah pengembangan yang realistis." },
    ],
  },
  en: {
    eyebrow: "About",
    title: "A future of limitless possibilities.",
    paragraphs: [
      "Nawasena Ananta is a technology and digital product company focused on solutions for businesses and products of its own.",
      "We believe progress begins with an idea that is understood well and built with purpose. Through software, applications, and relevant technology, we help businesses and users take their next step.",
    ],
    missionLabel: "Our Mission",
    mission: "Transform ideas into useful, scalable technology.",
    visionLabel: "Vision",
    vision: "Build technology and digital products that create limitless possibilities for the future.",
    nameLabel: "The name",
    nameParts: [
      { word: "Nawasena", meaning: "The spirit of a new future, hope, and progress." },
      { word: "Ananta", meaning: "Limitless possibility." },
    ],
    principlesLabel: "How we work",
    principles: [
      { title: "Understand before building.", body: "Start from business goals, user needs, and the problem to solve." },
      { title: "Make technology useful.", body: "Prioritise function, ease of use, and relevant impact." },
      { title: "Communicate clearly.", body: "Explain priorities, options, and constraints so decisions are made together." },
      { title: "Build to grow.", body: "Lay foundations that can be maintained and improved as needs change." },
      { title: "Move with direction.", body: "Turn big ideas into realistic development steps." },
    ],
  },
};

export function About() {
  const copy = useCopy(content);

  return (
    <section id={SECTION_IDS.about} className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="pointer-events-none absolute left-0 top-1/3 size-[480px] rounded-full bg-brand-blue/10 blur-[140px]" aria-hidden />
      <div className="container-x relative">
        <SectionHeading index="04" eyebrow={copy.eyebrow} title={copy.title} />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="flex flex-col gap-6">
            {copy.paragraphs.map((p) => (
              <p key={p} className="text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
                {p}
              </p>
            ))}

            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              {copy.nameParts.map((part) => (
                <div key={part.word} className="glass-card p-5">
                  <span className="eyebrow">{copy.nameLabel}</span>
                  <p className="mt-3 text-2xl font-semibold text-gradient">{part.word}</p>
                  <p className="mt-1 text-sm text-white/60">{part.meaning}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-3xl border border-brand-blue/30 bg-gradient-to-br from-brand-blue/25 via-brand-blue/5 to-transparent p-7 sm:p-8">
              <div className="grid-bg-fine pointer-events-none absolute inset-0 opacity-50" aria-hidden />
              <span className="eyebrow relative">{copy.missionLabel}</span>
              <p className="relative mt-4 text-balance text-2xl font-semibold leading-snug text-white sm:text-3xl">
                {copy.mission}
              </p>
            </div>
            <div className="glass-card p-7 sm:p-8">
              <span className="eyebrow">{copy.visionLabel}</span>
              <p className="mt-4 text-lg leading-relaxed text-white/80">{copy.vision}</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <span className="eyebrow">{copy.principlesLabel}</span>
        </Reveal>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {copy.principles.map((principle, i) => (
            <li key={principle.title}>
              <Reveal delay={0.05 * i} className="glass-card h-full p-5">
                <span className="font-mono text-xs text-brand-blue">P.0{i + 1}</span>
                <p className="mt-3 font-semibold text-white">{principle.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{principle.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
