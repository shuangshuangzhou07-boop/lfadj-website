import type { Metadata } from "next";
import { generateBlogTopics } from "@/src/seo/autoContentEngine";
import { autoLinkPages, strengthenAuthorityGraph } from "@/src/seo/internalLinkOptimizer";
import { detectMissingKeywords, expandKeywordCluster } from "@/src/seo/keywordClusterEngine";
import { runDailySEOCycle } from "@/src/seo/seoAutonomousLoop";
import { runSEOHealthCheck } from "@/src/seo/seoHealthChecker";
import { SiteNav } from "../site-nav";

export const metadata: Metadata = {
  title: "LFADJ Autonomous SEO Growth Dashboard",
  description:
    "Autonomous SEO growth dashboard for content expansion, keyword coverage, LF6130 authority and internal link graph strength.",
  alternates: {
    canonical: "https://lfadj.com/seo-dashboard",
  },
};

export default function SEODashboardPage() {
  const topics = generateBlogTopics("Mobile Light Tower");
  const clusters = expandKeywordCluster("Mobile Light Tower");
  const missingKeywords = detectMissingKeywords();
  const linkReport = autoLinkPages();
  const authorityGraph = strengthenAuthorityGraph();
  const cycleReport = runDailySEOCycle();
  const health = runSEOHealthCheck();
  const keywordCount = clusters.reduce(
    (total, cluster) => total + cluster.keywords.length,
    0
  );
  const linkGraphStrength = Math.min(
    100,
    linkReport.rulesApplied.length * 18 + authorityGraph.length * 14
  );
  const lf6130Authority =
    authorityGraph.find((target) => target.href === "/products/lf6130")?.weight ??
    0;

  const metrics = [
    { label: "Total Pages Generated", value: cycleReport.pagesAdded },
    { label: "Total Keywords Covered", value: keywordCount },
    { label: "Internal Link Graph Strength", value: `${linkGraphStrength}/100` },
    { label: "LF6130 Authority Score", value: `${lf6130Authority}/100` },
    { label: "SEO Health Score", value: `${health.score}/100` },
    { label: "Growth Rate Per Week", value: "+21 draft topics" },
  ];

  return (
    <>
      <SiteNav />
      <main className="bg-white">
        <section className="px-6 py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
              V6 Autonomous Growth Engine
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              LFADJ Autonomous SEO Growth Dashboard
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
              This dashboard summarizes the autonomous SEO growth system for the
              industrial equipment website. It tracks content expansion,
              keyword clusters, internal link graph strength, LF6130 authority
              and SEO health signals for continuous ranking improvement.
            </p>
          </div>
        </section>

        <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
          <div className="mx-auto grid max-w-[1200px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-gray-500">
                  {metric.label}
                </p>
                <p className="mt-3 text-3xl font-bold text-black">
                  {metric.value}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                Next 3 Draft Blog Topics
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
                {cycleReport.draftBlogs.map((draft) => (
                  <li key={draft.slug}>
                    <span className="font-bold text-gray-900">{draft.topic}</span>
                    <br />
                    <span>{draft.slug}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                Keyword Clusters
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
                {clusters.map((cluster) => (
                  <li key={cluster.name}>
                    <a href={cluster.targetPage} className="font-bold text-blue-700">
                      {cluster.name}
                    </a>
                    <span> - {cluster.keywords.length} keywords</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                Missing Keyword Opportunities
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
                {missingKeywords.slice(0, 6).map((item) => (
                  <li key={item.keyword}>
                    <span className="font-bold text-gray-900">{item.keyword}</span>
                    <br />
                    <span>{item.suggestedPageType}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight text-black">
                Authority Graph Priority
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
                {authorityGraph.map((target) => (
                  <li key={target.href}>
                    <a href={target.href} className="font-bold text-blue-700">
                      {target.href}
                    </a>
                    <span> - weight {target.weight}</span>
                    <br />
                    <span>{target.reason}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-[1200px] rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-black">
              Daily SEO Cycle Output
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-gray-500">Keywords Expanded</p>
                <p className="mt-2 text-2xl font-bold text-black">
                  {cycleReport.keywordsExpanded}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">Internal Links Added</p>
                <p className="mt-2 text-2xl font-bold text-black">
                  {cycleReport.internalLinksAdded}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500">Suggested Pages</p>
                <p className="mt-2 text-2xl font-bold text-black">
                  {cycleReport.suggestedPages.length}
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/products/lf6130" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">
                LF6130 Authority Hub
              </a>
              <a href="/seo/backlink-strategy" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">
                Backlink Strategy
              </a>
              <a href="/en/blog" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">
                Blog Cluster
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
