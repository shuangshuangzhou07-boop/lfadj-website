export type SearchIntent = "informational" | "commercial" | "manufacturer" | "conversion";

export type KeywordCluster = {
  name: string;
  primary: string;
  variations: string[];
  intent: SearchIntent;
};
