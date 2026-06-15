import type { ProductData } from "../product.types";

export function ProductCTA({ product }: { product: ProductData }) {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-[1200px] rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-bold tracking-tight text-black">
          {product.cta.title}
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600">
          {product.cta.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white"
          >
            Get Quote
          </a>
          <a
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 px-6 text-sm font-semibold text-blue-700"
          >
            {product.cta.button}
          </a>
          <a
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-900"
          >
            Contact Us
          </a>
          <a
            href="/products"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-900"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
