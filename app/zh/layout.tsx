import type { Metadata } from "next";
import { LanguageProvider } from "@/src/i18n/LanguageContext";
import { SiteNav } from "../site-nav";

export const metadata: Metadata = {
  title: "LFADJ 移动照明灯塔制造商",
  description: "LFADJ 提供移动照明灯塔、柴油照明灯塔、OEM/ODM 制造与工业照明解决方案。",
};

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-black">
        <SiteNav />
        {children}
      </div>
    </LanguageProvider>
  );
}
