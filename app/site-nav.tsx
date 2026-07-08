const navItems = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/applications" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Technical Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

type SiteNavItem = {
  label: string;
  href: string;
};

export function SiteNav({
  items = navItems,
  quoteLabel = "Get a Quote",
  quoteHref = "/contact",
}: {
  items?: SiteNavItem[];
  quoteLabel?: string;
  quoteHref?: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex min-h-20 max-w-[1280px] items-center justify-between gap-4 px-6">
        <a href="/" className="text-2xl font-bold tracking-tight text-black">
          LFADJ
        </a>
        <nav className="hidden items-center gap-4 text-[12px] font-semibold text-gray-600 xl:gap-5 lg:flex">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-black">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={quoteHref}
          className="hidden h-11 items-center justify-center whitespace-nowrap rounded-lg bg-blue-600 px-5 text-sm font-bold text-white hover:bg-blue-700 sm:inline-flex"
        >
          {quoteLabel}
        </a>
        <details className="relative lg:hidden">
          <summary className="flex h-10 cursor-pointer list-none items-center rounded-lg border border-gray-300 px-4 text-sm font-semibold text-gray-700">
            Menu
          </summary>
          <div className="absolute right-0 top-12 w-[260px] rounded-xl border border-gray-200 bg-white p-3 shadow-xl">
            <nav className="grid gap-1">
              {items.map((item) => (
                <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-black">
                  {item.label}
                </a>
              ))}
              <a href={quoteHref} className="mt-2 rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-bold text-white hover:bg-blue-700">
                {quoteLabel}
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
