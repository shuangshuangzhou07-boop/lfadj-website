export type ComparisonPage = {
  slug: string;
  title: string;
  comparisonKeyword: string;
  sections: string[];
  lfadjAdvantage: string;
  internalLinks: string[];
};

const comparisonTopics = [
  "diesel vs solar light tower",
  "LED vs halogen lighting tower",
  "LF6130 vs standard light tower",
];

export function generateComparisonPages(): ComparisonPage[] {
  return comparisonTopics.map((topic) => ({
    slug: topic.replace(/\s+/g, "-"),
    title: topic.replace(/\b\w/g, (letter) => letter.toUpperCase()),
    comparisonKeyword: topic,
    sections: [
      "Comparison overview",
      "Power and runtime comparison",
      "Maintenance and deployment factors",
      "Best-fit application scenarios",
      "Conversion decision summary",
    ],
    lfadjAdvantage:
      "LFADJ products are positioned for industrial B2B buyers who need manufacturer support, OEM capability and stable project supply.",
    internalLinks: ["/products/lf6130", "/products", "/contact"],
  }));
}
