import type { KeywordCluster, SearchIntent } from "./keyword.types";

export function mapIntent(cluster: KeywordCluster): SearchIntent {
  return cluster.intent;
}

export function isConversionIntent(intent: SearchIntent): boolean {
  return intent === "manufacturer" || intent === "conversion";
}
