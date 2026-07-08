import type { Metadata } from "next";
import { HomePageTemplate } from "@/src/components/HomePageTemplate";
import { homepageDictionary } from "@/src/i18n/homepageDictionary";

const metadataContent = homepageDictionary.en.metadata;

export const metadata: Metadata = {
  title: metadataContent.title,
  description: metadataContent.description,
  alternates: {
    canonical: metadataContent.canonical,
  },
  openGraph: {
    title: metadataContent.openGraphTitle,
    description: metadataContent.openGraphDescription,
    url: metadataContent.openGraphUrl,
    type: "website",
  },
};

export default function EnglishHomePage() {
  return <HomePageTemplate lang="en" />;
}
