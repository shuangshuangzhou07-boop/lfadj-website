import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "产品中心 | LFADJ 移动照明灯塔",
  description: "LFADJ 产品中心：柴油照明灯塔、LED 移动照明灯塔、LF6130 和工业照明产品。",
};

export default function ChineseProductsPage() {
  return (
    <main className="bg-white px-6 py-20">
      <section className="mx-auto max-w-[1200px]">
        <h1 className="text-4xl font-bold tracking-tight text-black">产品中心</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">浏览 LFADJ 移动照明灯塔产品，适用于建筑施工、矿山作业、应急救援和设备租赁。</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/zh/products/lf6130" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">LF6130</a>
          <a href="/zh/应用场景" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">应用场景</a>
          <a href="/zh/联系我们" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">获取报价</a>
        </div>
      </section>
    </main>
  );
}