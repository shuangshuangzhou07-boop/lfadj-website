import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Light Tower Resources | LFADJ",
  description:
    "Explore mobile light tower guides, selection resources, application solutions, and technical information from LFADJ.",
};

const resourceCategories = [
  {
    title: "Knowledge Center",
    description: "Build a practical understanding of mobile light tower systems, operation, and ownership.",
    href: "/en/resources/knowledge-center",
    linkLabel: "Explore the Knowledge Center",
  },
  {
    title: "Selection Guides",
    description: "Compare the project factors that shape equipment and configuration decisions.",
    href: "/en/resources/selection-guides",
    linkLabel: "View Selection Guides",
  },
  {
    title: "Application Guides",
    description: "Review lighting considerations for different operating sites and use cases.",
    href: "/en/resources/application-guides",
    linkLabel: "View Application Guides",
  },
  {
    title: "Technical Documents",
    description: "Find the technical information available for specification review and project preparation.",
    href: "/en/resources/technical-documents",
    linkLabel: "Browse Technical Documents",
  },
];

const supportingResources = [
  {
    type: "Buyer Guide",
    title: "Light Tower Total Cost of Ownership",
    description: "Review the cost factors that matter beyond the initial purchase price.",
    href: "/en/resources/light-tower-total-cost-of-ownership",
  },
  {
    type: "Lighting Guide",
    title: "How to Choose Lumens and Beam Angle for a Mobile Light Tower",
    description: "Understand how output, distribution, mounting, and site geometry work together.",
    href: "/en/resources/how-to-choose-light-tower-lumens-beam-angle",
  },
  {
    type: "Guide Collection",
    title: "Mobile Light Tower Selection Guides",
    description: "Use project requirements to narrow down suitable equipment directions.",
    href: "/en/resources/selection-guides",
  },
  {
    type: "Guide Collection",
    title: "Mobile Light Tower Application Guides",
    description: "Find guidance organized around real operating environments and applications.",
    href: "/en/resources/application-guides",
  },
];

const relatedLinks = [
  { label: "Applications", href: "/en/applications" },
  { label: "Solutions", href: "/en/solutions" },
  { label: "LF955", href: "/en/products/lf955" },
  { label: "LF971", href: "/en/products/lf971" },
  { label: "Contact", href: "/en/contact" },
];

const textLinkClass =
  "inline-flex font-semibold text-brand-blue-700 underline decoration-brand-blue-200 underline-offset-4 transition hover:text-brand-blue-600 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2";

export default function EnglishResourcesPage() {
  return (
    <main className="min-w-0 overflow-x-hidden bg-surface-white text-text-primary">
      <section className="border-b border-border-soft bg-surface-soft px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue-700">Resources</p>
          <h1 className="mt-4 max-w-4xl text-[36px] font-bold leading-tight tracking-tight sm:text-[44px] lg:text-[52px]">
            Mobile Light Tower Resources
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-text-secondary sm:text-lg sm:leading-8">
            Find mobile light tower knowledge, practical selection guidance, application guides, and technical
            information for project preparation.
          </p>

          <div className="mt-10 border-t border-border-soft pt-9 sm:mt-12 sm:pt-10">
            <h2 className="text-[28px] font-bold leading-tight tracking-tight sm:text-[32px]">Browse Resources</h2>
            <div className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft sm:grid-cols-2 lg:grid-cols-4">
              {resourceCategories.map((category, index) => (
                <article key={category.href} className="group flex min-w-0 flex-col bg-surface-white p-6 lg:p-7">
                  <p className="text-xs font-bold tracking-[0.16em] text-brand-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-xl font-bold leading-snug">{category.title}</h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-text-secondary">{category.description}</p>
                  <Link href={category.href} className={`${textLinkClass} mt-5`}>
                    {category.linkLabel} <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue-700">Selected Reading</p>
          <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-tight sm:text-[38px]">Featured Resources</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)]">
            <article className="flex min-w-0 flex-col rounded-2xl bg-brand-navy-950 p-7 text-white sm:p-9 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue-100">Knowledge Center</p>
              <h3 className="mt-5 max-w-xl text-[28px] font-bold leading-tight tracking-tight sm:text-[34px]">
                What Is a Mobile Light Tower?
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                Start with the equipment structure, power options, operating principles, common applications, and the
                project information buyers should assess before comparing configurations.
              </p>
              <Link
                href="/en/resources/what-is-mobile-light-tower"
                className="mt-8 inline-flex w-fit font-semibold text-white underline decoration-brand-blue-300 underline-offset-4 transition hover:text-brand-blue-100 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy-950"
              >
                Read the guide <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            </article>

            <div className="divide-y divide-border-soft rounded-2xl border border-border-soft bg-surface-soft px-6 sm:px-7">
              {supportingResources.map((resource) => (
                <article key={resource.href} className="py-6 first:pt-7 last:pb-7">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-blue-700">{resource.type}</p>
                  <h3 className="mt-2 text-lg font-bold leading-snug">{resource.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{resource.description}</p>
                  <Link href={resource.href} className={`${textLinkClass} mt-3 text-sm`}>
                    Read resource <span aria-hidden="true" className="ml-1">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border-soft bg-surface-soft px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue-700">Project Reference</p>
              <h2 className="mt-3 text-[30px] font-bold leading-tight tracking-tight sm:text-[38px]">
                Technical Documents
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
                Review the technical information currently available for specification checks, equipment discussions,
                and project preparation.
              </p>
            </div>
            <Link
              href="/en/resources/technical-documents"
              className="inline-flex min-h-12 w-fit items-center justify-center rounded-lg border border-brand-blue-600 bg-surface-white px-6 py-3 text-sm font-bold text-brand-blue-700 transition hover:bg-brand-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2"
            >
              View Technical Documents
            </Link>
          </div>

          <nav aria-label="Related resources" className="mt-10 border-t border-border-soft pt-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              <span className="font-semibold text-text-secondary">Related:</span>
              {relatedLinks.map((link, index) => (
                <span key={link.href} className="inline-flex items-center gap-x-3">
                  {index > 0 && <span aria-hidden="true" className="text-slate-400">·</span>}
                  <Link href={link.href} className={textLinkClass}>{link.label}</Link>
                </span>
              ))}
            </div>
          </nav>
        </div>
      </section>
    </main>
  );
}
