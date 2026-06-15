export type RouteIssue = {
  route: string;
  issue: string;
};

export function analyzeRouteStatus(statusByRoute: Record<string, number>): RouteIssue[] {
  return Object.entries(statusByRoute)
    .filter(([, status]) => status >= 400)
    .map(([route, status]) => ({
      route,
      issue: `Route returned HTTP ${status}.`,
    }));
}
