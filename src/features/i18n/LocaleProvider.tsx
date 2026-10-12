"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { DEFAULT_LOCALE, LOCALES, type Locale, type Localized } from "./types";

const STORAGE_KEY = "na-locale";

const listeners = new Set<() => void>();
// In-memory choice, so switching still works when storage is unavailable (private mode).
let selected: Locale | null = null;

const isLocale = (value: unknown): value is Locale => (LOCALES as readonly unknown[]).includes(value);

function readLocale(): Locale {
  if (selected) return selected;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    // Ignore storage failures and fall back to the default.
  }
  return DEFAULT_LOCALE;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function setLocale(next: Locale) {
  selected = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Ignore storage failures.
  }
  listeners.forEach((listener) => listener());
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, readLocale, () => DEFAULT_LOCALE);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}

/** Picks the copy for the active locale from a `{ id, en }` object. */
export function useCopy<T>(copy: Localized<T>): T {
  return copy[useLocale().locale];
}
