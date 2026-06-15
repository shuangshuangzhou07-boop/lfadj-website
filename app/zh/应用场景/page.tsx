import type { Metadata } from "next";

export const metadata: Metadata = { title: "应用场景 | LFADJ", description: "移动照明灯塔应用场景：建筑施工、矿山、市政、应急救援和设备租赁。" };

export default function ChineseApplicationsPage() {
  return <main className="bg-white px-6 py-20"><section className="mx-auto max-w-[1200px]"><h1 className="text-4xl font-bold text-black">应用场景</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">LFADJ 移动照明灯塔适用于建筑施工、矿山作业、道路基础设施、应急救援和设备租赁项目。</p><a href="/zh/products" className="mt-10 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">查看产品</a></section></main>;
}