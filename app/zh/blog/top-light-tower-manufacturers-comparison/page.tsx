import type { Metadata } from "next";
import { BlogGrowthPage, blogCluster, getGrowthMetadata } from "../../../v53-growth-content";

const data = blogCluster["top-light-tower-manufacturers-comparison"];

export const metadata: Metadata = getGrowthMetadata(
  data,
  "https://lfadj.com/zh/blog/top-light-tower-manufacturers-comparison"
);

export default function Page() {
  return <BlogGrowthPage data={data} lang="zh" />;
}
