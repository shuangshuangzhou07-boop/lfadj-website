import type { Metadata } from "next";
import { HomePageTemplate } from "@/src/components/HomePageTemplate";
import { homepageDictionary } from "@/src/i18n/homepageDictionary";

const metadataContent = homepageDictionary.zh.metadata;
const socialImage = "https://lfadj.com/images/products/lf955/applications/night-construction.jpg";

export const metadata: Metadata = {
  title: metadataContent.title,
  description: metadataContent.description,
  alternates: {
    canonical: metadataContent.canonical,
    languages: {
      en: "https://lfadj.com/en",
      "zh-CN": "https://lfadj.com/zh",
      "x-default": "https://lfadj.com/en",
    },
  },
  openGraph: {
    title: metadataContent.openGraphTitle,
    description: metadataContent.openGraphDescription,
    url: metadataContent.openGraphUrl,
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    images: [{ url: socialImage, width: 640, height: 427, alt: metadataContent.socialImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataContent.title,
    description: metadataContent.description,
    images: [{ url: socialImage, alt: metadataContent.socialImageAlt }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lfadj.com/#organization",
      name: "LFADJ",
      url: "https://lfadj.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://lfadj.com/zh#website",
      name: "LFADJ",
      url: "https://lfadj.com/zh",
      inLanguage: "zh-CN",
      publisher: { "@id": "https://lfadj.com/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://lfadj.com/zh#webpage",
      name: metadataContent.title,
      description: metadataContent.description,
      url: "https://lfadj.com/zh",
      inLanguage: "zh-CN",
      isPartOf: { "@id": "https://lfadj.com/zh#website" },
      about: { "@id": "https://lfadj.com/#organization" },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageTemplate lang="zh" />
    </>
  );
}
