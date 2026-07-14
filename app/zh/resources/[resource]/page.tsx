import { notFound } from "next/navigation";
import { RoutePlaceholder } from "@/components/RoutePlaceholder";
import { getFrameworkSlugs, getPlaceholderCopy, getPlaceholderMetadata } from "@/lib/site-framework";

export function generateStaticParams() { return getFrameworkSlugs("resources").map((resource) => ({ resource })); }
export function generateMetadata({ params }: { params: { resource: string } }) { return getPlaceholderMetadata("zh", "resources", params.resource); }
export default function Page({ params }: { params: { resource: string } }) {
  const copy = getPlaceholderCopy("zh", "resources", params.resource);
  if (!copy) notFound();
  return <RoutePlaceholder copy={copy} />;
}
