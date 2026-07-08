import type { Metadata } from "next";
import { BlogGrowthPage, blogCluster, getGrowthMetadata } from "../../../v53-growth-content";

const data = blogCluster["what-is-mobile-light-tower"];

export const metadata: Metadata = getGrowthMetadata(
  data,
  "https://lfadj.com/zh/blog/what-is-mobile-light-tower"
);

export default function Page() {
  return <BlogGrowthPage data={data} lang="zh" />;
}
