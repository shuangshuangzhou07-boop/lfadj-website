import Link from "next/link";

export type PlaceholderCopy = {
  title: string;
  description: string;
  parentLabel: string;
  parentHref: string;
  homeLabel: string;
  homeHref: string;
  backLabel: string;
  breadcrumbLabel?: string;
  hideParentBreadcrumb?: boolean;
  hideBackLink?: boolean;
};

export function RoutePlaceholder({ copy }: { copy: PlaceholderCopy }) {
  return (
    <main className="bg-white px-6 py-16 text-gray-950 sm:py-20">
      <div className="mx-auto max-w-[1100px]">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href={copy.homeHref} className="hover:text-blue-700">{copy.homeLabel}</Link></li>
            {!copy.hideParentBreadcrumb ? (
              <>
                <li aria-hidden="true">/</li>
                <li><Link href={copy.parentHref} className="hover:text-blue-700">{copy.parentLabel}</Link></li>
              </>
            ) : null}
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-gray-900">{copy.breadcrumbLabel ?? copy.title}</li>
          </ol>
        </nav>
        <section className="mt-10 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{copy.title}</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">{copy.description}</p>
          {!copy.hideBackLink ? (
            <Link href={copy.parentHref} className="mt-8 inline-flex rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-gray-900 hover:border-blue-500 hover:text-blue-700">{copy.backLabel}</Link>
          ) : null}
        </section>
        {/* TODO: Add page copy, images, case studies, specifications and conversion CTA. */}
      </div>
    </main>
  );
}
