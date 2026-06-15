import { detectBuildError } from "../error-detection/build-error-detector";
import { detectRuntimeError } from "../error-detection/runtime-error-detector";

export type RootCause = {
  category: "build" | "runtime" | "unknown";
  summary: string;
};

export function analyzeRootCause(output: string): RootCause {
  const build = detectBuildError(output);

  if (build.failed) {
    return { category: "build", summary: build.summary };
  }

  const runtime = detectRuntimeError(output);

  if (runtime) {
    return { category: "runtime", summary: runtime.message };
  }

  return { category: "unknown", summary: "No known root cause detected." };
}
