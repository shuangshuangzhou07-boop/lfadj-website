import type { Metadata } from "next";

import { IndustrialSeoPage } from "@/components/seo/IndustrialSeoPage";

export const metadata: Metadata = {
  title: "Mining Lighting | South Africa Mine Site Night Operations | LFADJ",
  description:
    "Mining lighting use-case page for South Africa mine sites, off-grid operations and rugged terrain deployment.",
  alternates: { canonical: "https://lfadj.com/applications/mining-lighting" },
};

export default function MiningLightingPage() {
  return (
    <IndustrialSeoPage
      eyebrow="Mining Use-Case"
      title="Mining Lighting for South Africa Mine Site Night Operations"
      subtitle="This page targets mining lighting buyers who need dust resistance, long runtime and low maintenance."
      summary="The page bridges informational blog traffic into the LF955 transactional product page."
      keywords={["mining lighting", "mining light tower South Africa", "off-grid lighting systems", "rugged terrain"]}
      primaryCta="View LF955"
      primaryHref="/products/lf955"
      secondaryCta="Applications Hub"
      secondaryHref="/applications"
      cards={[
        { title: "Mining night operations", description: "Haul roads, stockpiles and active extraction zones.", href: "/products/lf955" },
        { title: "Off-grid lighting", description: "Long runtime for remote sites with no stable grid power.", href: "/products/lf955" },
        { title: "Rugged terrain", description: "Fast deployment and low maintenance on uneven ground.", href: "/products/lf955" },
        { title: "Construction lighting", description: "Cross-sell into infrastructure and civil work projects.", href: "/applications/construction-lighting" },
      ]}
      stats={[
        { value: "Mining-grade", label: "site requirement" },
        { value: "Off-grid", label: "deployment fit" },
        { value: "Low maintenance", label: "remote operation advantage" },
      ]}
      note="Mining lighting keywords should resolve into a qualified LF955 inquiry."
      bottomTitle="Route Mining Traffic to the LF955 Conversion Page"
      bottomText="Use this page to capture South Africa mine site intent, then hand off to the product page and WhatsApp inquiry flow."
    />
  );
}
