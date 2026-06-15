import type { Metadata } from "next";
import { authorityPages } from "../../authority-content";
import { AuthorityPage } from "../../authority-page";

export const metadata: Metadata = {
  title: "LED Light Tower | Efficient Mobile Lighting Tower Guide",
  description:
    "Professional LED light tower guide for contractors, rental fleets, mining operators and OEM buyers evaluating efficient mobile lighting towers.",
  alternates: { canonical: "https://lfadj.com/products/led-light-tower" },
};

export default function LedLightTowerPage() {
  return <AuthorityPage content={authorityPages.ledLightTower} />;
}
