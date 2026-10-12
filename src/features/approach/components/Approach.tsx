"use client";

import { SECTION_IDS } from "@/config/site";
import { useCopy, type Localized } from "@/features/i18n";
import { Reveal } from "@/shared/components/Reveal";
import { SectionHeading } from "@/shared/components/SectionHeading";

type Step = { title: string; body: string };

const content: Localized<{ eyebrow: string; title: string; steps: Step[] }> = {
  id: {
    eyebrow: "Pendekatan",
    title: "Langkah yang jelas untuk membangun bersama.",
    steps: [
      { title: "Pahami", body: "Selaraskan tujuan, pengguna, kebutuhan, dan ruang lingkup pekerjaan." },
      { title: "Rancang", body: "Tentukan pengalaman pengguna, prioritas fitur, dan pendekatan teknologi." },
      { title: "Bangun", body: "Kembangkan dan uji solusi secara bertahap sesuai ruang lingkup yang disepakati." },
      { title: "Kembangkan", body: "Gunakan masukan dan kebutuhan berikutnya sebagai dasar peningkatan." },
    ],
  },
  en: {
    eyebrow: "Approach",
    title: "A clear path from idea to implementation.",
    steps: [
      { title: "Understand", body: "Align on goals, users, needs, and scope." },
      { title: "Design", body: "Define the experience, feature priorities, and technical approach." },
      { title: "Build", body: "Develop and test the solution in stages within the agreed scope." },
      { title: "Improve", body: "Use feedback and evolving needs to guide the next steps." },
    ],
  },
};

export function Approach() {
  const copy = useCopy(content);

  return (
    <section id={SECTION_IDS.approach} className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading index="02" eyebrow={copy.eyebrow} title={copy.title} />

        <div className="relative mt-16">
          <div
            className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-blue via-brand-blue/40 to-transparent md:left-0 md:top-[19px] md:h-px md:w-full md:bg-gradient-to-r"
            aria-hidden
          />
          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {copy.steps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={0.1 * i} className="flex gap-5 md:flex-col md:gap-6">
                  <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-brand-blue/50 bg-[#0a1224] font-mono text-xs text-brand-sky shadow-[0_0_24px_-4px_rgba(53,99,255,0.8)]">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-[15px]">{step.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
