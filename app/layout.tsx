import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { LanguageProvider } from "@/src/i18n/LanguageContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LFADJ | Mobile Light Tower Manufacturer | OEM Supplier",
  description:
    "Professional mobile lighting tower manufacturer for construction, mining and emergency applications.",
  keywords: "mobile light tower, diesel light tower, LED tower, OEM manufacturer",
  alternates: {
    canonical: "https://lfadj.com",
  },
  openGraph: {
    title: "LFADJ | Mobile Light Tower Manufacturer | OEM Supplier",
    description:
      "Professional mobile lighting tower manufacturer for construction, mining and emergency applications.",
    url: "https://lfadj.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LFADJ | Mobile Light Tower Manufacturer | OEM Supplier",
    description:
      "Professional mobile lighting tower manufacturer for construction, mining and emergency applications.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const htmlLang = headers().get("x-lfadj-locale") === "zh" ? "zh-CN" : "en";

  return (
    <html lang={htmlLang} className="h-full antialiased">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
