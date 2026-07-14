import type { Metadata } from "next";

export const metadata: Metadata = { title: "常见问题 | LFADJ", description: "移动照明灯塔产品、技术、OEM 和报价常见问题。" };

export default function ChineseFaqPage() {
  return <main className="bg-white px-6 py-20"><section className="mx-auto max-w-[1200px]"><h1 className="text-4xl font-bold text-black">常见问题</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">了解移动照明灯塔用途、柴油灯塔价格、OEM 服务和 LF6130 技术信息。</p><a href="/zh/contact" className="mt-10 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white">联系我们</a></section></main>;
}
