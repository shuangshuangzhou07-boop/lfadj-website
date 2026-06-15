import { createClonePlan } from "./cloner.engine";

export function cloneSeoCluster(sourceCluster: string, targetCluster: string) {
  return createClonePlan(`/seo/${sourceCluster}`, `/seo/${targetCluster}`);
}
