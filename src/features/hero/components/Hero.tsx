"use client";

import { Chip } from "@heroui/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { SECTION_IDS } from "@/config/site";
import { useCopy } from "@/features/i18n";
import { LinkButton } from "@/shared/components/LinkButton";
import { heroContent } from "../content";
import { OrbitCore } from "./OrbitCore";

// CSS driven entrance so the hero is visible before hydration.
const enter = (delay: number) => ({ className: "hero-enter", style: { animationDelay: `${delay}s` } });

export function Hero() {
  const copy = useCopy(heroContent);

  return (
    <section
      id={SECTION_IDS.home}
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 sm:pt-32"
    >
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[520px] rounded-full bg-brand-blue/20 blur-[140px]" aria-hidden />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-[420px] rounded-full bg-cyan-400/10 blur-[140px]" aria-hidden />
      <div className="scanline pointer-events-none absolute inset-x-0 top-0 h-px" aria-hidden />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="flex flex-col items-start gap-7">
          <div {...enter(0)}>
            <Chip variant="soft" color="accent" className="border border-brand-blue/30 bg-brand-blue/10 px-3 text-brand-sky">
              <span className="relative mr-1 flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-blue opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-blue" />
              </span>
              <Chip.Label className="font-mono text-[11px] uppercase tracking-[0.22em]">{copy.eyebrow}</Chip.Label>
            </Chip>
          </div>

          <h1
            style={enter(0.1).style}
            className="hero-enter text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {copy.titleLead} <span className="text-gradient">{copy.titleAccent}</span>
          </h1>

          <p style={enter(0.2).style} className="hero-enter max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
            {copy.description}
          </p>

          <div style={enter(0.3).style} className="hero-enter flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <LinkButton href={`#${SECTION_IDS.contact}`} size="lg" className="glow-button w-full sm:w-auto">
              {copy.primaryCta}
              <ArrowRight className="size-4" />
            </LinkButton>
            <LinkButton
              href={`#${SECTION_IDS.services}`}
              size="lg"
              variant="outline"
              className="w-full border-white/15 bg-white/[0.03] text-white hover:bg-white/10 sm:w-auto"
            >
              {copy.secondaryCta}
            </LinkButton>
          </div>

          <div style={enter(0.4).style} className="hero-enter flex items-center gap-3 pt-2 font-mono text-xs uppercase tracking-[0.25em] text-white/40">
            <span className="h-px w-10 bg-white/20" />
            {copy.supporting}
          </div>
        </div>

        <div style={{ animationDelay: "0.2s" }} className="hero-enter-scale px-6 sm:px-10 lg:px-0">
          <OrbitCore pillars={copy.pillars} />
        </div>
      </div>

      <a
        href={`#${SECTION_IDS.intro}`}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 transition-colors hover:text-white sm:flex"
      >
        {copy.scroll}
        <ArrowDown className="size-4 animate-bounce" />
      </a>
    </section>
  );
}
