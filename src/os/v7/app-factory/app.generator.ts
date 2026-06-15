export type AppBlueprint = {
  name: string;
  modules: string[];
  routes: string[];
};

export function generateAppBlueprint(name: string, modules: string[] = []): AppBlueprint {
  return {
    name,
    modules,
    routes: modules.map((moduleName) => `/${moduleName.toLowerCase().replace(/\s+/g, "-")}`),
  };
}
