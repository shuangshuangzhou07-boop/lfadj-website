import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LF6130 液压移动照明灯塔 | LFADJ",
  description: "LF6130 柴油 LED 液压移动照明灯塔，适用于建筑、矿山、应急和租赁应用。",
};

export default function ChineseLF6130Page() {
  return (
    <main className="bg-white px-6 py-20">
      <section className="mx-auto max-w-[1200px]">
        <h1 className="text-4xl font-bold tracking-tight text-black">LF6130 液压移动照明灯塔</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">LF6130 采用柴油动力、LED 灯具和液压升降杆结构，适合户外工业场景的临时照明需求。</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/zh/应用场景" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">应用场景</a>
          <a href="/zh/oem制造" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">OEM 制造</a>
          <a href="/zh/联系我们" className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-bold text-black">联系我们</a>
        </div>
      </section>
    </main>
  );
}