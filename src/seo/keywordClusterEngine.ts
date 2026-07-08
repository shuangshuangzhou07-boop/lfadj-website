export type KeywordCluster = {
  name: string;
  keywords: string[];
  targetPage: string;
};

const siteKeywordCoverage = [
  "mobile light tower",
  "diesel light tower",
  "lighting tower manufacturer",
  "construction lighting solution",
  "mining site lighting",
  "emergency lighting solution",
  "portable light tower buying guide",
];

const targetKeywords = [
  "solar light tower maintenance",
  "battery light tower runtime",
  "tower light for road construction",
  "light tower spare parts",
  "mobile lighting tower price",
  "temporary lighting for infrastructure",
  "OEM mobile light tower supplier",
  "diesel generator light tower fuel consumption",
];

export function expandKeywordCluster(seedKeyword: string): KeywordCluster[] {
  return [
    {
      name: "industrial use cluster",
      keywords: [
        seedKeyword,
        "industrial mobile light tower",
        "temporary jobsite lighting",
        "outdoor worksite lighting tower",
      ],
      targetPage: "/",
    },
    {
      name: "rental cluster",
      keywords: [
        "light tower rental fleet",
        "portable light tower for rental",
        "temporary lighting projects",
        "rental light tower supplier",
      ],
      targetPage: "/applications/rental-fleet-lighting",
    },
    {
      name: "mining cluster",
      keywords: [
        "mining lighting tower",
        "open pit mining lighting",
        "mining light tower solution",
        "night operation lighting tower",
      ],
      targetPage: "/applications/mining-site-lighting",
    },
    {
      name: "construction cluster",
      keywords: [
        "construction lighting solution",
        "road construction light tower",
        "tunnel lighting tower",
        "infrastructure lighting tower",
      ],
      targetPage: "/applications/construction-site-lighting",
    },
    {
      name: "emergency cluster",
      keywords: [
        "emergency lighting tower",
        "flood control lighting tower",
        "fire rescue lighting",
        "disaster recovery mobile lighting",
      ],
      targetPage: "/applications/emergency-rescue-lighting",
    },
    {
      name: "OEM manufacturer cluster",
      keywords: [
        "lighting tower manufacturer",
        "OEM light tower supplier",
        "portable light tower manufacturer",
        "factory direct light tower",
      ],
      targetPage: "/oem/light-tower-manufacturer",
    },
  ];
}

export function detectMissingKeywords() {
  return targetKeywords
    .filter((keyword) => !siteKeywordCoverage.includes(keyword))
    .map((keyword) => ({
      keyword,
      reason: "low coverage topic or competitor keyword gap",
      suggestedPageType: keyword.includes("price")
        ? "buyer guide"
        : keyword.includes("spare parts")
          ? "support page"
          : "blog article",
    }));
}
