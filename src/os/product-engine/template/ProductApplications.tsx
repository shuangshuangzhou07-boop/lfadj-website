import type { ProductData } from "../product.types";

export function ProductApplications({ product }: { product: ProductData }) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-3xl font-bold tracking-tight text-black">
          Applications
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {product.applications.map((application) => (
            <article
              key={application.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-black">{application.title}</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {application.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
