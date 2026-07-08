import type { Metadata } from "next";
import { SiteNav } from "../../site-nav";
import {
  ApplicationGrowthPage,
  applicationCluster,
  getGrowthMetadata,
} from "../../v53-growth-content";

const data = applicationCluster["mining-site-lighting"];

export const metadata: Metadata = getGrowthMetadata(
  data,
  "https://lfadj.com/applications/mining-site-lighting"
);

export default function Page() {
  return (
    <>
      <SiteNav />
      <ApplicationGrowthPage data={data} />
    </>
  );
}
