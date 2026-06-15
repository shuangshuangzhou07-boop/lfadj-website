import type { ProductData } from "../product.types";

export function ProductTrust({ product }: { product: ProductData }) {
  const trustItems = [
    ["Manufacturer", product.trust.manufacturer],
    ["OEM / ODM Capability", product.trust.oem],
    ["Global Supply", product.trust.supply],
  ];

  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-3xl font-bold tracking-tight text-black">Manufacturer Trust</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {trustItems.map(([title, description]) => (
            <article key={title} className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-black">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
