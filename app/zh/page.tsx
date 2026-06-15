import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "移动照明灯塔 | LFADJ",
  description: "LFADJ 移动照明灯塔中文入口，覆盖产品、应用、OEM、案例和联系咨询。",
};

export default function ChineseHomePage() {
  return (
    <main className="bg-white px-6 py-20">
      <section className="mx-auto max-w-[1200px]">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">LFADJ</p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-black sm:text-5xl">移动照明灯塔</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">LFADJ 为建筑施工、矿山作业、应急救援、市政工程和设备租赁行业提供移动照明灯塔产品与 OEM/ODM 制造支持。</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/zh/products" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">产品中心</a>
          <a href="/zh/应用场景" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">应用场景</a>
          <a href="/zh/联系我们" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">联系我们</a>
        </div>
      </section>
    </main>
  );
}