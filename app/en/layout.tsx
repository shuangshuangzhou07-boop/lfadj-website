import type { Metadata } from "next";
import { LanguageProvider } from "@/src/i18n/LanguageContext";
import { LanguageSwitch } from "@/src/i18n/LanguageSwitch";
import { getDictionary } from "@/src/i18n/getDictionary";

const t = getDictionary("en");

export const metadata: Metadata = t.metadata.root;

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-black">
        <header className="sticky top-0 z-50 h-20 border-b border-gray-200 bg-white">
          <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6">
            <a href="/en" className="text-2xl font-bold tracking-tight text-black">
              {t.common.brand}
            </a>
            <div className="hidden items-center gap-8 lg:flex">
              <nav className="flex items-center gap-8 text-[13px] font-semibold text-gray-600">
                <a href="/en/products" className="transition-colors hover:text-black">
                  {t.nav.products}
                </a>
                <a href="/en/applications" className="transition-colors hover:text-black">
                  {t.nav.applications}
                </a>
                <a href="/en/oem" className="transition-colors hover:text-black">
                  {t.nav.oem}
                </a>
                <a href="/en/case-studies" className="transition-colors hover:text-black">
                  Case Studies
                </a>
                <a href="/en/blog" className="transition-colors hover:text-black">
                  Blog
                </a>
                <a href="/en/about" className="transition-colors hover:text-black">
                  {t.nav.about}
                </a>
                <a href="/en/contact" className="transition-colors hover:text-black">
                  {t.nav.contact}
                </a>
              </nav>
              <LanguageSwitch
                className="inline-flex h-10 w-24 items-center justify-center rounded-lg border border-gray-300 bg-white text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100"
              />
              <a
                href="/en/contact"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                {t.common.startChat}
              </a>
            </div>
            <div className="flex items-center gap-3 lg:hidden">
              <LanguageSwitch
                className="inline-flex h-9 w-24 items-center justify-center rounded-lg border border-gray-300 bg-white text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-100"
              />
              <span className="text-sm font-medium text-gray-600">
                {t.common.menu}
              </span>
            </div>
          </div>
        </header>
        {children}
      </div>
    </LanguageProvider>
  );
}
