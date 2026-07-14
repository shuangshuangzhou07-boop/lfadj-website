import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于 LFADJ | 移动照明灯塔制造商",
  description: "了解 LFADJ 移动照明灯塔制造、OEM/ODM 支持和工业照明应用能力。",
};

export default function ChineseAboutPage() {
  return (
    <main className="bg-white px-6 py-20">
      <section className="mx-auto max-w-[1200px]">
        <h1 className="text-4xl font-bold tracking-tight text-black">关于 LFADJ</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">LFADJ 专注移动照明灯塔、柴油照明灯塔和工业临时照明解决方案，服务建筑施工、矿山、市政、应急和租赁客户。</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/zh/products" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">产品中心</a>
          <a href="/zh/oem制造" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">OEM 制造</a>
          <a href="/zh/contact" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">联系我们</a>
        </div>
      </section>
    </main>
  );
}
