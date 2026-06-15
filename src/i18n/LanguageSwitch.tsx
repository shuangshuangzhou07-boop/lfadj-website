"use client";

import { useLanguage } from "./LanguageContext";

type LanguageSwitchProps = {
  className: string;
};

export function LanguageSwitch({ className }: LanguageSwitchProps) {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "en" ? "zh" : "en";

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      className={className}
    >
      {language === "en" ? "中文" : "EN"}
    </button>
  );
}
