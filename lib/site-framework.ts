import type { Metadata } from "next";
import type { PlaceholderCopy } from "@/components/RoutePlaceholder";

export type FrameworkLocale = "en" | "zh";
export type FrameworkSection = "products" | "solutions" | "manufacturing" | "resources" | "contact";

const titles: Record<FrameworkSection, Record<string, { en: string; zh: string }>> = {
  products: {
    "diesel-light-towers": { en: "Diesel Light Towers", zh: "柴油移动照明灯塔" },
    "solar-light-towers": { en: "Solar Light Towers", zh: "太阳能移动照明灯塔" },
    "solar-surveillance-trailers": { en: "Solar Surveillance Trailers", zh: "太阳能监控拖车" },
    "hybrid-energy-solutions": { en: "Hybrid & Energy Solutions", zh: "混合动力与储能方案" },
    lf968: { en: "LF968 Manual Diesel Light Tower", zh: "LF968 手动柴油移动照明灯塔" },
    lf981: { en: "LF981 Solar Camera Trailer", zh: "LF981 太阳能监控拖车" },
  },
  solutions: {
    "construction-lighting": { en: "Construction Lighting", zh: "建筑施工照明" },
    "mining-lighting": { en: "Mining Lighting", zh: "矿山照明" },
    "oil-gas-lighting": { en: "Oil & Gas Lighting", zh: "石油与天然气照明" },
    "rental-fleet-solutions": { en: "Rental Fleet Solutions", zh: "租赁设备解决方案" },
    "emergency-lighting": { en: "Emergency Lighting", zh: "应急照明" },
  },
  manufacturing: {
    "about-lfadj": { en: "About LFADJ", zh: "关于 LFADJ" },
    factory: { en: "Factory", zh: "工厂介绍" },
    "production-process": { en: "Production Process", zh: "生产流程" },
    "quality-control": { en: "Quality Control", zh: "质量控制" },
    customization: { en: "Customization", zh: "定制能力" },
  },
  resources: {
    "download-center": { en: "Download Center", zh: "下载中心" },
    "technical-articles": { en: "Technical Articles", zh: "技术文章" },
    faq: { en: "FAQ", zh: "常见问题" },
    "case-studies": { en: "Case Studies", zh: "项目案例" },
  },
  contact: {
    "request-a-quote": { en: "Request a Quote", zh: "获取报价" },
  },
};

const sectionTitles: Record<FrameworkSection, { en: string; zh: string }> = {
  products: { en: "Products", zh: "产品中心" },
  solutions: { en: "Solutions", zh: "解决方案" },
  manufacturing: { en: "Manufacturing", zh: "制造能力" },
  resources: { en: "Resources", zh: "资源中心" },
  contact: { en: "Contact", zh: "联系我们" },
};

export function getFrameworkSlugs(section: FrameworkSection) {
  return Object.keys(titles[section]);
}

export function getPlaceholderCopy(locale: FrameworkLocale, section: FrameworkSection, slug: string): PlaceholderCopy | null {
  const entry = titles[section][slug];
  if (!entry) return null;
  const zh = locale === "zh";
  return {
    title: entry[locale],
    description: zh
      ? `本页面是 ${entry.zh} 的基础结构，后续将补充经过确认的产品或项目资料。`
      : `This is the foundation page for ${entry.en}. Verified product or project information will be added in a later content phase.`,
    parentLabel: sectionTitles[section][locale],
    parentHref: `/${locale}/${section}`,
    homeLabel: zh ? "首页" : "Home",
    homeHref: `/${locale}`,
    backLabel: zh ? `返回${sectionTitles[section].zh}` : `Back to ${sectionTitles[section].en}`,
  };
}

export function getPlaceholderMetadata(locale: FrameworkLocale, section: FrameworkSection, slug: string): Metadata {
  const copy = getPlaceholderCopy(locale, section, slug);
  if (!copy) return {};
  return {
    title: `${copy.title} | LFADJ`,
    description: copy.description,
    alternates: {
      canonical: `https://lfadj.com/${locale}/${section}/${slug}`,
      languages: {
        en: `https://lfadj.com/en/${section}/${slug}`,
        "zh-CN": `https://lfadj.com/zh/${section}/${slug}`,
        "x-default": `https://lfadj.com/en/${section}/${slug}`,
      },
    },
  };
}
