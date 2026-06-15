export function generateArchitectureLayers(domain: string): string[] {
  return [
    `${domain} governance layer`,
    `${domain} workflow layer`,
    `${domain} data layer`,
    `${domain} output layer`,
  ];
}
