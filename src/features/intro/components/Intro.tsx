"use client";

import { SECTION_IDS } from "@/config/site";
import { useCopy, type Localized } from "@/features/i18n";
import { Reveal } from "@/shared/components/Reveal";

const content: Localized<{ title: string; body: string; areasLabel: string; areas: { name: string; body: string }[] }> = {
  id: {
    title: "Dari ide menjadi teknologi yang berguna.",
    body: "Setiap bisnis memiliki kebutuhan yang berbeda. Kami membantu menerjemahkannya menjadi solusi digital yang jelas, relevan, dan siap dikembangkan bersama pertumbuhan bisnis Anda.",
    areasLabel: "Dua bidang utama",
    areas: [
      {
        name: "Client Solutions",
        body: "Pengembangan software, aplikasi, sistem internal, integrasi, serta automation dan AI berdasarkan kebutuhan bisnis klien.",
      },
      {
        name: "Digital Products",
        body: "Pengembangan SaaS, AI tools, aplikasi, dan platform digital milik perusahaan, mulai dari eksplorasi kebutuhan hingga pengembangan produk.",
      },
    ],
  },
  en: {
    title: "Turning ideas into useful technology.",
    body: "Every business has different needs. We help translate them into practical digital solutions with a clear purpose and room to grow.",
    areasLabel: "Two areas of work",
    areas: [
      {
        name: "Client Solutions",
        body: "Software, applications, internal systems, integrations, automation, and AI built around each client's business needs.",
      },
      {
        name: "Digital Products",
        body: "SaaS, AI tools, applications, and digital platforms developed by the company, from exploring needs to building the product.",
      },
    ],
  },
};

export function Intro() {
  const copy = useCopy(content);

  return (
    <section id={SECTION_IDS.intro} className="relative py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg">{copy.body}</p>
        </Reveal>

        <div className="flex flex-col gap-4">
          <Reveal>
            <span className="eyebrow">{copy.areasLabel}</span>
          </Reveal>
          {copy.areas.map((area, i) => (
            <Reveal key={area.name} delay={0.1 * (i + 1)}>
              <div className="glass-card group relative overflow-hidden p-6 sm:p-7">
                <div className="flex items-start gap-5">
                  <span className="font-mono text-sm text-brand-blue">0{i + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{area.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">{area.body}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
