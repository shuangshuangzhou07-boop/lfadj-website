export function generateFrontendPage(title: string): string {
  return `export default function Page() {
  return <main><h1>${title}</h1></main>;
}
`;
}
