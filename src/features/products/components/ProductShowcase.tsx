"use client";

import { Chip, Tabs } from "@heroui/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useLocale, useCopy } from "@/features/i18n";
import { LinkButton } from "@/shared/components/LinkButton";
import { Reveal } from "@/shared/components/Reveal";
import { productsContent } from "../content";
import type { Product } from "../data/products";
import { BrowserFrame } from "./BrowserFrame";

export function ProductShowcase({ product }: { product: Product }) {
  const { locale } = useLocale();
  const copy = useCopy(productsContent);

  return (
    <article className="glass-card relative overflow-hidden p-5 sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-brand-blue/20 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 -left-20 size-96 rounded-full bg-emerald-400/10 blur-[120px]" aria-hidden />

      <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        {/* Product info */}
        <div className="flex flex-col gap-6">
          <Reveal className="flex items-center gap-4">
            <Image
              src={product.icon}
              alt={`${product.name} logo`}
              width={180}
              height={180}
              className="size-14 rounded-2xl border border-white/10 bg-white p-1.5"
            />
            <div className="flex flex-col gap-1.5">
              <h3 className="text-3xl font-semibold tracking-tight text-white">{product.name}</h3>
              <div className="flex flex-wrap items-center gap-2">
                <Chip size="sm" color="success" variant="soft" className="border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                  <span className="mr-1 size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.7)]" />
                  <Chip.Label>{copy.status[product.status]}</Chip.Label>
                </Chip>
                <span className="font-mono text-[11px] uppercase tracking-wider text-white/40">
                  {product.category[locale]}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-xl font-medium leading-snug text-white sm:text-2xl">
              <span className="text-gradient-green">{product.tagline[locale]}</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">{product.description[locale]}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">{copy.featuresLabel}</span>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li
                  key={feature.title.en}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition-colors hover:border-brand-blue/30"
                >
                  <p className="flex items-center gap-2 text-sm font-medium text-white">
                    <Sparkles className="size-3.5 text-brand-sky" />
                    {feature.title[locale]}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-white/50">{feature.body[locale]}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <LinkButton href={product.url} external size="lg" className="glow-button w-full sm:w-auto">
              {copy.cta} {product.name}
              <ArrowUpRight className="size-4" />
            </LinkButton>
          </Reveal>
        </div>

        {/* Screens */}
        <Reveal delay={0.1} className="flex min-w-0 flex-col gap-6">
          <Tabs className="w-full" aria-label={copy.screensLabel}>
            <Tabs.ListContainer className="w-fit">
              <Tabs.List aria-label={copy.screensLabel} className="w-fit rounded-full border border-white/10 bg-white/5 p-1">
                {product.screens.map((screen) => (
                  <Tabs.Tab
                    key={screen.id}
                    id={screen.id}
                    className="rounded-full px-4 font-mono text-xs uppercase tracking-wider text-white/60 data-[selected=true]:text-white"
                  >
                    {screen.label[locale]}
                    <Tabs.Indicator className="rounded-full bg-brand-blue shadow-[0_0_20px_-2px_rgba(53,99,255,0.9)]" />
                  </Tabs.Tab>
                ))}
              </Tabs.List>
            </Tabs.ListContainer>
            {product.screens.map((screen) => (
              <Tabs.Panel key={screen.id} id={screen.id} className="pt-5">
                <BrowserFrame url={product.urlLabel}>
                  <Image
                    src={screen.src}
                    alt={screen.alt[locale]}
                    width={screen.width}
                    height={screen.height}
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="h-auto w-full"
                  />
                </BrowserFrame>
              </Tabs.Panel>
            ))}
          </Tabs>

          {product.origin ? (
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="eyebrow">{copy.originLabel}</span>
                  <p className="mt-3 text-lg font-semibold text-white">
                    {product.name} <span className="text-white/40">×</span> {product.origin.studio}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{product.origin.note[locale]}</p>
                </div>
              </div>
              <LinkButton
                href={product.origin.url}
                external
                variant="outline"
                size="sm"
                className="mt-4 border-white/15 bg-white/[0.03] text-white hover:bg-white/10"
              >
                {copy.originCta}
                <span className="font-mono text-[11px] text-white/50">{product.origin.urlLabel}</span>
                <ArrowUpRight className="size-3.5" />
              </LinkButton>
            </div>
          ) : null}
        </Reveal>
      </div>
    </article>
  );
}
