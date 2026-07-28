import { notFound } from "next/navigation";
import { RoutePlaceholder } from "@/components/RoutePlaceholder";
import { SolutionPage } from "@/components/solutions/SolutionPage";
import {
  type FrameworkLocale,
  getFrameworkSlugs,
  getPlaceholderCopy,
  getPlaceholderMetadata,
  getSolutionPageData,
} from "@/lib/site-framework";

type PageProps = {
  params: {
    lang: string;
    solution: string;
  };
};

function isFrameworkLocale(value: string): value is FrameworkLocale {
  return value === "en" || value === "zh";
}

export function generateStaticParams() {
  return (["en", "zh"] as const).flatMap((lang) =>
    getFrameworkSlugs("solutions").map((solution) => ({ lang, solution })),
  );
}

export function generateMetadata({ params }: PageProps) {
  if (!isFrameworkLocale(params.lang)) return {};
  return getPlaceholderMetadata(params.lang, "solutions", params.solution);
}

export default function Page({ params }: PageProps) {
  if (!isFrameworkLocale(params.lang)) notFound();

  const solutionData = getSolutionPageData(params.lang, params.solution);
  if (solutionData) return <SolutionPage data={solutionData} />;

  const copy = getPlaceholderCopy(params.lang, "solutions", params.solution);
  if (!copy) notFound();
  return <RoutePlaceholder copy={copy} />;
}
