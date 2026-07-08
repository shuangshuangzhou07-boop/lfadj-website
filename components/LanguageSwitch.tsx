"use client";

import type { Locale } from "@/lib/i18n";

type LanguageSwitchProps = {
  locale: Locale;
  onChange: (nextLocale: Locale) => void;
};

export function LanguageSwitch({ locale, onChange }: LanguageSwitchProps) {
  return (
    <div style={{ display: "inline-flex", gap: 8, padding: 4, border: "1px solid #334155", borderRadius: 999, background: "#111827" }}>
      <button type="button" onClick={() => onChange("en")} style={{ padding: "6px 10px", borderRadius: 999, background: locale === "en" ? "#06b6d4" : "transparent", color: locale === "en" ? "#082f49" : "#f8fafc", fontWeight: 700 }}>
        EN
      </button>
      <button type="button" onClick={() => onChange("zh")} style={{ padding: "6px 10px", borderRadius: 999, background: locale === "zh" ? "#06b6d4" : "transparent", color: locale === "zh" ? "#082f49" : "#f8fafc", fontWeight: 700 }}>
        中文
      </button>
    </div>
  );
}
