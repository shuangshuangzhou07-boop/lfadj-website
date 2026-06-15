import type { Metadata } from "next";
import { authorityPages } from "../../authority-content";
import { AuthorityPage } from "../../authority-page";

export const metadata: Metadata = {
  title: "What Is a Light Tower? | Mobile Light Tower Guide",
  description:
    "Complete B2B guide explaining what a light tower is, how mobile light towers work, and how buyers choose industrial lighting equipment.",
  alternates: { canonical: "https://lfadj.com/blog/what-is-light-tower" },
};

export default function WhatIsLightTowerPage() {
  return <AuthorityPage content={authorityPages.whatIsLightTower} />;
}
