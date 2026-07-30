"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Locale = "en" | "zh";
type CascadingSection = "products" | "applications" | "solutions" | "resources";

type NavItem = {
  label: string;
  href: string;
};

type CascadingItem = {
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
    childPages: "DIRECT PAGES",
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

function buildProductNavigation(locale: Locale): CascadingItem[] {
  const prefix = `/${locale}/products`;
  const zh = locale === "zh";

  return [
    {
      label: zh ? "柴油移动照明灯塔" : "Diesel Mobile Light Tower",
      href: `${prefix}/diesel-light-towers`,
      pages: [
        { label: zh ? "LF955 柴油移动照明灯塔" : "LF955 Diesel Mobile Light Tower", href: `${prefix}/lf955` },
      ],
    },
    {
      label: zh ? "太阳能移动照明灯塔" : "Solar Mobile Light Tower",
      href: `${prefix}/solar-light-towers`,
      pages: [
        { label: zh ? "LF971 太阳能移动照明灯塔" : "LF971 Solar Mobile Light Tower", href: `${prefix}/lf971` },
      ],
    },
    {
      label: zh ? "混合动力移动照明灯塔" : "Hybrid Mobile Light Tower",
      href: `${prefix}/hybrid-energy-solutions`,
      pages: [],
    },
  ];
}

function buildApplicationNavigation(locale: Locale): CascadingItem[] {
  const prefix = `/${locale}/applications`;
  const zh = locale === "zh";
  const applications = [
    { slug: "mining-lighting", en: "Mining Lighting", zh: "矿山照明" },
    { slug: "construction-lighting", en: "Construction Lighting", zh: "建筑照明" },
    { slug: "oil-gas-lighting", en: "Oil & Gas Lighting", zh: "油气照明" },
    { slug: "rental-lighting", en: "Rental Lighting", zh: "租赁照明" },
    { slug: "emergency-lighting", en: "Emergency Lighting", zh: "应急照明" },
  ];

  return applications.map((application) => {
    const label = zh ? application.zh : application.en;
    const href = `${prefix}/${application.slug}`;
    return { label, href, pages: [{ label, href }] };
  });
}

function buildSolutionNavigation(locale: Locale): CascadingItem[] {
  const prefix = `/${locale}/solutions`;
  const zh = locale === "zh";

  return [
    {
      label: zh ? "照明灯塔选型指南" : "Light Tower Selection Guide",
      href: `${prefix}/how-to-choose-the-right-light-tower`,
      pages: [
        {
          label: zh ? "如何选择合适的照明灯塔" : "How to Choose the Right Light Tower",
          href: `${prefix}/how-to-choose-the-right-light-tower`,
        },
      ],
    },
    {
      label: zh ? "极端环境照明" : "Extreme Environment Lighting",
      href: `${prefix}/how-to-choose-the-right-light-tower-for-harsh-environments`,
      pages: [
        {
          label: zh ? "极端环境照明" : "Extreme Environment Lighting",
          href: `${prefix}/how-to-choose-the-right-light-tower-for-harsh-environments`,
        },
      ],
    },
    {
      label: zh ? "升降系统解决方案" : "Mast System Solutions",
      href: `${prefix}/how-to-choose-light-tower-mast-system`,
      pages: [
        {
          label: zh ? "升降系统解决方案" : "Mast System Solutions",
          href: `${prefix}/how-to-choose-light-tower-mast-system`,
        },
      ],
    },
    {
      label: zh ? "临时现场照明" : "Temporary Site Lighting",
      href: `${prefix}/temporary-site-lighting`,
      pages: [
        {
          label: zh ? "临时现场照明" : "Temporary Site Lighting",
          href: `${prefix}/temporary-site-lighting`,
        },
      ],
    },
  ];
}

function buildResourceNavigation(locale: Locale): CascadingItem[] {
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
        { label: zh ? "移动照明灯塔组成结构" : "Mobile Light Tower Components" },
      ],
    },
    {
      label: zh ? "选择指南" : "Selection Guides",
      href: `${prefix}/selection-guides`,
      pages: [
        { label: zh ? "如何选择合适的照明灯塔？" : "How To Choose The Right Light Tower", href: `/${locale}/solutions/how-to-choose-light-tower-mast-system` },
        { label: zh ? "柴油与太阳能移动照明灯塔比较" : "Diesel vs Solar Mobile Light Tower" },
        { label: zh ? "项目需要多大的照明覆盖范围？" : "How Much Lighting Coverage Do You Need?" },
      ],
    },
    {
      label: zh ? "应用指南" : "Application Guides",
      href: `${prefix}/application-guides`,
      pages: [
        { label: zh ? "矿山照明指南" : "Mining Lighting Guide" },
        { label: zh ? "建筑照明指南" : "Construction Lighting Guide" },
        { label: zh ? "油气照明指南" : "Oil & Gas Lighting Guide", href: `/${locale}/applications/oil-gas-lighting` },
        { label: zh ? "租赁照明指南" : "Rental Lighting Guide" },
        { label: zh ? "应急照明指南" : "Emergency Lighting Guide" },
      ],
    },
    {
      label: zh ? "技术文档" : "Technical Documents",
      href: `${prefix}/technical-documents`,
      pages: [
        { label: zh ? "产品手册" : "Product Manuals" },
        { label: zh ? "安装指南" : "Installation Guides" },
        { label: zh ? "维护指南" : "Maintenance Guides" },
        { label: zh ? "技术规格" : "Technical Specifications" },
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
  const productNavigation = buildProductNavigation(locale);
  const applicationNavigation = buildApplicationNavigation(locale);
  const solutionNavigation = buildSolutionNavigation(locale);
  const resourceNavigation = buildResourceNavigation(locale);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState<CascadingSection | null>(null);
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeApplication, setActiveApplication] = useState(0);
  const [activeSolution, setActiveSolution] = useState(0);
  const [activeResource, setActiveResource] = useState(0);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState<number | null>(null);
  const [mobileApplicationsOpen, setMobileApplicationsOpen] = useState(false);
  const [mobileApplicationOpen, setMobileApplicationOpen] = useState<number | null>(null);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileSolutionOpen, setMobileSolutionOpen] = useState<number | null>(null);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileResourceOpen, setMobileResourceOpen] = useState<number | null>(null);
  const productTriggerRef = useRef<HTMLAnchorElement>(null);
  const applicationTriggerRef = useRef<HTMLAnchorElement>(null);
  const solutionTriggerRef = useRef<HTMLAnchorElement>(null);
  const resourceTriggerRef = useRef<HTMLAnchorElement>(null);
  const desktopOpenTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const desktopCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearDesktopTimers = () => {
    if (desktopOpenTimer.current) clearTimeout(desktopOpenTimer.current);
    if (desktopCloseTimer.current) clearTimeout(desktopCloseTimer.current);
  };

  const openDesktopMenu = (menu: CascadingSection, delay = 250) => {
    clearDesktopTimers();
    if (desktopMenuOpen === menu) return;
    desktopOpenTimer.current = setTimeout(() => setDesktopMenuOpen(menu), delay);
  };

  const closeDesktopMenu = (delay = 200) => {
    clearDesktopTimers();
    desktopCloseTimer.current = setTimeout(() => setDesktopMenuOpen(null), delay);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setDesktopMenuOpen(null);
        if (desktopMenuOpen === "products") productTriggerRef.current?.focus();
        if (desktopMenuOpen === "applications") applicationTriggerRef.current?.focus();
        if (desktopMenuOpen === "solutions") solutionTriggerRef.current?.focus();
        if (desktopMenuOpen === "resources") resourceTriggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      clearDesktopTimers();
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [desktopMenuOpen, mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopMenuOpen(null);
    setMobileProductsOpen(false);
    setMobileProductOpen(null);
    setMobileApplicationsOpen(false);
    setMobileApplicationOpen(null);
    setMobileSolutionsOpen(false);
    setMobileSolutionOpen(null);
    setMobileResourcesOpen(false);
    setMobileResourceOpen(null);
  }, [pathname]);

  const languageHref = locale === "en"
    ? pathname.replace(/^\/en(?=\/|$)/, "/zh") || "/zh"
    : pathname.replace(/^\/zh(?=\/|$)/, "/en") || "/en";
  const desktopNavigation = desktopMenuOpen === "products"
    ? productNavigation
    : desktopMenuOpen === "applications"
      ? applicationNavigation
      : desktopMenuOpen === "solutions"
        ? solutionNavigation
        : resourceNavigation;
  const activeDesktopIndex = desktopMenuOpen === "products"
    ? activeProduct
    : desktopMenuOpen === "applications"
      ? activeApplication
      : desktopMenuOpen === "solutions"
        ? activeSolution
        : activeResource;
  const renderMobileCascade = (section: CascadingSection, item: NavItem) => {
    const isProducts = section === "products";
    const isApplications = section === "applications";
    const isSolutions = section === "solutions";
    const categories = isProducts
      ? productNavigation
      : isApplications
        ? applicationNavigation
        : isSolutions
          ? solutionNavigation
          : resourceNavigation;
    const sectionOpen = isProducts
      ? mobileProductsOpen
      : isApplications
        ? mobileApplicationsOpen
        : isSolutions
          ? mobileSolutionsOpen
          : mobileResourcesOpen;
    const categoryOpen = isProducts
      ? mobileProductOpen
      : isApplications
        ? mobileApplicationOpen
        : isSolutions
          ? mobileSolutionOpen
          : mobileResourceOpen;

    return (
      <div className="overflow-hidden rounded-lg">
        <div className={`flex items-center ${isActive(pathname, item.href) ? "bg-blue-50 text-blue-700" : "text-gray-800"}`}>
          <Link onClick={() => setMobileOpen(false)} href={item.href} className="min-w-0 flex-1 px-4 py-3 font-semibold">{item.label}</Link>
          <button
            type="button"
            aria-label={locale === "zh" ? `展开${isProducts ? "产品" : isApplications ? "应用" : isSolutions ? "解决方案" : "资源"}导航` : `Toggle ${section} navigation`}
            aria-expanded={sectionOpen}
            onClick={() => {
              if (isProducts) setMobileProductsOpen((open) => !open);
              else if (isApplications) setMobileApplicationsOpen((open) => !open);
              else if (isSolutions) setMobileSolutionsOpen((open) => !open);
              else setMobileResourcesOpen((open) => !open);
            }}
            className="flex min-h-12 min-w-12 items-center justify-center text-xl font-semibold"
          >
            <span className={`transition-transform duration-200 ${sectionOpen ? "rotate-45" : ""}`} aria-hidden="true">+</span>
          </button>
        </div>
        <div className={`grid transition-[grid-template-rows] duration-200 ${sectionOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="min-h-0 overflow-hidden">
            <ul className="ml-3 grid gap-1 border-l border-gray-200 py-2 pl-3">
              {categories.map((category, index) => (
                <li key={category.href} className="overflow-hidden rounded-lg">
                  <div className="flex items-center">
                    <Link onClick={() => setMobileOpen(false)} href={category.href} className="flex min-h-11 min-w-0 flex-1 items-center px-3 py-3 text-sm font-semibold text-gray-700">{category.label}</Link>
                    {category.pages.length ? (
                      <button
                        type="button"
                        aria-label={`${category.label} ${locale === "zh" ? "选项" : "options"}`}
                        aria-expanded={categoryOpen === index}
                        onClick={() => {
                          if (isProducts) setMobileProductOpen((open) => open === index ? null : index);
                          else if (isApplications) setMobileApplicationOpen((open) => open === index ? null : index);
                          else if (isSolutions) setMobileSolutionOpen((open) => open === index ? null : index);
                          else setMobileResourceOpen((open) => open === index ? null : index);
                        }}
                        className="flex min-h-11 min-w-11 items-center justify-center text-lg text-gray-600"
                      >
                        <span className={`transition-transform duration-200 ${categoryOpen === index ? "rotate-45" : ""}`} aria-hidden="true">+</span>
                      </button>
                    ) : null}
                  </div>
                  {category.pages.length ? (
                    <div className={`grid transition-[grid-template-rows] duration-200 ${categoryOpen === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="min-h-0 overflow-hidden">
                        <ul className="mx-3 mb-2 grid gap-1 rounded-lg bg-gray-50 p-2">
                          {category.pages.map((page) => (
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
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-gray-200 bg-white"
      onMouseLeave={() => closeDesktopMenu()}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeDesktopMenu();
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
                  if (item.href.endsWith("/products")) openDesktopMenu("products");
                  else if (item.href.endsWith("/applications")) openDesktopMenu("applications");
                  else if (item.href.endsWith("/solutions")) openDesktopMenu("solutions");
                  else if (item.href.endsWith("/resources")) openDesktopMenu("resources");
                  else closeDesktopMenu();
                }}
              >
                <Link
                  ref={item.href.endsWith("/products")
                    ? productTriggerRef
                    : item.href.endsWith("/applications")
                      ? applicationTriggerRef
                      : item.href.endsWith("/solutions")
                        ? solutionTriggerRef
                      : item.href.endsWith("/resources")
                        ? resourceTriggerRef
                        : undefined}
                  href={item.href}
                  tabIndex={desktopMenuOpen && !item.href.endsWith(`/${desktopMenuOpen}`) ? -1 : undefined}
                  aria-current={pathname === item.href ? "page" : undefined}
                  aria-haspopup={item.href.endsWith("/products") || item.href.endsWith("/applications") || item.href.endsWith("/solutions") || item.href.endsWith("/resources") ? "menu" : undefined}
                  aria-expanded={item.href.endsWith("/products")
                    ? desktopMenuOpen === "products"
                    : item.href.endsWith("/applications")
                      ? desktopMenuOpen === "applications"
                      : item.href.endsWith("/solutions")
                        ? desktopMenuOpen === "solutions"
                      : item.href.endsWith("/resources")
                        ? desktopMenuOpen === "resources"
                        : undefined}
                  onFocus={() => {
                    if (item.href.endsWith("/products")) openDesktopMenu("products", 0);
                    if (item.href.endsWith("/applications")) openDesktopMenu("applications", 0);
                    if (item.href.endsWith("/solutions")) openDesktopMenu("solutions", 0);
                    if (item.href.endsWith("/resources")) openDesktopMenu("resources", 0);
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
          <Link tabIndex={desktopMenuOpen ? -1 : undefined} href={languageHref} hrefLang={locale === "en" ? "zh" : "en"} className="hidden rounded-lg border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:inline-flex">{copy[locale].language}</Link>
          <Link tabIndex={desktopMenuOpen ? -1 : undefined} href={`/${locale}/contact/request-a-quote`} className="hidden rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700 xl:inline-flex">{copy[locale].quote}</Link>
          <button type="button" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(true)} className="inline-flex h-10 items-center rounded-lg border border-gray-300 px-4 text-sm font-semibold text-gray-700 lg:hidden">{copy[locale].menu}</button>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 top-full z-[70] hidden border-t border-gray-200 bg-white shadow-xl transition duration-200 lg:block ${desktopMenuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
        aria-hidden={!desktopMenuOpen}
        inert={!desktopMenuOpen}
        onMouseEnter={() => {
          if (desktopMenuOpen) openDesktopMenu(desktopMenuOpen, 0);
        }}
      >
        <div className="mx-auto box-border grid max-h-[calc(100dvh-7rem)] w-[480px] max-w-[calc(100vw-48px)] grid-cols-[45%_minmax(0,1fr)] overflow-x-clip overflow-y-auto overscroll-contain rounded-md border border-gray-200 bg-white shadow-lg">
            <div className="min-w-0 max-w-full rounded-l-md border-r border-gray-200 bg-gray-50 p-1.5">
            <ul className="grid min-w-0 max-w-full gap-1">
              {desktopNavigation.map((item, index) => (
                <li key={item.href} className="min-w-0 max-w-full">
                  <Link
                    href={item.href}
                    onMouseEnter={() => {
                      if (desktopMenuOpen === "products") setActiveProduct(index);
                      else if (desktopMenuOpen === "applications") setActiveApplication(index);
                      else if (desktopMenuOpen === "solutions") setActiveSolution(index);
                      else setActiveResource(index);
                    }}
                    onFocus={() => {
                      if (desktopMenuOpen === "products") setActiveProduct(index);
                      else if (desktopMenuOpen === "applications") setActiveApplication(index);
                      else if (desktopMenuOpen === "solutions") setActiveSolution(index);
                      else setActiveResource(index);
                    }}
                    className={`relative flex min-h-10 min-w-0 max-w-full items-center justify-between gap-1.5 rounded-md px-2 py-1.5 text-xs font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${activeDesktopIndex === index ? "bg-blue-50 text-blue-700 before:absolute before:inset-y-2 before:left-0 before:w-0.5 before:rounded-full before:bg-blue-600" : "text-gray-700 hover:bg-white hover:text-gray-950"}`}
                  >
                    <span className="min-w-0 break-words">{item.label}</span>
                    <span aria-hidden="true" className={`shrink-0 text-blue-700 transition-transform duration-200 ${activeDesktopIndex === index ? "translate-x-1" : ""}`}>&gt;</span>
                  </Link>
                </li>
              ))}
            </ul>
            </div>
            <div className="min-w-0 max-w-full rounded-r-md bg-white p-1.5">
              <ul className="grid w-full min-w-0 max-w-full">
              {desktopNavigation[activeDesktopIndex].pages.map((page) => (
                <li key={page.label} className="min-w-0 max-w-full border-b border-slate-100 last:border-b-0">
                  {page.href ? (
                    <Link href={page.href} className="group grid min-h-10 w-full min-w-0 max-w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-x-1.5 px-2 py-1.5 text-xs text-slate-700 transition-colors hover:bg-blue-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600">
                      <span className="min-w-0 break-words font-medium transition-colors group-hover:text-blue-700">
                        {page.label}
                      </span>
                    </Link>
                  ) : (
                    <div className="grid min-h-10 w-full min-w-0 max-w-full cursor-default grid-cols-[minmax(0,1fr)_auto] items-center gap-x-1.5 px-2 py-1.5 text-xs text-slate-600">
                      <span className="min-w-0 break-words font-medium">{page.label}</span>
                      <span className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-100 px-1.5 py-0.5 text-[11px] font-medium leading-none text-slate-500">
                        {copy[locale].comingSoon}
                      </span>
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
                    {item.href.endsWith("/products") ? (
                      renderMobileCascade("products", item)
                    ) : item.href.endsWith("/applications") ? (
                      renderMobileCascade("applications", item)
                    ) : item.href.endsWith("/solutions") ? (
                      renderMobileCascade("solutions", item)
                    ) : item.href.endsWith("/resources") ? (
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
