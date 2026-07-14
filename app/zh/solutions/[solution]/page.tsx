import { notFound } from "next/navigation";
import { RoutePlaceholder } from "@/components/RoutePlaceholder";
import { getFrameworkSlugs, getPlaceholderCopy, getPlaceholderMetadata } from "@/lib/site-framework";

export function generateStaticParams() { return getFrameworkSlugs("solutions").map((solution) => ({ solution })); }
export function generateMetadata({ params }: { params: { solution: string } }) { return getPlaceholderMetadata("zh", "solutions", params.solution); }
export default function Page({ params }: { params: { solution: string } }) {
  const copy = getPlaceholderCopy("zh", "solutions", params.solution);
  if (!copy) notFound();
  return <RoutePlaceholder copy={copy} />;
}
