export type KeywordPageMapping = {
  path: string;
  keywords: string[];
  primaryKeyword: string;
};

export const keywordPageMappings: KeywordPageMapping[] = [
  {
    path: "/",
    primaryKeyword: "mobile light tower",
    keywords: ["mobile light tower"],
  },
  {
    path: "/products/lf6130",
    primaryKeyword: "diesel light tower",
    keywords: ["diesel light tower", "kubota lighting tower"],
  },
  {
    path: "/applications",
    primaryKeyword: "construction lighting solutions",
    keywords: ["construction lighting solutions", "mining lighting systems"],
  },
  {
    path: "/oem",
    primaryKeyword: "lighting tower manufacturer",
    keywords: ["lighting tower manufacturer"],
  },
];

export function findKeywordMapping(path: string): KeywordPageMapping | undefined {
  return keywordPageMappings.find((mapping) => mapping.path === path);
}
