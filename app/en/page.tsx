import type { Metadata } from "next";
import { HomePageTemplate } from "@/src/components/HomePageTemplate";
import { homepageDictionary } from "@/src/i18n/homepageDictionary";

const metadataContent = homepageDictionary.en.metadata;
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
    locale: "en_US",
    alternateLocale: ["zh_CN"],
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
      "@id": "https://lfadj.com/en#website",
      name: "LFADJ",
      url: "https://lfadj.com/en",
      inLanguage: "en",
      publisher: { "@id": "https://lfadj.com/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://lfadj.com/en#webpage",
      name: metadataContent.title,
      description: metadataContent.description,
      url: "https://lfadj.com/en",
      inLanguage: "en",
      isPartOf: { "@id": "https://lfadj.com/en#website" },
      about: { "@id": "https://lfadj.com/#organization" },
    },
  ],
};

export default function EnglishHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageTemplate lang="en" />
    </>
  );
}
