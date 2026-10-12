"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import {
  CONTACT_EMAIL,
  WHATSAPP_NUMBER,
  buildWhatsAppUrl,
  isEmailConfigured,
  isWhatsAppConfigured,
} from "@/config/contact";
import { SECTION_IDS } from "@/config/site";
import { useCopy } from "@/features/i18n";
import { WhatsAppIcon } from "@/shared/components/icons";
import { Reveal } from "@/shared/components/Reveal";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { contactContent } from "../content";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const copy = useCopy(contactContent);

  const channels = [
    {
      key: "whatsapp",
      label: copy.whatsappLabel,
      value: isWhatsAppConfigured ? `+${WHATSAPP_NUMBER}` : copy.notConfigured,
      href: isWhatsAppConfigured ? buildWhatsAppUrl(copy.floatingMessage) : undefined,
      icon: <WhatsAppIcon className="size-5" />,
      accent: "text-[#25D366] border-[#25D366]/30 bg-[#25D366]/10",
    },
    {
      key: "email",
      label: copy.emailLabel,
      value: isEmailConfigured ? CONTACT_EMAIL : copy.notConfigured,
      href: isEmailConfigured ? `mailto:${CONTACT_EMAIL}` : undefined,
      icon: <Mail className="size-5" />,
      accent: "text-brand-sky border-brand-blue/30 bg-brand-blue/10",
    },
  ];

  return (
    <section id={SECTION_IDS.contact} className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-[#0d1934] to-[#080f20] p-6 sm:p-10 lg:p-14">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
          <div className="pointer-events-none absolute -top-40 left-1/2 size-[600px] -translate-x-1/2 rounded-full bg-brand-blue/25 blur-[140px]" aria-hidden />

          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="flex flex-col gap-8">
              <SectionHeading index="05" eyebrow={copy.eyebrow} title={copy.title} description={copy.body} />

              <Reveal delay={0.1} className="flex flex-col gap-3">
                <span className="eyebrow">{copy.directLabel}</span>
                {channels.map((channel) => {
                  const inner = (
                    <>
                      <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl border ${channel.accent}`}>
                        {channel.icon}
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-white/40">{channel.label}</span>
                        <span className="truncate text-white">{channel.value}</span>
                      </span>
                      {channel.href ? <ArrowUpRight className="size-4 text-white/40 transition-colors group-hover:text-white" /> : null}
                    </>
                  );
                  const cls =
                    "group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors";
                  return channel.href ? (
                    <a
                      key={channel.key}
                      href={channel.href}
                      target={channel.key === "whatsapp" ? "_blank" : undefined}
                      rel={channel.key === "whatsapp" ? "noopener noreferrer" : undefined}
                      className={`${cls} hover:border-brand-blue/40 hover:bg-white/[0.06]`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={channel.key} className={`${cls} opacity-60`}>
                      {inner}
                    </div>
                  );
                })}
              </Reveal>
            </div>

            <Reveal delay={0.15} className="rounded-3xl border border-white/10 bg-[#070d1c]/70 p-5 backdrop-blur-xl sm:p-8">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
