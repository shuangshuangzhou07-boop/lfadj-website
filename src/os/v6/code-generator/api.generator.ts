export function generateRouteHandler(responseBody: string): string {
  return `export function GET() { return Response.json(${JSON.stringify(responseBody)}); }`;
}
