import type { Metadata } from "next";

export const metadata: Metadata = { title: "案例 | LFADJ", description: "移动照明灯塔在建筑、矿山、应急和租赁项目中的应用案例。" };

export default function ChineseCasesPage() {
  return <main className="bg-white px-6 py-20"><section className="mx-auto max-w-[1200px]"><h1 className="text-4xl font-bold text-black">案例</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">查看 LFADJ 移动照明灯塔在不同工业场景中的项目应用路径。</p><a href="/zh/products/lf6130" className="mt-10 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">查看产品</a></section></main>;
}