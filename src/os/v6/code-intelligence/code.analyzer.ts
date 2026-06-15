export type CodeAnalysis = {
  lines: number;
  imports: string[];
  exports: string[];
  components: string[];
  routes: string[];
  osModules: string[];
  seoIntegrations: string[];
  productIntegrations: string[];
};

export type SourceFileInput = {
  path: string;
  source: string;
};

function extractImports(source: string): string[] {
  return Array.from(source.matchAll(/^import\s+.*$/gm)).map((match) => match[0]);
}

function extractExports(source: string): string[] {
  return Array.from(source.matchAll(/^export\s+.*$/gm)).map((match) => match[0]);
}

function extractComponents(source: string): string[] {
  const functionComponents = Array.from(
    source.matchAll(/(?:export\s+)?function\s+([A-Z][A-Za-z0-9_]*)/g),
  ).map((match) => match[1]);
  const constComponents = Array.from(
    source.matchAll(/(?:export\s+)?const\s+([A-Z][A-Za-z0-9_]*)\s*=/g),
  ).map((match) => match[1]);

  return Array.from(new Set([...functionComponents, ...constComponents]));
}

export function analyzeCode(source: string, path = "unknown"): CodeAnalysis {
  return {
    lines: source.split(/\r?\n/).length,
    imports: extractImports(source),
    exports: extractExports(source),
    components: extractComponents(source),
    routes: path.startsWith("app/") && path.endsWith("page.tsx") ? [path] : [],
    osModules: path.includes("src/os/") ? [path] : [],
    seoIntegrations: source.includes("generateMetadata") || source.includes("metadata") ? [path] : [],
    productIntegrations: source.includes("getProduct") || source.includes("ProductTemplate") ? [path] : [],
  };
}

export function analyzeProject(files: SourceFileInput[]) {
  const fileAnalyses = files.map((file) => ({
    path: file.path,
    analysis: analyzeCode(file.source, file.path.replace(/\\/g, "/")),
  }));

  return {
    files: fileAnalyses.length,
    routes: fileAnalyses.flatMap((file) => file.analysis.routes),
    components: fileAnalyses.flatMap((file) => file.analysis.components),
    osModules: fileAnalyses.flatMap((file) => file.analysis.osModules),
    seoIntegrations: fileAnalyses.flatMap((file) => file.analysis.seoIntegrations),
    productIntegrations: fileAnalyses.flatMap((file) => file.analysis.productIntegrations),
  };
}
