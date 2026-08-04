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
    ? "矿山照明应用 | 移动照明灯塔 | LFADJ"
    : "Mining Lighting Applications | Mobile Light Towers | LFADJ";
  const description = zh
    ? "了解移动照明灯塔在露天矿山、采石场、运输道路、设备维护区及临时作业区中的应用，并进一步评估柴油与太阳能设备方向。"
    : "Explore mobile light tower applications for open-pit mines and quarries, including changing work areas, haul roads, maintenance zones, and diesel and solar equipment directions.";

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
            ? "用于露天矿山作业区域的移动照明灯塔"
            : "Mobile light tower supporting an open-pit mining work area",
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
