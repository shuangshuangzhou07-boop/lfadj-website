import type { Metadata } from "next";

export const metadata: Metadata = { title: "联系我们 | LFADJ", description: "联系 LFADJ 获取移动照明灯塔规格、价格和 OEM 支持。" };

export default function ChineseContactPage() {
  return <main className="bg-white px-6 py-20"><section className="mx-auto max-w-[1200px]"><h1 className="text-4xl font-bold text-black">联系我们</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">发送您的应用场景、数量、目标市场和 OEM 需求，LFADJ 将协助提供产品建议和报价支持。</p><a href="/zh/products" className="mt-10 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">产品中心</a></section></main>;
}