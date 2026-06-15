import { translations } from "./translations";
import type { Language } from "./types";

export function getDictionary(language: Language) {
  return translations[language];
}
