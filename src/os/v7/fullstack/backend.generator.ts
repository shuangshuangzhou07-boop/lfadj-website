export type BackendEndpoint = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
};

export function generateBackendPlan(endpoints: BackendEndpoint[]): string[] {
  return endpoints.map((endpoint) => `${endpoint.method} ${endpoint.path}`);
}
