import { analyzeCode } from "../code-intelligence/code.analyzer";
import { scanDebt } from "../tech-debt/debt.scanner";
import { createEvolutionStep } from "./system.evolver";

export function runEngineeringOrchestrator(source: string) {
  const analysis = analyzeCode(source);
  const debt = scanDebt(source);

  return {
    analysis,
    debt,
    nextStep: createEvolutionStep("Improve maintainability", "Review detected debt signals."),
  };
}
