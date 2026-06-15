import type { Metadata } from "next";
import { LanguageProvider } from "@/src/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "LFADJ 移动照明灯塔制造商",
  description: "LFADJ 提供移动照明灯塔、柴油照明灯塔、OEM/ODM 制造与工业照明解决方案。",
};

const nav = [
  { label: "产品中心", href: "/zh/products" },
  { label: "应用场景", href: "/zh/应用场景" },
  { label: "OEM", href: "/zh/oem制造" },
  { label: "案例", href: "/zh/案例" },
  { label: "博客", href: "/zh/博客" },
  { label: "关于我们", href: "/zh/about" },
  { label: "联系我们", href: "/zh/联系我们" },
];

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-black">
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
          <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
            <a href="/zh" className="text-2xl font-bold tracking-tight text-black">LFADJ</a>
            <nav className="hidden items-center gap-6 text-[13px] font-semibold text-gray-600 lg:flex">
              {nav.map((item) => (
                <a key={item.href} href={item.href} className="transition-colors hover:text-black">{item.label}</a>
              ))}
            </nav>
            <a href="/zh/联系我们" className="inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-bold text-white">开始咨询</a>
          </div>
        </header>
        {children}
      </div>
    </LanguageProvider>
  );
}