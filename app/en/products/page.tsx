import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Light Tower Products | Diesel, Solar & Hybrid Lighting Towers | LFADJ",
  description:
    "Explore LFADJ mobile light tower products including diesel, solar and hybrid lighting towers for construction, mining and industrial projects.",
  alternates: {
    canonical: "https://lfadj.com/en/products",
  },
  openGraph: {
    title: "Mobile Light Tower Products | Diesel, Solar & Hybrid Lighting Towers | LFADJ",
    description:
      "Explore LFADJ mobile light tower products including diesel, solar and hybrid lighting towers for construction, mining and industrial projects.",
    url: "https://lfadj.com/en/products",
    type: "website",
  },
};

const mobileLightTowers = [
  {
    model: "LF951",
    title: "LF951 Portable Light Tower",
    href: "/en/products/lf951",
  },
  {
    model: "LF955",
    title: "LF955 7.5m Hydraulic Diesel Mobile Light Tower",
    href: "/en/products/lf955",
  },
  // TODO: Replace the placeholder route with the completed LF968 product page when available.
  {
    model: "LF968",
    title: "LF968 Diesel Mobile Light Tower",
    href: "/en/products/lf968",
  },
  {
    model: "LF971",
    title: "LF971 Solar Mobile Light Tower",
    href: "/en/products/lf971",
  },
];

// TODO: Replace the placeholder route with the completed LF981 product page when available.
const monitoringTrailers = [
  {
    model: "LF981",
    title: "LF981 Solar Monitoring Trailer",
    href: "/en/products/lf981",
  },
];

function ProductCard({ product }: { product: (typeof mobileLightTowers)[number] }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-400 hover:shadow-md sm:p-8">
      <p className="text-sm font-bold tracking-[0.18em] text-blue-700">{product.model}</p>
      <h3 className="mt-4 text-xl font-bold leading-snug text-gray-950 sm:text-2xl">
        {product.title}
      </h3>
      <Link href={product.href} className="mt-8 self-start text-sm font-bold text-blue-700 underline-offset-4 hover:underline">
        View product →
      </Link>
    </article>
  );
}

export default function EnglishProductsPage() {
  return (
    <main className="w-full bg-white">
      <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Mobile Light Tower Products
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700 sm:text-xl">
            Professional mobile lighting solutions for construction, mining, rental and emergency applications.
          </p>
        </div>
      </section>

      <section className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Mobile Light Towers</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mobileLightTowers.map((product) => <ProductCard key={product.model} product={product} />)}
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Monitoring Trailers</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {monitoringTrailers.map((product) => <ProductCard key={product.model} product={product} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
