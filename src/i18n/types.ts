import type { translations } from "./translations";

export type Language = "en" | "zh";

export type Dictionary = (typeof translations)["en"];

export type Dictionaries = Record<Language, Dictionary>;
