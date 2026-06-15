import type { Metadata } from "next";
import { authorityPages } from "../../authority-content";
import { AuthorityPage } from "../../authority-page";

export const metadata: Metadata = {
  title: "Diesel Light Tower | Mobile Lighting Tower for Industrial Worksites",
  description:
    "High-authority guide to diesel light towers for construction, mining, emergency, rental and OEM buyers comparing mobile lighting tower solutions.",
  alternates: { canonical: "https://lfadj.com/products/diesel-light-tower" },
};

export default function DieselLightTowerPage() {
  return <AuthorityPage content={authorityPages.dieselLightTower} />;
}
