"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Locale = "en" | "zh";

type NavItem = {
  label: string;
  href: string;
};

type ResourceItem = {
  label: string;
  href: string;
  pages: {
    label: string;
    href?: string;
  }[];
};

const copy = {
  en: {
    menu: "Menu",
    close: "Close menu",
    language: "中文",
    quote: "Request a Quote",
    childPages: "Direct Child Pages",
    comingSoon: "Coming Soon",
  },
  zh: {
    menu: "菜单",
    close: "关闭菜单",
    language: "EN",
    quote: "获取报价",
    childPages: "直属页面",
    comingSoon: "即将发布",
  },
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

function buildResourceNavigation(locale: Locale): ResourceItem[] {
  const prefix = `/${locale}/resources`;
  const zh = locale === "zh";

  return [
    {
      label: zh ? "知识中心" : "Knowledge Center",
      href: `${prefix}/knowledge-center`,
      pages: [
        { label: zh ? "什么是移动照明灯塔？" : "What Is A Mobile Light Tower?", href: `${prefix}/what-is-mobile-light-tower` },
        { label: zh ? "移动照明灯塔如何工作？" : "How Does A Mobile Light Tower Work?" },
        { label: zh ? "移动照明灯塔基础知识" : "Mobile Light Tower Basics" },
      ],
    },
    {
      label: zh ? "选型指南" : "Selection Guides",
      href: `${prefix}/selection-guides`,
      pages: [
        { label: zh ? "如何选择合适的照明灯塔" : "How To Choose The Right Light Tower", href: `/${locale}/solutions/how-to-choose-the-right-light-tower` },
        { label: zh ? "柴油与太阳能移动照明灯塔" : "Diesel vs Solar Mobile Light Tower" },
        { label: zh ? "照明覆盖指南" : "Lighting Coverage Guide" },
      ],
    },
    {
      label: zh ? "应用指南" : "Application Guides",
      href: `${prefix}/application-guides`,
      pages: [
        { label: zh ? "矿山照明" : "Mining Lighting", href: `/${locale}/applications/mining-lighting` },
        { label: zh ? "建筑照明" : "Construction Lighting", href: `/${locale}/applications/construction-lighting` },
        { label: zh ? "租赁照明" : "Rental Lighting", href: `/${locale}/applications/rental-lighting` },
        { label: zh ? "应急照明" : "Emergency Lighting", href: `/${locale}/applications/emergency-lighting` },
        { label: zh ? "油气行业照明" : "Oil & Gas Lighting", href: `/${locale}/applications/oil-gas-lighting` },
      ],
    },
    {
      label: zh ? "技术文档" : "Technical Documents",
      href: `${prefix}/technical-documents`,
      pages: [
        { label: zh ? "产品技术规格" : "Product Specifications" },
        { label: zh ? "产品手册" : "Product Manuals" },
        { label: zh ? "安装指南" : "Installation Guides" },
      ],
    },
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
  const resourceNavigation = buildResourceNavigation(locale);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopResourcesOpen, setDesktopResourcesOpen] = useState(false);
  const [activeResource, setActiveResource] = useState(0);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileResourceOpen, setMobileResourceOpen] = useState<number | null>(null);
  const resourceTriggerRef = useRef<HTMLAnchorElement>(null);
  const desktopOpenTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const desktopCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearDesktopTimers = () => {
    if (desktopOpenTimer.current) clearTimeout(desktopOpenTimer.current);
    if (desktopCloseTimer.current) clearTimeout(desktopCloseTimer.current);
  };

  const openDesktopResources = (delay = 250) => {
    clearDesktopTimers();
    if (desktopResourcesOpen) return;
    desktopOpenTimer.current = setTimeout(() => setDesktopResourcesOpen(true), delay);
  };

  const closeDesktopResources = (delay = 200) => {
    clearDesktopTimers();
    desktopCloseTimer.current = setTimeout(() => setDesktopResourcesOpen(false), delay);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setDesktopResourcesOpen(false);
        if (desktopResourcesOpen) resourceTriggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      clearDesktopTimers();
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [desktopResourcesOpen, mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopResourcesOpen(false);
    setMobileResourcesOpen(false);
    setMobileResourceOpen(null);
  }, [pathname]);

  const languageHref = locale === "en"
    ? pathname.replace(/^\/en(?=\/|$)/, "/zh") || "/zh"
    : pathname.replace(/^\/zh(?=\/|$)/, "/en") || "/en";

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-200 bg-white"
      onMouseLeave={() => closeDesktopResources()}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeDesktopResources();
      }}
    >
      <div className="mx-auto flex min-h-20 max-w-[1280px] items-center justify-between gap-4 px-6">
        <Link href={`/${locale}`} className="text-2xl font-bold tracking-tight text-black">LFADJ</Link>

        <nav aria-label={locale === "zh" ? "主导航" : "Primary navigation"} className="hidden lg:block">
          <ul className="flex items-center gap-2 text-sm font-semibold text-gray-700 xl:gap-3">
            {navigation.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => {
                  if (item.href.endsWith("/resources")) openDesktopResources();
                  else closeDesktopResources();
                }}
              >
                <Link
                  ref={item.href.endsWith("/resources") ? resourceTriggerRef : undefined}
                  href={item.href}
                  tabIndex={desktopResourcesOpen && !item.href.endsWith("/resources") ? -1 : undefined}
                  aria-current={pathname === item.href ? "page" : undefined}
                  aria-haspopup={item.href.endsWith("/resources") ? "menu" : undefined}
                  aria-expanded={item.href.endsWith("/resources") ? desktopResourcesOpen : undefined}
                  onFocus={() => {
                    if (item.href.endsWith("/resources")) openDesktopResources(0);
                  }}
                  className={`block rounded-lg px-3 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 hover:bg-gray-50 hover:text-black ${isActive(pathname, item.href) ? "bg-blue-50 text-blue-700" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link tabIndex={desktopResourcesOpen ? -1 : undefined} href={languageHref} hrefLang={locale === "en" ? "zh" : "en"} className="hidden rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:inline-flex">{copy[locale].language}</Link>
          <Link tabIndex={desktopResourcesOpen ? -1 : undefined} href={`/${locale}/contact/request-a-quote`} className="hidden rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700 xl:inline-flex">{copy[locale].quote}</Link>
          <button type="button" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(true)} className="inline-flex h-10 items-center rounded-lg border border-gray-300 px-4 text-sm font-semibold text-gray-700 lg:hidden">{copy[locale].menu}</button>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 top-full z-[70] hidden border-t border-gray-200 bg-white shadow-xl transition duration-200 lg:block ${desktopResourcesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
        aria-hidden={!desktopResourcesOpen}
        inert={!desktopResourcesOpen}
        onMouseEnter={() => openDesktopResources(0)}
      >
        <div className="mx-auto grid max-w-[760px] grid-cols-[220px_minmax(400px,1fr)] gap-0 px-6 py-6">
          <div className="border border-gray-200 bg-gray-50 p-3">
            <Link href={`/${locale}/resources`} className="mb-2 block rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
              {locale === "zh" ? "资源中心" : "Resources"}
            </Link>
            <ul className="grid gap-1">
              {resourceNavigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onMouseEnter={() => setActiveResource(index)}
                    onFocus={() => setActiveResource(index)}
                    className={`flex min-h-11 items-center justify-between rounded-md px-3 py-3 font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${activeResource === index ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-white hover:text-gray-950"}`}
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true" className={`text-blue-700 transition-transform duration-200 ${activeResource === index ? "translate-x-1" : ""}`}>›</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-l-0 border-gray-200 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
              {copy[locale].childPages}
            </p>
            <ul className="mt-3 grid gap-2">
              {resourceNavigation[activeResource].pages.map((page) => (
                <li key={page.label}>
                  {page.href ? (
                    <Link href={page.href} className="flex min-h-11 items-center rounded-lg px-3 py-2.5 font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                      {page.label}
                    </Link>
                  ) : (
                    <div className="flex min-h-11 items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-slate-500">
                      <span>{page.label}</span>
                      <span className="shrink-0 text-xs font-semibold">{copy[locale].comingSoon}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label={copy[locale].menu}>
          <button type="button" aria-label={copy[locale].close} onClick={() => setMobileOpen(false)} className="absolute inset-0 bg-black/40" />
          <div id="mobile-navigation" className="absolute right-0 top-0 h-full w-[min(92vw,390px)] overflow-y-auto bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <span className="text-xl font-bold text-black">LFADJ</span>
              <button type="button" onClick={() => setMobileOpen(false)} className="min-h-11 rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700">{copy[locale].close}</button>
            </div>
            <nav aria-label={locale === "zh" ? "手机导航" : "Mobile navigation"} className="mt-4">
              <ul className="grid gap-2">
                {navigation.map((item) => (
                  <li key={item.href}>
                    {item.href.endsWith("/resources") ? (
                      <div className="overflow-hidden rounded-lg">
                        <div className={`flex items-center ${isActive(pathname, item.href) ? "bg-blue-50 text-blue-700" : "text-gray-800"}`}>
                          <Link onClick={() => setMobileOpen(false)} href={item.href} className="min-w-0 flex-1 px-4 py-3 font-semibold">{item.label}</Link>
                          <button
                            type="button"
                            aria-label={locale === "zh" ? "展开资源导航" : "Toggle resources navigation"}
                            aria-expanded={mobileResourcesOpen}
                            onClick={() => setMobileResourcesOpen((open) => !open)}
                            className="flex min-h-12 min-w-12 items-center justify-center text-xl font-semibold"
                          >
                            <span className={`transition-transform duration-200 ${mobileResourcesOpen ? "rotate-45" : ""}`} aria-hidden="true">+</span>
                          </button>
                        </div>
                        <div className={`grid transition-[grid-template-rows] duration-200 ${mobileResourcesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                          <div className="min-h-0 overflow-hidden">
                            <ul className="ml-3 grid gap-1 border-l border-gray-200 py-2 pl-3">
                              {resourceNavigation.map((resource, index) => (
                                <li key={resource.href} className="overflow-hidden rounded-lg">
                                  <div className="flex items-center">
                                    <Link onClick={() => setMobileOpen(false)} href={resource.href} className="flex min-h-11 min-w-0 flex-1 items-center px-3 py-3 text-sm font-semibold text-gray-700">{resource.label}</Link>
                                    <button
                                      type="button"
                                      aria-label={`${resource.label} ${locale === "zh" ? "选项" : "options"}`}
                                      aria-expanded={mobileResourceOpen === index}
                                      onClick={() => setMobileResourceOpen((open) => open === index ? null : index)}
                                      className="flex min-h-11 min-w-11 items-center justify-center text-lg text-gray-600"
                                    >
                                      <span className={`transition-transform duration-200 ${mobileResourceOpen === index ? "rotate-45" : ""}`} aria-hidden="true">+</span>
                                    </button>
                                  </div>
                                  <div className={`grid transition-[grid-template-rows] duration-200 ${mobileResourceOpen === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                                    <div className="min-h-0 overflow-hidden">
                                      <ul className="mx-3 mb-2 grid gap-1 rounded-lg bg-gray-50 p-2">
                                        {resource.pages.map((page) => (
                                          <li key={page.label}>
                                            {page.href ? (
                                              <Link onClick={() => setMobileOpen(false)} href={page.href} className="flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-semibold text-gray-700">
                                                {page.label}
                                              </Link>
                                            ) : (
                                              <div className="flex min-h-11 items-center justify-between gap-2 px-3 py-2 text-sm text-gray-500">
                                                <span>{page.label}</span>
                                                <span className="shrink-0 text-xs">{copy[locale].comingSoon}</span>
                                              </div>
                                            )}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link onClick={() => setMobileOpen(false)} href={item.href} className={`block rounded-lg px-4 py-3 font-semibold ${isActive(pathname, item.href) ? "bg-blue-50 text-blue-700" : "text-gray-800"}`}>{item.label}</Link>
                    )}
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
