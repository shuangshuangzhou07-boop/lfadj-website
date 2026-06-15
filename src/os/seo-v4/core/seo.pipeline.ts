import { keywordClusters } from "../keyword-engine/keyword.cluster";
import { generateSeoPage } from "../page-generator/page.generator";

export function runSeoV4Pipeline() {
  return keywordClusters.map((cluster) => generateSeoPage("/seo", cluster));
}
