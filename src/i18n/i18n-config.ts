import { ui, defaultLang } from "./ui";

export const i18n = {
  defaultLocale: "es",
  locales: ["es", "en", "ca"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export interface LangParams {
  params: {
    lang: Locale;
  };
}

// from utils.ts in esland astro i18n

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
