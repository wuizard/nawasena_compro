"use client";

import { Button } from "@heroui/react";
import { useLocale } from "./LocaleProvider";
import { LOCALES, type Locale } from "./types";

const NAMES: Record<Locale, string> = { id: "Bahasa Indonesia", en: "English" };

export function LocaleSwitch({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-0.5 ${className}`}
    >
      {LOCALES.map((code) => {
        const active = code === locale;
        return (
          <Button
            key={code}
            size="sm"
            variant={active ? "primary" : "ghost"}
            aria-pressed={active}
            aria-label={NAMES[code]}
            onPress={() => setLocale(code)}
            className={`h-7 min-w-0 rounded-full px-3 font-mono text-[11px] uppercase tracking-widest ${
              active ? "" : "text-white/60 hover:text-white"
            }`}
          >
            {code}
          </Button>
        );
      })}
    </div>
  );
}
