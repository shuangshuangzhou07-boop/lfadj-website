import type { Metadata } from "next";
import Link from "next/link";
import { SolutionsHubBrowse } from "@/components/solutions/SolutionsHubBrowse";
import { SolutionsHubRelated } from "@/components/solutions/SolutionsHubRelated";

export const metadata: Metadata = {
  title: "Mobile Light Tower Solutions and Selection Guides | LFADJ",
  description:
    "Explore LFADJ mobile light tower solutions and learn how to choose suitable equipment based on project needs, power systems, mast configurations and harsh operating environments.",
  alternates: {
    canonical: "https://lfadj.com/en/solutions",
    languages: {
      en: "/en/solutions",
      "zh-CN": "/zh/solutions",
    },
  },
};

export default function EnglishSolutionsPage() {
  return (
    <main className='max-w-7xl mx-auto'>
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <nav aria-label="Breadcrumb" className="mb-10 text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/en" className="hover:text-blue-700">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gray-900">Solutions</li>
            </ol>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
            Solutions
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            Mobile Light Tower Solutions
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
            Whether your project involves construction, mining, equipment rental or emergency response, LFADJ helps you choose a suitable mobile lighting solution based on lighting requirements, power systems, mast configurations and operating conditions.
          </p>
        </div>
      </section>
      <SolutionsHubBrowse lang="en" />
      <SolutionsHubRelated lang="en" />
    </main>
  );
}
