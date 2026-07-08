export type InternalLinkRule = {
  pagePattern: string;
  requiredLinks: string[];
};

export type LinkOptimizationReport = {
  rulesApplied: InternalLinkRule[];
  priorityTargets: Array<{ href: string; weight: number; reason: string }>;
  recommendations: string[];
};

const lf6130 = "/products/lf6130";
const applications = "/applications";
const oem = "/oem/light-tower-manufacturer";

export function autoLinkPages(): LinkOptimizationReport {
  const rulesApplied: InternalLinkRule[] = [
    {
      pagePattern: "all pages",
      requiredLinks: [lf6130, applications, "/contact"],
    },
    {
      pagePattern: "blog pages",
      requiredLinks: [lf6130, applications, oem],
    },
    {
      pagePattern: "application pages",
      requiredLinks: [lf6130, "/products/diesel-light-tower", oem],
    },
  ];

  return {
    rulesApplied,
    priorityTargets: strengthenAuthorityGraph(),
    recommendations: [
      "Every new draft should include at least three crawlable internal links.",
      "Blog articles must link to LF6130 at least once in the first half of the content.",
      "Application pages should link to LF6130 and the OEM manufacturer page in CTA areas.",
    ],
  };
}

export function strengthenAuthorityGraph() {
  return [
    {
      href: lf6130,
      weight: 100,
      reason: "MAX PRIORITY product authority hub",
    },
    {
      href: "/",
      weight: 85,
      reason: "homepage second priority for Mobile Light Tower root keyword",
    },
    {
      href: oem,
      weight: 80,
      reason: "manufacturer and conversion authority page",
    },
  ];
}
