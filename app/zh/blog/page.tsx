import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LFADJ 移动照明灯塔 SEO 博客集群",
  description:
    "LFADJ 移动照明灯塔、柴油照明灯塔、矿山照明与施工照明的中文博客入口，用于引导流量到应用页、产品页和询盘页。",
  alternates: {
    canonical: "https://lfadj.com/zh/blog",
  },
};

const links = [
  { label: "LF955 移动照明灯塔", href: "/products/lf955" },
  { label: "Light Towers", href: "/light-towers" },
  { label: "Mining Lighting", href: "/applications/mining-lighting" },
  { label: "Construction Lighting", href: "/applications/construction-lighting" },
  { label: "Emergency Lighting", href: "/applications/emergency-lighting" },
  { label: "Rental Lighting", href: "/applications/rental-lighting" },
  { label: "什么是 Mobile Light Tower", href: "/zh/blog/what-is-mobile-light-tower" },
  { label: "柴油 vs Solar Light Tower", href: "/zh/blog/diesel-vs-solar-light-tower" },
  { label: "施工照明选型指南", href: "/zh/blog/how-to-choose-light-tower-for-construction" },
  { label: "矿山现场照明方案", href: "/zh/blog/mining-site-lighting-solution-guide" },
];

export default function Page() {
  return (
    <main className="bg-white px-6 py-20">
      <section className="mx-auto max-w-[1200px]">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
          Blog Cluster
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-black">
          LFADJ 移动照明灯塔 SEO 博客集群
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600">
          这个博客集群覆盖信息型搜索意图，并将流量导向 LF955 产品页、应用页、分类页和询盘页，形成从内容到成交的闭环。
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-2xl border border-gray-200 bg-white p-5 text-sm font-bold text-gray-900 shadow-sm hover:border-blue-500 hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
