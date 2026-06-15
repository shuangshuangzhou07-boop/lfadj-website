import { analyzeRootCause } from "../diagnosis-engine/root-cause-analyzer";
import { summarizeLog } from "../log-intelligence/log-summarizer";

export function runHealingPipeline(log: string) {
  return {
    rootCause: analyzeRootCause(log),
    summary: summarizeLog(log),
  };
}
