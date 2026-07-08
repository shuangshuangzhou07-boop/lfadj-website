import type { ProductData } from "../product.types";

const applicationLinks = [
  {
    match: "construction",
    title: "Construction",
    href: "/applications/construction",
    keywords: [
      "Road construction",
      "Tunnel lighting",
      "Infrastructure projects",
    ],
  },
  {
    match: "mining",
    title: "Mining",
    href: "/applications/mining",
    keywords: ["Open pit mining", "Night operations"],
  },
  {
    match: "emergency",
    title: "Emergency",
    href: "/applications/emergency",
    keywords: ["Flood control", "Fire rescue"],
  },
  {
    match: "rental",
    title: "Rental",
    href: "/applications/events-rental",
    keywords: ["Equipment rental fleets", "Temporary lighting projects"],
  },
];

function getApplicationLink(title: string) {
  const normalized = title.toLowerCase();
  return applicationLinks.find((link) => normalized.includes(link.match));
}

export function ProductApplications({ product }: { product: ProductData }) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-3xl font-bold tracking-tight text-black">
          Applications
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {product.applications.map((application) => (
            <a
              key={application.title}
              href={getApplicationLink(application.title)?.href ?? "/applications"}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-black">
                {getApplicationLink(application.title)?.title ?? application.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {application.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm font-medium text-gray-800">
                {getApplicationLink(application.title)?.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
