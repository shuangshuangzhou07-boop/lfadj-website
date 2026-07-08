import type { Metadata } from "next";

import { IndustrialSeoPage } from "@/components/seo/IndustrialSeoPage";

export const metadata: Metadata = {
  title: "Mining Light Tower for South Africa & Off-Grid Sites | LFADJ",
  description:
    "Mining light tower category page for South Africa, off-grid and rough terrain projects that require low maintenance and long runtime.",
  alternates: { canonical: "https://lfadj.com/light-towers/mining-light-tower" },
};

export default function MiningLightTowerPage() {
  return (
    <IndustrialSeoPage
      eyebrow="Mining Category"
      title="Mining Light Tower for South Africa and Off-Grid Sites"
      subtitle="Rank for mining lighting searches, then route qualified traffic into the LF955 conversion page."
      summary="Designed for dust resistance, long runtime and low maintenance in mining operations."
      keywords={["mining light tower South Africa", "mining-grade", "off-grid lighting systems", "rugged terrain"]}
      primaryCta="View LF955"
      primaryHref="/products/lf955"
      secondaryCta="Category Hub"
      secondaryHref="/light-towers"
      cards={[
        { title: "Mining lighting", description: "Night operations, haul roads and stockpile visibility.", href: "/applications/mining-lighting", tag: "Mining-grade" },
        { title: "Construction lighting", description: "Infrastructure and civil works around industrial sites.", href: "/applications/construction-lighting" },
        { title: "Emergency lighting", description: "Off-grid lighting systems for outages and recovery work.", href: "/applications/emergency-lighting" },
        { title: "LF955 product page", description: "Conversion page for quote and WhatsApp inquiry.", href: "/products/lf955", tag: "Conversion" },
      ]}
      stats={[
        { value: "Dust", label: "resistance priority" },
        { value: "Off-grid", label: "runtime focus" },
        { value: "South Africa", label: "market target" },
      ]}
      note="This page is built for South Africa mining traffic, not broad product browsing."
      bottomTitle="Mining Keywords Belong Here Before the Product Page"
      bottomText="Use the category page to rank for mining intent and direct the buyer to LF955 once the project is qualified."
    />
  );
}
