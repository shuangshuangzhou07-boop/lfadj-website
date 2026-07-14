import { notFound } from "next/navigation";
import { RoutePlaceholder } from "@/components/RoutePlaceholder";
import { getFrameworkSlugs, getPlaceholderCopy, getPlaceholderMetadata } from "@/lib/site-framework";

export function generateStaticParams() { return getFrameworkSlugs("products").map((category) => ({ category })); }
export function generateMetadata({ params }: { params: { category: string } }) { return getPlaceholderMetadata("en", "products", params.category); }
export default function Page({ params }: { params: { category: string } }) {
  const copy = getPlaceholderCopy("en", "products", params.category);
  if (!copy) notFound();
  return <RoutePlaceholder copy={copy} />;
}
