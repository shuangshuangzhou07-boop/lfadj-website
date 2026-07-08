import type { Metadata } from "next";
import { BlogGrowthPage, blogCluster, getGrowthMetadata } from "../../../v53-growth-content";

const data = blogCluster["emergency-lighting-solution-guide"];

export const metadata: Metadata = getGrowthMetadata(
  data,
  "https://lfadj.com/zh/blog/emergency-lighting-solution-guide"
);

export default function Page() {
  return <BlogGrowthPage data={data} lang="zh" />;
}
