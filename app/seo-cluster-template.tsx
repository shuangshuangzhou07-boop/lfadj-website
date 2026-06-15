import { SiteNav } from "./site-nav";
import { ConversionFlow } from "./conversion-flow";

type ClusterLink = {
  label: string;
  href: string;
};

type SeoClusterPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  links?: ClusterLink[];
};

export function SeoClusterPage({
  eyebrow,
  title,
  description,
  links = [],
}: SeoClusterPageProps) {
  return (
    <>
      <SiteNav />
      <main className="bg-white">
        <section className="px-6 py-20 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
              {eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              {description}
            </p>
            {links.length > 0 ? (
              <div className="mt-10 flex flex-wrap gap-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-black hover:border-blue-500"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </section>
        <ConversionFlow />
      </main>
    </>
  );
}
