import { generateAppBlueprint } from "../app-factory/app.generator";
import { generateArchitectureLayers } from "../ai-compiler/architecture.generator";

export function runFactoryOrchestrator(appName: string) {
  const layers = generateArchitectureLayers(appName);

  return {
    blueprint: generateAppBlueprint(appName, layers),
    layers,
  };
}
