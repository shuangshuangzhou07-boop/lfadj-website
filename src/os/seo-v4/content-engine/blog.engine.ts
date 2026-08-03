export type BlogTopic = {
  slug: string;
  keyword: string;
  title: string;
  intent: "informational";
  funnelStage: "top";
  sections: string[];
  internalLinks: string[];
};

const blogKeywords = [
  "what is mobile light tower",
  "how diesel lighting tower works",
  "best lighting tower for construction site",
  "kubota diesel generator lighting system",
];

export function generateBlogTopics(): BlogTopic[] {
  return blogKeywords.map((keyword) => ({
    slug: keyword.replace(/\s+/g, "-"),
    keyword,
    title: keyword.replace(/\b\w/g, (letter) => letter.toUpperCase()),
    intent: "informational",
    funnelStage: "top",
    sections: [
      "Search intent overview",
      "Technical explanation",
      "Industrial application context",
      "Buyer education checklist",
      "Recommended product path",
    ],
    internalLinks: ["/products", "/products/lf6130", "/en/contact"],
  }));
}
