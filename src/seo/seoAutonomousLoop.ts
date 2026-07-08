import { autoPublishBlog, generateBlogTopics } from "./autoContentEngine";
import { autoLinkPages } from "./internalLinkOptimizer";
import { detectMissingKeywords, expandKeywordCluster } from "./keywordClusterEngine";

export type SEOCycleReport = {
  pagesAdded: number;
  keywordsExpanded: number;
  internalLinksAdded: number;
  draftBlogs: Array<{ slug: string; topic: string }>;
  suggestedPages: Array<{ type: "new blog" | "new application page" | "new comparison page"; topic: string }>;
};

export function runDailySEOCycle(mainKeyword = "Mobile Light Tower"): SEOCycleReport {
  const topics = generateBlogTopics(mainKeyword).slice(0, 3);
  const drafts = topics.map((topic) => autoPublishBlog(topic.topic));
  const clusters = expandKeywordCluster(mainKeyword);
  const missingKeywords = detectMissingKeywords();
  const linkReport = autoLinkPages();

  return {
    pagesAdded: 0,
    keywordsExpanded: clusters.reduce((total, cluster) => total + cluster.keywords.length, 0),
    internalLinksAdded:
      drafts.reduce((total, draft) => total + draft.internalLinksAdded, 0) +
      linkReport.rulesApplied.reduce((total, rule) => total + rule.requiredLinks.length, 0),
    draftBlogs: drafts.map((draft) => ({
      slug: draft.slug,
      topic: draft.topic,
    })),
    suggestedPages: [
      ...missingKeywords.slice(0, 2).map((item) => ({
        type: "new blog" as const,
        topic: item.keyword,
      })),
      {
        type: "new application page",
        topic: "temporary lighting for infrastructure",
      },
      {
        type: "new comparison page",
        topic: "diesel generator light tower fuel consumption",
      },
    ],
  };
}
