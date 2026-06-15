export type DependencyGraph = Record<string, string[]>;

export function createDependencyGraph(entries: Array<{ file: string; imports: string[] }>): DependencyGraph {
  return entries.reduce<DependencyGraph>((graph, entry) => {
    graph[entry.file] = entry.imports;
    return graph;
  }, {});
}

export type PageRelationshipGraph = Record<string, { linksTo: string[]; seoTarget?: string }>;

export type SeoProductLinkage = {
  productPage: string;
  seoModules: string[];
  productModules: string[];
};

export function createPageRelationshipGraph(
  pages: Array<{ path: string; links: string[]; seoTarget?: string }>,
): PageRelationshipGraph {
  return pages.reduce<PageRelationshipGraph>((graph, page) => {
    graph[page.path] = {
      linksTo: Array.from(new Set(page.links)),
      seoTarget: page.seoTarget,
    };
    return graph;
  }, {});
}

export function createSeoProductLinkageMap(entries: SeoProductLinkage[]): Record<string, SeoProductLinkage> {
  return entries.reduce<Record<string, SeoProductLinkage>>((map, entry) => {
    map[entry.productPage] = entry;
    return map;
  }, {});
}

export function findOrphanModules(graph: DependencyGraph): string[] {
  const referenced = new Set(Object.values(graph).flat());
  return Object.keys(graph).filter((moduleName) => !referenced.has(moduleName));
}
