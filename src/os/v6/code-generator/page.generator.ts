export function generatePageComponent(name: string, title: string): string {
  return `export default function ${name}() { return <main><h1>${title}</h1></main>; }`;
}
