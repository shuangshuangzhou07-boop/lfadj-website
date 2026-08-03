import type { ProductData } from "../product.types";

const trustBadges = [
  "ISO9001",
  "ISO14001",
  "ISO45001",
  "OEM / ODM Available",
  "Factory Direct Manufacturer",
];

export function ProductHero({ product }: { product: ProductData }) {
  return (
    <section className="px-6 py-10 lg:py-14">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
            {product.category}
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
            {product.hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            {product.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/en/contact"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white"
            >
              {product.hero.primaryCta}
            </a>
            <a
              href="/en/contact"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-900"
            >
              {product.hero.secondaryCta}
            </a>
            <a
              href="/en/contact"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 px-6 text-sm font-semibold text-blue-700"
            >
              Send Inquiry
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-3">
          <div className="aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-white p-2">
            <img
              src={product.image.src}
              alt={product.image.alt}
              className="h-full w-full scale-110 object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-[1200px] flex-wrap gap-3">
        {trustBadges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-700 shadow-sm"
          >
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
}
