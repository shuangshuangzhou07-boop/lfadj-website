export type TemplateRecord = {
  id: string;
  category: "product" | "seo" | "business";
  path: string;
};

export function findTemplate(templates: TemplateRecord[], id: string): TemplateRecord | undefined {
  return templates.find((template) => template.id === id);
}
