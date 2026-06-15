export function generateComponent(name: string, body = "return null;"): string {
  return `export function ${name}() { ${body} }`;
}
