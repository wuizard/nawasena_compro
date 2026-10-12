export const LOCALES = ["id", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export type Localized<T> = Record<Locale, T>;

export const DEFAULT_LOCALE: Locale = "id";
