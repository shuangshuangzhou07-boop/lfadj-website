export type ArchitectureFinding = {
  area: string;
  status: "pass" | "warning" | "fail";
  note: string;
};

export function createArchitectureFinding(
  area: string,
  status: ArchitectureFinding["status"],
  note: string,
): ArchitectureFinding {
  return { area, status, note };
}
