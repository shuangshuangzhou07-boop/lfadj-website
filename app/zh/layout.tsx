import type { Metadata } from "next";
import { LanguageProvider } from "@/src/i18n/LanguageContext";

export const metadata: Metadata = {
  title: "LFADJ 移动照明灯塔制造商",
  description: "LFADJ 提供移动照明灯塔、柴油照明灯塔、OEM/ODM 制造与工业照明解决方案。",
};

const nav = [
  { label: "解决方案", href: "/zh/解决方案" },
  { label: "应用行业", href: "/zh/应用场景" },
  { label: "产品中心", href: "/zh/products" },
  { label: "工程案例", href: "/zh/案例" },
  { label: "技术资料", href: "/zh/resources" },
  { label: "博客", href: "/zh/blog" },
  { label: "关于我们", href: "/zh/about" },
  { label: "联系我们", href: "/zh/联系我们" },
];

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-black">
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
          <div className="mx-auto flex min-h-20 max-w-[1280px] items-center justify-between gap-4 px-6">
            <a href="/zh" className="text-2xl font-bold tracking-tight text-black">LFADJ</a>
            <nav className="hidden items-center gap-4 text-[12px] font-semibold text-gray-600 xl:gap-5 lg:flex">
              {nav.map((item) => (
                <a key={item.href} href={item.href} className="transition-colors hover:text-black">{item.label}</a>
              ))}
            </nav>
            <a href="/zh/联系我们" className="hidden h-11 items-center justify-center whitespace-nowrap rounded-lg bg-blue-600 px-5 text-sm font-bold text-white sm:inline-flex">获取报价</a>
            <details className="relative lg:hidden">
              <summary className="flex h-10 cursor-pointer list-none items-center rounded-lg border border-gray-300 px-4 text-sm font-semibold text-gray-700">
                菜单
              </summary>
              <div className="absolute right-0 top-12 w-[260px] rounded-xl border border-gray-200 bg-white p-3 shadow-xl">
                <nav className="grid gap-1">
                  {nav.map((item) => (
                    <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-black">
                      {item.label}
                    </a>
                  ))}
                  <a href="/zh/联系我们" className="mt-2 rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-bold text-white hover:bg-blue-700">
                    获取报价
                  </a>
                </nav>
              </div>
            </details>
          </div>
        </header>
        {children}
      </div>
    </LanguageProvider>
  );
}
