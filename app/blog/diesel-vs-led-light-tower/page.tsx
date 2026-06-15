import type { Metadata } from "next";
import { authorityPages } from "../../authority-content";
import { AuthorityPage } from "../../authority-page";

export const metadata: Metadata = {
  title: "Diesel vs LED Light Tower | Mobile Light Tower Comparison",
  description:
    "B2B comparison explaining diesel power, LED lighting, mobile light tower selection, applications and procurement decision factors.",
  alternates: { canonical: "https://lfadj.com/blog/diesel-vs-led-light-tower" },
};

export default function DieselVsLedLightTowerPage() {
  return <AuthorityPage content={authorityPages.dieselVsLed} />;
}
