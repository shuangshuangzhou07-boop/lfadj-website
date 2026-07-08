import type { Metadata } from "next";
import { BlogGrowthPage, blogCluster, getGrowthMetadata } from "../../../v53-growth-content";

const data = blogCluster["portable-light-tower-buying-guide"];

export const metadata: Metadata = getGrowthMetadata(
  data,
  "https://lfadj.com/en/blog/portable-light-tower-buying-guide"
);

export default function Page() {
  return <BlogGrowthPage data={data} lang="en" />;
}
