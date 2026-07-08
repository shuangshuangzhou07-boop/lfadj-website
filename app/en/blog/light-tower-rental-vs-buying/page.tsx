import type { Metadata } from "next";
import { BlogGrowthPage, blogCluster, getGrowthMetadata } from "../../../v53-growth-content";

const data = blogCluster["light-tower-rental-vs-buying"];

export const metadata: Metadata = getGrowthMetadata(
  data,
  "https://lfadj.com/en/blog/light-tower-rental-vs-buying"
);

export default function Page() {
  return <BlogGrowthPage data={data} lang="en" />;
}
