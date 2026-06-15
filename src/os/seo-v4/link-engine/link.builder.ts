import { linkGraph } from "./link.graph";

export type InternalLink = {
  label: string;
  href: string;
};

export function buildInternalLinks(path: keyof typeof linkGraph): InternalLink[] {
  return linkGraph[path].map((href) => ({
    label: href === "/" ? "Home" : href.split("/").filter(Boolean).join(" "),
    href,
  }));
}
