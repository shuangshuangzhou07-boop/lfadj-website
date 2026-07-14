import { notFound } from "next/navigation";
import { RoutePlaceholder } from "@/components/RoutePlaceholder";
import { getFrameworkSlugs, getPlaceholderCopy, getPlaceholderMetadata } from "@/lib/site-framework";

export function generateStaticParams() { return getFrameworkSlugs("manufacturing").map((section) => ({ section })); }
export function generateMetadata({ params }: { params: { section: string } }) { return getPlaceholderMetadata("en", "manufacturing", params.section); }
export default function Page({ params }: { params: { section: string } }) {
  const copy = getPlaceholderCopy("en", "manufacturing", params.section);
  if (!copy) notFound();
  return <RoutePlaceholder copy={copy} />;
}
