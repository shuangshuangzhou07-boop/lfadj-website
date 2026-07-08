import type { Metadata } from "next";
import { LanguageProvider } from "@/src/i18n/LanguageContext";
import { LanguageSwitch } from "@/src/i18n/LanguageSwitch";
import { getDictionary } from "@/src/i18n/getDictionary";

const t = getDictionary("en");

export const metadata: Metadata = t.metadata.root;

const nav = [
  { label: "Solutions", href: "/en/solutions" },
  { label: "Industries", href: "/en/applications" },
  { label: "Products", href: "/en/products" },
  { label: "Case Studies", href: "/en/case-studies" },
  { label: "Technical Resources", href: "/en/resources" },
  { label: "Blog", href: "/en/blog" },
  { label: "About Us", href: "/en/about" },
  { label: "Contact", href: "/en/contact" },
];

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-black">
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
          <div className="mx-auto flex min-h-20 max-w-[1280px] items-center justify-between gap-4 px-6">
            <a href="/en" className="text-2xl font-bold tracking-tight text-black">
              {t.common.brand}
            </a>
            <div className="hidden items-center gap-4 lg:flex">
              <nav className="flex items-center gap-4 text-[12px] font-semibold text-gray-600 xl:gap-5">
                {nav.map((item) => (
                  <a key={item.href} href={item.href} className="transition-colors hover:text-black">
                    {item.label}
                  </a>
                ))}
              </nav>
              <LanguageSwitch
                className="inline-flex h-10 w-24 items-center justify-center rounded-lg border border-gray-300 bg-white text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100"
              />
              <a
                href="/en/contact"
                className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Get a Quote
              </a>
            </div>
            <div className="flex items-center gap-3 lg:hidden">
              <LanguageSwitch
                className="inline-flex h-9 w-24 items-center justify-center rounded-lg border border-gray-300 bg-white text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-100"
              />
              <details className="relative">
                <summary className="flex h-10 cursor-pointer list-none items-center rounded-lg border border-gray-300 px-4 text-sm font-semibold text-gray-700">
                  Menu
                </summary>
                <div className="absolute right-0 top-12 w-[260px] rounded-xl border border-gray-200 bg-white p-3 shadow-xl">
                  <nav className="grid gap-1">
                    {nav.map((item) => (
                      <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-black">
                        {item.label}
                      </a>
                    ))}
                    <a href="/en/contact" className="mt-2 rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-bold text-white hover:bg-blue-700">
                      Get a Quote
                    </a>
                  </nav>
                </div>
              </details>
            </div>
          </div>
        </header>
        {children}
      </div>
    </LanguageProvider>
  );
}
