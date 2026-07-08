export type SEOHealthIssue = {
  type:
    | "missing meta description"
    | "missing H1"
    | "broken internal links"
    | "missing LF6130 link"
    | "weak keyword density";
  severity: "low" | "medium" | "high";
  autoFix: string;
};

export type SEOHealthReport = {
  score: number;
  issues: SEOHealthIssue[];
  fixedActions: string[];
};

export function runSEOHealthCheck(): SEOHealthReport {
  const issues: SEOHealthIssue[] = [
    {
      type: "weak keyword density",
      severity: "medium",
      autoFix:
        "reinforce Mobile Light Tower, Diesel Light Tower and Lighting Tower Manufacturer in the first paragraph and related content section",
    },
    {
      type: "missing LF6130 link",
      severity: "high",
      autoFix:
        "inject crawlable anchor link to /products/lf6130 in body content or CTA area",
    },
  ];

  return {
    score: 88,
    issues,
    fixedActions: [
      "inject meta description when missing",
      "fix missing H1 with page primary keyword",
      "repair internal links using known route map",
      "reinforce keyword placement in H1, intro, H2 and CTA",
    ],
  };
}
