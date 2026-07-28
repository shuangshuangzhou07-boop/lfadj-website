import Link from "next/link";
import { SiteNav } from "../site-nav";

type LangLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

export default function LangLayout({ children, params }: LangLayoutProps) {
  const lang = params.lang === "zh" ? "zh" : "en";
  const zh = lang === "zh";
  const footerLinks = [
    { label: zh ? "产品中心" : "Products", href: `/${lang}/products` },
    { label: zh ? "应用场景" : "Applications", href: `/${lang}/applications` },
    { label: zh ? "解决方案" : "Solutions", href: `/${lang}/solutions` },
    { label: zh ? "联系我们" : "Contact", href: `/${lang}/contact` },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <SiteNav />
      <div className="flex-1">{children}</div>
      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10 text-slate-300">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href={`/${lang}`} className="text-xl font-bold tracking-tight text-white">
              LFADJ
            </Link>
            <p className="mt-2 text-sm text-slate-400">
              {zh ? "移动照明项目解决方案" : "Mobile lighting solutions for project applications"}
            </p>
          </div>
          <nav aria-label={zh ? "页脚导航" : "Footer navigation"}>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}
