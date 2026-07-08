import type { Metadata } from "next";

import { IndustrialSeoPage } from "@/components/seo/IndustrialSeoPage";

export const metadata: Metadata = {
  title: "Light Tower Categories | Diesel, Portable & Mining | LFADJ",
  description:
    "Industrial light tower category hub for diesel, portable and mining lighting systems built for construction, off-grid and rental projects.",
  alternates: { canonical: "https://lfadj.com/light-towers" },
};

export default function LightTowersHubPage() {
  return (
    <IndustrialSeoPage
      eyebrow="SEO Category Layer"
      title="Light Tower Categories for Industrial Buyers"
      subtitle="Use this category layer to compare diesel, portable and mining light towers before sending qualified buyers to LF955."
      summary="This hub targets commercial search intent and supports the South Africa mining lighting funnel."
      keywords={["mining lighting", "construction lighting", "off-grid lighting systems", "portable diesel light tower"]}
      primaryCta="View LF955"
      primaryHref="/products/lf955"
      secondaryCta="Browse Applications"
      secondaryHref="/applications"
      cards={[
        {
          title: "Diesel Light Tower",
          description: "High-runtime diesel lighting for construction, mining and off-grid deployment.",
          href: "/light-towers/diesel-light-tower",
          tag: "Commercial Intent",
        },
        {
          title: "Portable Light Tower",
          description: "Fast deployment lighting for rental fleets, temporary works and emergency response.",
          href: "/light-towers/portable-light-tower",
          tag: "Portable Use",
        },
        {
          title: "Mining Light Tower",
          description: "Mining-grade lighting for dust, rough terrain and long night shifts.",
          href: "/light-towers/mining-light-tower",
          tag: "Mining SEO",
        },
        {
          title: "LF955 Conversion Page",
          description: "Move qualified traffic from category research into the LF955 inquiry system.",
          href: "/products/lf955",
          tag: "Conversion",
        },
      ]}
      stats={[
        { value: "3", label: "category landing paths" },
        { value: "1", label: "LF955 conversion target" },
        { value: "South Africa", label: "mining market focus" },
      ]}
      note="Commercial keywords flow from category pages into the LF955 transactional page."
      bottomTitle="Capture Category Traffic Before It Reaches the Product Page"
      bottomText="This layer ranks for industrial category keywords, then routes only high-intent buyers to LF955 for quotation and WhatsApp follow-up."
    />
  );
}
