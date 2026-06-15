import type { ProductData } from "../product.types";

export function ProductSpecs({ product }: { product: ProductData }) {
  const specs = [
    ["Engine", product.specs.engine],
    ["Power", product.specs.power],
    ["Mast", product.specs.mast],
    ["Lighting", product.specs.lights],
    ["Runtime", product.specs.runtime],
  ];

  return (
    <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-3xl font-bold tracking-tight text-black">
          Technical Specifications
        </h2>
        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {specs.map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-1 border-b border-gray-100 px-5 py-4 last:border-b-0 sm:grid-cols-[240px_1fr]"
            >
              <span className="font-semibold text-gray-900">{label}</span>
              <span className="text-gray-600">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
