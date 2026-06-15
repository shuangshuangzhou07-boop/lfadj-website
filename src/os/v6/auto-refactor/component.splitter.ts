export type ComponentSplitSuggestion = {
  component: string;
  suggestedChildren: string[];
};

export function suggestComponentSplit(component: string, suggestedChildren: string[]): ComponentSplitSuggestion {
  return {
    component,
    suggestedChildren,
  };
}
