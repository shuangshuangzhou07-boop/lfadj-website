import type { Metadata } from "next";
import { BlogGrowthPage, blogCluster, getGrowthMetadata } from "../../../v53-growth-content";

const data = blogCluster["diesel-vs-solar-light-tower"];

export const metadata: Metadata = getGrowthMetadata(
  data,
  "https://lfadj.com/en/blog/diesel-vs-solar-light-tower"
);

export default function Page() {
  return <BlogGrowthPage data={data} lang="en" />;
}
