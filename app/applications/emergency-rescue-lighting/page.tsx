import type { Metadata } from "next";
import { SiteNav } from "../../site-nav";
import {
  ApplicationGrowthPage,
  applicationCluster,
  getGrowthMetadata,
} from "../../v53-growth-content";

const data = applicationCluster["emergency-rescue-lighting"];

export const metadata: Metadata = getGrowthMetadata(
  data,
  "https://lfadj.com/applications/emergency-rescue-lighting"
);

export default function Page() {
  return (
    <>
      <SiteNav />
      <ApplicationGrowthPage data={data} />
    </>
  );
}
