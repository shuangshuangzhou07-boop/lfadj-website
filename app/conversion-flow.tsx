const conversionLinks = [
  { label: "Get Quote", href: "/en/contact" },
  { label: "Send Inquiry", href: "/en/contact" },
  { label: "Contact Us", href: "/en/contact" },
];

export function ConversionFlow() {
  return (
    <section className="border-t border-gray-100 bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
          Conversion Flow
        </p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-black sm:text-3xl">
          Get Quote, Send Inquiry, or Contact LFADJ
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {conversionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-black hover:border-blue-500"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
