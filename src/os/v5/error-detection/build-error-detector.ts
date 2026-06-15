export type BuildErrorSignal = {
  failed: boolean;
  summary: string;
};

export function detectBuildError(buildOutput: string): BuildErrorSignal {
  const failed = /Failed to compile|Build failed|FATAL ERROR|Type error/i.test(buildOutput);

  return {
    failed,
    summary: failed ? "Build output contains failure indicators." : "No build failure detected.",
  };
}
