import type { Metadata } from "next";
import { authorityPages } from "../../authority-content";
import { AuthorityPage } from "../../authority-page";

export const metadata: Metadata = {
  title: "Mining Light Tower | Mobile Lighting Tower for Mine Sites",
  description:
    "High-authority mining light tower guide for mine roads, maintenance areas, remote worksites and industrial procurement teams.",
  alternates: { canonical: "https://lfadj.com/applications/mining" },
};

export default function MiningApplicationPage() {
  return <AuthorityPage content={authorityPages.mining} />;
}
