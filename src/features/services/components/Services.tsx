"use client";

import { Card } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import type { MouseEvent } from "react";
import { SECTION_IDS } from "@/config/site";
import { useCopy } from "@/features/i18n";
import { LinkButton } from "@/shared/components/LinkButton";
import { Reveal } from "@/shared/components/Reveal";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { servicesContent } from "../content";

const trackPointer = (event: MouseEvent<HTMLDivElement>) => {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
};

export function Services() {
  const copy = useCopy(servicesContent);

  return (
    <section id={SECTION_IDS.services} className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-20 size-[420px] rounded-full bg-brand-blue/10 blur-[140px]" aria-hidden />
      <div className="container-x relative">
        <SectionHeading index="01" eyebrow={copy.eyebrow} title={copy.title} description={copy.intro} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {copy.items.map((item, i) => {
            const Icon = item.icon;
            // Bento layout: first two cards are wider on large screens.
            const span = i < 2 ? "lg:col-span-3" : "lg:col-span-2";
            return (
              <Reveal key={item.title} delay={0.06 * i} className={`${span} ${i === 4 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
                <Card onMouseMove={trackPointer} className="glass-card spotlight group h-full gap-0 p-6 sm:p-7">
                  <Card.Header className="flex flex-row items-center justify-between gap-4 p-0">
                    <span className="flex size-12 items-center justify-center rounded-xl border border-brand-blue/30 bg-brand-blue/10 text-brand-sky shadow-[0_0_24px_-6px_rgba(53,99,255,0.7)] transition-transform duration-500 group-hover:scale-110">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                  </Card.Header>
                  <Card.Content className="mt-8 p-0">
                    <Card.Title className="text-lg font-semibold text-white sm:text-xl">{item.title}</Card.Title>
                    <Card.Description className="mt-3 text-sm leading-relaxed text-white/60 sm:text-[15px]">
                      {item.body}
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <LinkButton href={`#${SECTION_IDS.contact}`} size="lg" className="glow-button">
            {copy.cta}
            <ArrowRight className="size-4" />
          </LinkButton>
        </Reveal>
      </div>
    </section>
  );
}
