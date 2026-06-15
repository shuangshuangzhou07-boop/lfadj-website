export type KeywordStrategy = {
  primaryKeywords: string[];
  commercialIntentKeywords: string[];
  longTailKeywords: string[];
  blogTrafficKeywords: string[];
};

export const keywordStrategy: KeywordStrategy = {
  primaryKeywords: [
    "mobile light tower",
    "diesel light tower",
    "lighting tower manufacturer",
  ],
  commercialIntentKeywords: [
    "mobile light tower manufacturer",
    "diesel light tower manufacturer",
    "OEM light tower supplier",
    "portable lighting tower factory",
  ],
  longTailKeywords: [
    "construction mobile light tower",
    "mining lighting solution",
    "emergency lighting tower supplier",
    "kubota diesel light tower",
  ],
  blogTrafficKeywords: [
    "what is a mobile light tower",
    "diesel vs solar light tower",
    "how to choose a light tower",
    "construction lighting guide",
  ],
};

export function getMoneyKeywords(): string[] {
  return [...keywordStrategy.primaryKeywords, ...keywordStrategy.commercialIntentKeywords];
}
