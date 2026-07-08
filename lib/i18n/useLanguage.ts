"use client";

import { useMemo, useState } from "react";
import { translations } from "@/lib/i18n/translations";

export type Language = "en" | "zh";

export function useLanguage() {
  const [lang, setLang] = useState<Language>("en");

  const t = useMemo(
    () => (key: keyof (typeof translations)["en"]) => translations[lang][key],
    [lang],
  );

  return { lang, setLang, t };
}
