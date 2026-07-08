"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

export type Language = "en" | "zh";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const pathMap: Record<string, { en: string; zh: string }> = {
  "/en": { en: "/en", zh: "/zh" },
  "/en/products": { en: "/en/products", zh: "/zh/products" },
  "/en/products/lf6130": {
    en: "/en/products/lf6130",
    zh: "/zh/products/lf6130",
  },
  "/en/products/lf955": {
    en: "/en/products/lf955",
    zh: "/zh/products/lf955",
  },
  "/products/lf955": {
    en: "/en/products/lf955",
    zh: "/zh/products/lf955",
  },
  "/en/applications": { en: "/en/applications", zh: "/zh/应用场景" },
  "/en/solutions": { en: "/en/solutions", zh: "/zh/解决方案" },
  "/en/oem": { en: "/en/oem", zh: "/zh/oem制造" },
  "/en/case-studies": { en: "/en/case-studies", zh: "/zh/案例" },
  "/en/faq": { en: "/en/faq", zh: "/zh/常见问题" },
  "/en/blog": { en: "/en/blog", zh: "/zh/博客" },
  "/en/contact": { en: "/en/contact", zh: "/zh/联系我们" },
  "/zh": { en: "/en", zh: "/zh" },
  "/zh/products": { en: "/en/products", zh: "/zh/products" },
  "/zh/products/lf6130": {
    en: "/en/products/lf6130",
    zh: "/zh/products/lf6130",
  },
  "/zh/products/lf955": {
    en: "/en/products/lf955",
    zh: "/zh/products/lf955",
  },
  "/zh/应用场景": { en: "/en/applications", zh: "/zh/应用场景" },
  "/zh/解决方案": { en: "/en/solutions", zh: "/zh/解决方案" },
  "/zh/oem制造": { en: "/en/oem", zh: "/zh/oem制造" },
  "/zh/案例": { en: "/en/case-studies", zh: "/zh/案例" },
  "/zh/常见问题": { en: "/en/faq", zh: "/zh/常见问题" },
  "/zh/博客": { en: "/en/blog", zh: "/zh/博客" },
  "/zh/联系我们": { en: "/en/contact", zh: "/zh/联系我们" },
  "/zh/contact": { en: "/en/contact", zh: "/zh/联系我们" },
};

function localizedPath(pathname: string, language: Language) {
  if (pathMap[pathname]) {
    return pathMap[pathname][language];
  }

  if (pathname.startsWith("/en")) {
    return pathname.replace(/^\/en(?=\/|$)/, `/${language}`);
  }

  if (pathname.startsWith("/zh")) {
    return pathname.replace(/^\/zh(?=\/|$)/, `/${language}`);
  }

  if (pathname === "/") {
    return `/${language}`;
  }

  return `/${language}${pathname}`;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const language: Language = pathname.startsWith("/zh") ? "zh" : "en";

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage: Language) => {
        router.push(localizedPath(pathname, nextLanguage));
      },
      toggleLanguage: () => {
        router.push(localizedPath(pathname, language === "en" ? "zh" : "en"));
      },
    }),
    [language, pathname, router]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider.");
  }

  return context;
}
