import type { Metadata } from "next";
import { BlogGrowthPage, blogCluster, getGrowthMetadata } from "../../../v53-growth-content";

const data = blogCluster["how-to-choose-light-tower-for-construction"];

export const metadata: Metadata = getGrowthMetadata(
  data,
  "https://lfadj.com/en/blog/how-to-choose-light-tower-for-construction"
);

export default function Page() {
  return <BlogGrowthPage data={data} lang="en" />;
}
