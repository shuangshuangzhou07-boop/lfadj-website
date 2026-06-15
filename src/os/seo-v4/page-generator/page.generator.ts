import type { KeywordCluster } from "../keyword-engine/keyword.types";
import { generateH1 } from "./h1.generator";
import { generateMeta } from "./meta.generator";
import { generateSeoUrl } from "./url.generator";

export function generateSeoPage(basePath: string, cluster: KeywordCluster) {
  const url = generateSeoUrl(basePath, cluster.primary);

  return {
    url,
    h1: generateH1(cluster.primary),
    meta: generateMeta(cluster, url),
    intent: cluster.intent,
  };
}
