export type IndustryApplicationPage = {
  slug: string;
  keyword: string;
  industry: string;
  structure: ["problem", "solution", "product-path", "cta"];
  internalLinks: string[];
};

const industryKeywords = [
  { industry: "Construction", keyword: "construction lighting solution" },
  { industry: "Mining", keyword: "mining lighting system" },
  { industry: "Emergency Rescue", keyword: "emergency rescue lighting tower" },
  { industry: "Rental", keyword: "rental lighting equipment" },
];

export function generateIndustryApplicationPages(): IndustryApplicationPage[] {
  return industryKeywords.map((item) => ({
    slug: item.keyword.replace(/\s+/g, "-"),
    keyword: item.keyword,
    industry: item.industry,
    structure: ["problem", "solution", "product-path", "cta"],
    internalLinks: ["/products", "/products/lf6130", "/contact"],
  }));
}
