export type ContentPriority = "high" | "medium" | "low";

export type ContentPriorityRule = {
  priority: ContentPriority;
  keywords: string[];
};

export const contentPriorityRules: ContentPriorityRule[] = [
  {
    priority: "high",
    keywords: ["mobile light tower", "diesel light tower manufacturer"],
  },
  {
    priority: "medium",
    keywords: ["mining light tower"],
  },
  {
    priority: "low",
    keywords: ["blog informational keywords"],
  },
];

export const onPageSeoRules = [
  "Use exactly one H1 per page.",
  "Use H2 headings for major sections.",
  "Include the target keyword in the title.",
  "Include the target keyword in the first paragraph.",
  "Place a CTA section at the bottom of the page.",
];

export function getContentPriority(keyword: string): ContentPriority {
  return (
    contentPriorityRules.find((rule) => rule.keywords.includes(keyword))?.priority ?? "low"
  );
}
