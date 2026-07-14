import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "移动照明灯塔产品｜柴油、太阳能及混合动力灯塔 | LFADJ",
  description: "了解LFADJ移动照明灯塔产品，包括柴油、太阳能和混合动力照明灯塔，适用于建筑、矿山和工业项目。",
};

const mobileLightTowers = [
  {
    model: "LF955",
    title: "LF955 7.5 米液压柴油移动照明灯塔",
    href: "/zh/products/lf955",
  },
  // TODO: LF968 正式产品详情页完成后替换当前占位路由。
  {
    model: "LF968",
    title: "LF968 柴油移动照明灯塔",
    href: "/zh/products/lf968",
  },
  {
    model: "LF971",
    title: "LF971 太阳能移动照明灯塔",
    href: "/zh/products/lf971",
  },
];

// TODO: LF981 正式产品详情页完成后替换当前占位路由。
const monitoringTrailers = [
  {
    model: "LF981",
    title: "LF981 太阳能移动监控拖车",
    href: "/zh/products/lf981",
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
        查看产品 →
      </Link>
    </article>
  );
}

export default function ChineseProductsPage() {
  return (
    <main className="w-full bg-white">
      <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            移动照明灯塔产品
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700 sm:text-xl">
            为建筑施工、矿山、设备租赁和应急项目提供专业移动照明解决方案。
          </p>
        </div>
      </section>

      <section className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">移动照明灯塔</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mobileLightTowers.map((product) => <ProductCard key={product.model} product={product} />)}
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">移动监控拖车</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {monitoringTrailers.map((product) => <ProductCard key={product.model} product={product} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
