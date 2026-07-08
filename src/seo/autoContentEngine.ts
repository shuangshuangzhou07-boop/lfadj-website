export type BlogTopic = {
  topic: string;
  intent:
    | "industrial use case"
    | "comparison"
    | "buyer intent"
    | "problem solution";
  targetKeyword: string;
  supportingKeywords: string[];
};

export type BlogStructure = {
  h1: string;
  seoTitle: string;
  metaDescription: string;
  h2Sections: string[];
  keywordMap: {
    primary: string;
    secondary: string[];
    longTail: string[];
  };
  internalLinkMap: Array<{
    anchor: string;
    href: string;
    priority: "max" | "high" | "support";
  }>;
};

export type DraftBlog = {
  slug: string;
  topic: string;
  markdown: string;
  internalLinksAdded: number;
};

const useCases = [
  "construction sites",
  "road construction",
  "open pit mining",
  "tunnel lighting",
  "flood control",
  "fire rescue",
  "rental fleets",
  "municipal maintenance",
  "oil and gas projects",
  "remote infrastructure",
];

const comparisons = [
  "diesel vs solar",
  "LED vs halogen",
  "hydraulic mast vs manual mast",
  "buying vs rental",
  "Kubota engine vs generic engine",
  "mobile light tower vs fixed lighting",
  "portable light tower vs battery lighting",
  "9m mast vs 6m mast",
  "OEM supplier vs trading company",
  "factory direct vs distributor purchase",
];

const buyerQuestions = [
  "how to choose",
  "how much does it cost",
  "what specifications matter",
  "what runtime is needed",
  "what mast height is best",
  "how to evaluate manufacturer quality",
  "what certifications matter",
  "how to prepare RFQ",
  "how to compare total cost of ownership",
  "what spare parts should be checked",
];

const problems = [
  "poor visibility at night",
  "remote jobsite without grid power",
  "high fuel cost",
  "unsafe mining night operation",
  "slow emergency deployment",
  "rental fleet downtime",
  "weak mast stability",
  "low LED efficiency",
  "unclear OEM documentation",
  "weather exposure and IP protection",
];

const coreLinks = [
  { anchor: "LF6130 Mobile Light Tower", href: "/products/lf6130", priority: "max" as const },
  { anchor: "LF6130 Diesel Mobile Lighting Tower", href: "/products/lf6130", priority: "max" as const },
  { anchor: "Construction Site Lighting", href: "/applications/construction-site-lighting", priority: "high" as const },
  { anchor: "Mining Site Lighting", href: "/applications/mining-site-lighting", priority: "high" as const },
  { anchor: "Lighting Tower Manufacturer", href: "/oem/light-tower-manufacturer", priority: "high" as const },
  { anchor: "Diesel Light Tower", href: "/products/diesel-light-tower", priority: "support" as const },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function generateBlogTopics(mainKeyword: string): BlogTopic[] {
  const topics: BlogTopic[] = [];

  for (const useCase of useCases) {
    topics.push({
      topic: `${mainKeyword} for ${useCase}`,
      intent: "industrial use case",
      targetKeyword: `${useCase} ${mainKeyword}`.replace(/\s+/g, " "),
      supportingKeywords: [
        "industrial lighting tower",
        "diesel light tower supplier",
        "portable light tower manufacturer",
      ],
    });
  }

  for (const comparison of comparisons) {
    topics.push({
      topic: `${comparison} ${mainKeyword} comparison`,
      intent: "comparison",
      targetKeyword: `${comparison} light tower`,
      supportingKeywords: [
        "mobile light tower comparison",
        "lighting tower manufacturer",
        "LF6130 mobile light tower",
      ],
    });
  }

  for (const question of buyerQuestions) {
    topics.push({
      topic: `${question} a ${mainKeyword}`,
      intent: "buyer intent",
      targetKeyword: `${question} ${mainKeyword}`,
      supportingKeywords: [
        "mobile light tower buyer guide",
        "diesel light tower manufacturer",
        "construction lighting solution",
      ],
    });
  }

  for (const problem of problems) {
    topics.push({
      topic: `${problem} solution with ${mainKeyword}`,
      intent: "problem solution",
      targetKeyword: `${problem} lighting solution`,
      supportingKeywords: [
        "mining light tower solution",
        "emergency lighting tower",
        "LF6130 diesel light tower",
      ],
    });
  }

  const remaining = 50 - topics.length;
  for (let index = 1; index <= remaining; index += 1) {
    topics.push({
      topic: `${mainKeyword} industrial buying guide ${index}`,
      intent: "buyer intent",
      targetKeyword: `${mainKeyword} buying guide ${index}`,
      supportingKeywords: [
        "lighting tower supplier",
        "OEM light tower manufacturer",
        "portable light tower",
      ],
    });
  }

  return topics.slice(0, 50);
}

export function generateBlogStructure(topic: string): BlogStructure {
  const normalizedTopic = topic.replace(/\s+/g, " ").trim();
  const primary = normalizedTopic.includes("Diesel")
    ? "Diesel Light Tower"
    : "Mobile Light Tower";

  return {
    h1: normalizedTopic,
    seoTitle: `${normalizedTopic} | LFADJ Mobile Light Tower Guide`,
    metaDescription:
      `Industrial guide for ${normalizedTopic.toLowerCase()} covering LF6130, applications, OEM support and buyer decisions.`.slice(
        0,
        158
      ),
    h2Sections: [
      "Industrial Search Intent",
      "Problem and Project Scenario",
      "Recommended Light Tower System",
      "LF6130 Product Reference",
      "Applications and Field Deployment",
      "Buyer Decision Checklist",
      "RFQ and Supplier Evaluation",
    ],
    keywordMap: {
      primary,
      secondary: [
        "Lighting Tower Manufacturer",
        "Diesel Light Tower Supplier",
        "Portable Light Tower",
      ],
      longTail: [
        `${normalizedTopic} supplier`,
        `${normalizedTopic} for construction`,
        `${normalizedTopic} for mining`,
      ],
    },
    internalLinkMap: coreLinks,
  };
}

export function autoPublishBlog(topic: string): DraftBlog {
  const structure = generateBlogStructure(topic);
  const slug = slugify(topic);
  const linkMarkdown = structure.internalLinkMap
    .map((link) => `- [${link.anchor}](${link.href})`)
    .join("\n");

  const markdown = `# ${structure.h1}

## ${structure.h2Sections[0]}

${structure.h1} targets industrial buyers searching for ${structure.keywordMap.primary}. The content is designed to connect informational search with product evaluation, application proof and RFQ conversion.

## ${structure.h2Sections[1]}

Industrial teams often face lighting problems such as remote worksites, night operation risk, mining visibility, road construction safety and emergency deployment pressure.

## ${structure.h2Sections[2]}

LFADJ recommends evaluating mast height, LED efficiency, diesel generator stability, IP protection, runtime and manufacturer support before selecting a mobile light tower.

## ${structure.h2Sections[3]}

[LF6130 Mobile Light Tower](/products/lf6130) is the primary product reference for diesel mobile lighting tower buyers. For more product details, review [LF6130 Diesel Mobile Lighting Tower](/products/lf6130).

## ${structure.h2Sections[4]}

Application planning should include [Construction Site Lighting](/applications/construction-site-lighting) and [Mining Site Lighting](/applications/mining-site-lighting) when evaluating coverage and runtime.

## ${structure.h2Sections[5]}

Buyers should compare total cost of ownership, spare parts, delivery terms, OEM documentation and manufacturer credibility.

## ${structure.h2Sections[6]}

Use the following internal paths to continue the sourcing process:

${linkMarkdown}
`;

  return {
    slug,
    topic,
    markdown,
    internalLinksAdded: structure.internalLinkMap.length,
  };
}
