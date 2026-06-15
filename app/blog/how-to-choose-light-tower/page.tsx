import type { Metadata } from "next";
import { authorityPages } from "../../authority-content";
import { AuthorityPage } from "../../authority-page";

export const metadata: Metadata = {
  title: "How to Choose a Light Tower | B2B Mobile Light Tower Guide",
  description:
    "Professional guide for choosing a light tower by application, runtime, power source, mast system, OEM needs and supplier capability.",
  alternates: { canonical: "https://lfadj.com/blog/how-to-choose-light-tower" },
};

export default function HowToChooseLightTowerPage() {
  return <AuthorityPage content={authorityPages.chooseLightTower} />;
}
