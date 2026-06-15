import { useLanguage } from "./LanguageContext";
import { getDictionary } from "./getDictionary";

export function useTranslation() {
  const { language, setLanguage, toggleLanguage } = useLanguage();

  return {
    language,
    setLanguage,
    toggleLanguage,
    t: getDictionary(language),
  };
}
