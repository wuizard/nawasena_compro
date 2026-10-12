"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { SITE } from "@/config/site";
import { useCopy } from "@/features/i18n";
import { navContent } from "@/features/navigation/content";

const subscribeNever = () => () => {};
const currentYear = () => new Date().getFullYear();

export function Footer() {
  const nav = useCopy(navContent);
  // Read the current year on the client so the prerendered page never shows a stale year.
  const year = useSyncExternalStore(subscribeNever, currentYear, () => null);

  return (
    <footer className="relative border-t border-white/[0.06] pb-10 pt-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/60 to-transparent" aria-hidden />
      <div className="container-x flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-4">
            <Image
              src="/brand/logos/na-horizontal-reverse.svg"
              alt={SITE.logoAlt}
              width={2090}
              height={343}
              className="h-auto w-[240px]"
            />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/45">{SITE.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/55 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            ©{year ? ` ${year}` : ""} {SITE.legalName}.
          </p>
          <a href={SITE.url} className="font-mono text-xs tracking-wider transition-colors hover:text-white">
            {SITE.domain}
          </a>
        </div>
      </div>
    </footer>
  );
}
