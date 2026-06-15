const navItems = [
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "OEM", href: "/oem" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <a href="/" className="text-2xl font-bold tracking-tight text-black">
          LFADJ
        </a>
        <nav className="hidden items-center gap-6 text-[13px] font-semibold text-gray-600 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-black">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="/contact"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-bold text-white hover:bg-blue-700"
        >
          Start Chat
        </a>
      </div>
    </header>
  );
}
