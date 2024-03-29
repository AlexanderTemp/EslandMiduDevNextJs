import "server-only";
import { Locale } from "./i18n-config";

const dictionaries = {
  en: () => import("@/i18n/en.json").then((module) => module.default),
  es: () => import("@/i18n/es.json").then((module) => module.default),
  ca: () => import("@/i18n/ca.json").then((module) => module.default),
};

// por default en español sino encunetra en middleware
export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.es();
