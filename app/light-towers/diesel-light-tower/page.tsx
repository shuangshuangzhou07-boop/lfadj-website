import type { Metadata } from "next";

import { IndustrialSeoPage } from "@/components/seo/IndustrialSeoPage";

export const metadata: Metadata = {
  title: "Diesel Light Tower for Mining, Construction & Off-Grid Sites | LFADJ",
  description:
    "Diesel light tower category page targeting commercial searches for mining, construction and off-grid industrial lighting systems.",
  alternates: { canonical: "https://lfadj.com/light-towers/diesel-light-tower" },
};

export default function DieselLightTowerPage() {
  return (
    <IndustrialSeoPage
      eyebrow="Diesel Category"
      title="Diesel Light Tower for Mining, Construction and Off-Grid Sites"
      subtitle="Target buyers comparing runtime stability, fuel efficiency and maintenance cost for industrial lighting projects."
      summary="Commercial intent page designed to hand off qualified traffic to the LF955 product page."
      keywords={["diesel light tower South Africa", "mining lighting", "off-grid lighting systems", "construction lighting"]}
      primaryCta="View LF955"
      primaryHref="/products/lf955"
      secondaryCta="Category Hub"
      secondaryHref="/light-towers"
      cards={[
        {
          title: "Mining lighting",
          description: "Mining-grade runtime for long shifts, dust and rough terrain.",
          href: "/applications/mining-lighting",
        },
        {
          title: "Construction lighting",
          description: "Support civil works, road maintenance and infrastructure projects.",
          href: "/applications/construction-lighting",
        },
        {
          title: "Off-grid systems",
          description: "Low maintenance, fast deployment and long runtime where grid power is absent.",
          href: "/applications/emergency-lighting",
        },
        {
          title: "LF955 product page",
          description: "Move commercial traffic into the conversion page and WhatsApp inquiry flow.",
          href: "/products/lf955",
        },
      ]}
      stats={[
        { value: "7.5m", label: "hydraulic mast target" },
        { value: "South Africa", label: "priority market" },
        { value: "Low maintenance", label: "for remote operations" },
      ]}
      note="This page supports commercial searches while keeping LF955 as the transaction endpoint."
      bottomTitle="Use Diesel Category Traffic to Feed LF955"
      bottomText="The category page ranks on commercial light tower keywords and routes buyers to the product page once the project is qualified."
    />
  );
}
