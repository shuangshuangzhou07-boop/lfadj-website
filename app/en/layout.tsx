import type { Metadata } from "next";
import { LanguageProvider } from "@/src/i18n/LanguageContext";
import { getDictionary } from "@/src/i18n/getDictionary";
import { SiteNav } from "../site-nav";

const t = getDictionary("en");

export const metadata: Metadata = t.metadata.root;

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-black">
        <SiteNav />
        {children}
      </div>
    </LanguageProvider>
  );
}
