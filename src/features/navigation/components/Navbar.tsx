"use client";

import { Button, Drawer } from "@heroui/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SECTION_IDS, SITE } from "@/config/site";
import { LocaleSwitch, useCopy } from "@/features/i18n";
import { LinkButton } from "@/shared/components/LinkButton";
import { navContent } from "../content";

export function Navbar() {
  const copy = useCopy(navContent);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-2xl border px-3 transition-all duration-500 sm:h-16 sm:px-5 ${
          scrolled
            ? "border-white/10 bg-[#0a1224]/75 shadow-[0_10px_40px_-12px_rgba(53,99,255,0.35)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href={`#${SECTION_IDS.home}`} aria-label={`${SITE.name}, home`} className="flex shrink-0 items-center">
          <Image
            src="/brand/logos/na-horizontal-reverse.svg"
            alt={SITE.logoAlt}
            width={2090}
            height={343}
            priority
            className="hidden h-auto w-[200px] sm:block lg:w-[220px]"
          />
          <Image
            src="/brand/logos/na-symbol-primary.svg"
            alt={SITE.logoAlt}
            width={610}
            height={319}
            priority
            className="h-8 w-auto sm:hidden"
          />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {copy.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LocaleSwitch />
          <LinkButton href={`#${SECTION_IDS.contact}`} size="sm" className="glow-button hidden md:inline-flex">
            {copy.cta}
            <ArrowUpRight className="size-4" />
          </LinkButton>

          <Drawer isOpen={open} onOpenChange={setOpen}>
            <Button
              isIconOnly
              variant="ghost"
              size="sm"
              aria-label={copy.menu}
              className="text-white md:hidden"
            >
              <Menu className="size-5" />
            </Button>
            <Drawer.Backdrop className="bg-black/60 backdrop-blur-sm">
              <Drawer.Content placement="right">
                <Drawer.Dialog className="!bg-[#0a1224] text-white">
                  <Drawer.Header className="flex flex-row items-center justify-between">
                    <Drawer.Heading className="sr-only">Menu</Drawer.Heading>
                    <Image
                      src="/brand/logos/na-horizontal-reverse.svg"
                      alt={SITE.logoAlt}
                      width={2090}
                      height={343}
                      className="h-auto w-[180px]"
                    />
                    <Button
                      isIconOnly
                      variant="ghost"
                      size="sm"
                      slot="close"
                      aria-label={copy.close}
                      className="text-white"
                    >
                      <X className="size-5" />
                    </Button>
                  </Drawer.Header>
                  <Drawer.Body>
                    <ul className="mt-6 flex flex-col gap-1">
                      {copy.links.map((link, i) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-4 text-lg text-white/85 transition-colors hover:border-brand-blue/40 hover:text-white"
                          >
                            {link.label}
                            <span className="font-mono text-xs text-brand-blue">0{i + 1}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <LinkButton
                      href={`#${SECTION_IDS.contact}`}
                      fullWidth
                      size="lg"
                      className="glow-button"
                      onClick={() => setOpen(false)}
                    >
                      {copy.cta}
                      <ArrowUpRight className="size-4" />
                    </LinkButton>
                  </Drawer.Footer>
                </Drawer.Dialog>
              </Drawer.Content>
            </Drawer.Backdrop>
          </Drawer>
        </div>
      </nav>
    </header>
  );
}
