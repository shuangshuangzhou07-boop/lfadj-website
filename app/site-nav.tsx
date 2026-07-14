"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Locale = "en" | "zh";

type NavItem = {
  label: string;
  href: string;
};

const copy = {
  en: { menu: "Menu", close: "Close menu", language: "中文", quote: "Request a Quote" },
  zh: { menu: "菜单", close: "关闭菜单", language: "EN", quote: "获取报价" },
};

function buildNavigation(locale: Locale): NavItem[] {
  const prefix = `/${locale}`;
  const zh = locale === "zh";

  return [
    { label: zh ? "首页" : "HOME", href: prefix },
    { label: zh ? "产品中心" : "PRODUCTS", href: `${prefix}/products` },
    { label: zh ? "应用场景" : "APPLICATIONS", href: `${prefix}/applications` },
    { label: zh ? "解决方案" : "SOLUTIONS", href: `${prefix}/solutions` },
    { label: zh ? "资源中心" : "RESOURCES", href: `${prefix}/resources` },
    { label: zh ? "关于我们" : "ABOUT", href: `${prefix}/about` },
    { label: zh ? "联系我们" : "CONTACT", href: `${prefix}/contact` },
  ];
}

function isActive(pathname: string, href: string) {
  return pathname === href || (href.split("/").length > 2 && pathname.startsWith(`${href}/`));
}

export function SiteNav(_props: {
  items?: { label: string; href: string }[];
  quoteLabel?: string;
  quoteHref?: string;
  mobileMenuLabel?: string;
} = {}) {
  const pathname = usePathname();
  const locale: Locale = pathname === "/zh" || pathname.startsWith("/zh/") ? "zh" : "en";
  const navigation = buildNavigation(locale);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

  useEffect(() => setMobileOpen(false), [pathname]);

  const languageHref = locale === "en"
    ? pathname.replace(/^\/en(?=\/|$)/, "/zh") || "/zh"
    : pathname.replace(/^\/zh(?=\/|$)/, "/en") || "/en";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex min-h-20 max-w-[1280px] items-center justify-between gap-4 px-6">
        <Link href={`/${locale}`} className="text-2xl font-bold tracking-tight text-black">LFADJ</Link>

        <nav aria-label={locale === "zh" ? "主导航" : "Primary navigation"} className="hidden lg:block">
          <ul className="flex items-center gap-2 text-sm font-semibold text-gray-700 xl:gap-3">
            {navigation.map((item) => (
              <li key={item.href} className="relative">
                <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={`block rounded-lg px-3 py-3 transition hover:bg-gray-50 hover:text-black ${isActive(pathname, item.href) ? "bg-blue-50 text-blue-700" : ""}`}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href={languageHref} hrefLang={locale === "en" ? "zh" : "en"} className="hidden rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:inline-flex">{copy[locale].language}</Link>
          <Link href={`/${locale}/contact/request-a-quote`} className="hidden rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700 xl:inline-flex">{copy[locale].quote}</Link>
          <button type="button" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(true)} className="inline-flex h-10 items-center rounded-lg border border-gray-300 px-4 text-sm font-semibold text-gray-700 lg:hidden">{copy[locale].menu}</button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label={copy[locale].menu}>
          <button type="button" aria-label={copy[locale].close} onClick={() => setMobileOpen(false)} className="absolute inset-0 bg-black/40" />
          <div id="mobile-navigation" className="absolute right-0 top-0 h-full w-[min(92vw,390px)] overflow-y-auto bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <span className="text-xl font-bold text-black">LFADJ</span>
              <button type="button" onClick={() => setMobileOpen(false)} className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700">{copy[locale].close}</button>
            </div>
            <nav aria-label={locale === "zh" ? "手机导航" : "Mobile navigation"} className="mt-4">
              <ul className="grid gap-2">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link onClick={() => setMobileOpen(false)} href={item.href} className={`block rounded-lg px-4 py-3 font-semibold ${isActive(pathname, item.href) ? "bg-blue-50 text-blue-700" : "text-gray-800"}`}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 grid gap-3 border-t border-gray-200 pt-5">
                <Link onClick={() => setMobileOpen(false)} href={languageHref} className="rounded-lg border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-700">{copy[locale].language}</Link>
                <Link onClick={() => setMobileOpen(false)} href={`/${locale}/contact/request-a-quote`} className="rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white">{copy[locale].quote}</Link>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
