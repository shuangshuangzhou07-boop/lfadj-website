import type { KeywordCluster } from "../keyword-engine/keyword.types";

export function generateMeta(cluster: KeywordCluster, url: string) {
  return {
    title: `${cluster.primary} | LFADJ`,
    description: `LFADJ provides ${cluster.primary} solutions for construction, mining, emergency and rental applications. OEM/ODM available.`,
    alternates: {
      canonical: `https://lfadj.com${url}`,
    },
    keywords: [cluster.primary, ...cluster.variations],
  };
}
