import type { Metadata } from "next";

import MiningLightingPage from "../../../applications/mining-lighting/page";

type Lang = "en" | "zh";

function isLang(value: string): value is Lang {
  return value === "en" || value === "zh";
}

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : "en";
  const zh = lang === "zh";
  const url = `https://lfadj.com/${lang}/applications/mining-lighting`;
  const title = zh
    ? "矿山照明应用 | 矿区移动照明灯塔 | LFADJ"
    : "Mining Lighting Applications | Mobile Light Towers for Mining | LFADJ";
  const description = zh
    ? "了解移动照明灯塔在露天矿作业区、运输道路、装卸与检修区域中的应用，以及矿山夜间运行和移动部署挑战。"
    : "Explore mobile light tower applications across open-pit work areas, haul roads, loading and maintenance zones, and changing nighttime mining conditions.";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://lfadj.com/en/applications/mining-lighting",
        "zh-CN": "https://lfadj.com/zh/applications/mining-lighting",
        "x-default": "https://lfadj.com/en/applications/mining-lighting",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "LFADJ",
      locale: zh ? "zh_CN" : "en_US",
      images: [
        {
          url: "https://lfadj.com/images/applications/mining-lighting/mining-lighting-application-hero.webp",
          alt: zh
            ? "移动照明灯塔为夜间矿山作业提供照明"
            : "Mobile light tower illuminating mining operations at night",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        "https://lfadj.com/images/applications/mining-lighting/mining-lighting-application-hero.webp",
      ],
    },
  };
}

export default MiningLightingPage;
