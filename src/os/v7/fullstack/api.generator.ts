export function generateApiRoute(responseBody = "{}"): string {
  return `export async function GET() {
  return Response.json(${responseBody});
}
`;
}
