import type { ProductData } from "../product.types";

const relatedLinks = [
  {
    label: "Diesel Light Tower",
    href: "/products/diesel-light-tower",
  },
  {
    label: "LED Light Tower",
    href: "/products/led-light-tower",
  },
  {
    label: "Light Tower Manufacturer (OEM)",
    href: "/oem/light-tower-manufacturer",
  },
  {
    label: "Applications Overview",
    href: "/applications",
  },
];

export function ProductCTA({ product }: { product: ProductData }) {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-[1200px] rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-bold tracking-tight text-black">
          {product.cta.title}
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600">
          {product.cta.description}
        </p>
        <form action="/en/contact" method="get" className="mt-10">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="rfq-full-name"
                className="block text-sm font-semibold text-gray-900"
              >
                Full Name
              </label>
              <input
                id="rfq-full-name"
                name="fullName"
                type="text"
                className="mt-2 h-12 w-full rounded-lg border border-gray-300 px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="rfq-company-name"
                className="block text-sm font-semibold text-gray-900"
              >
                Company Name
              </label>
              <input
                id="rfq-company-name"
                name="companyName"
                type="text"
                className="mt-2 h-12 w-full rounded-lg border border-gray-300 px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="rfq-email"
                className="block text-sm font-semibold text-gray-900"
              >
                Email
              </label>
              <input
                id="rfq-email"
                name="email"
                type="email"
                className="mt-2 h-12 w-full rounded-lg border border-gray-300 px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="rfq-country"
                className="block text-sm font-semibold text-gray-900"
              >
                Country / Region
              </label>
              <input
                id="rfq-country"
                name="country"
                type="text"
                className="mt-2 h-12 w-full rounded-lg border border-gray-300 px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="rfq-product-model"
                className="block text-sm font-semibold text-gray-900"
              >
                Product Model
              </label>
              <input
                id="rfq-product-model"
                name="productModel"
                type="text"
                defaultValue="LF6130"
                className="mt-2 h-12 w-full rounded-lg border border-gray-300 px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="rfq-application"
                className="block text-sm font-semibold text-gray-900"
              >
                Application
              </label>
              <select
                id="rfq-application"
                name="application"
                className="mt-2 h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
                defaultValue="Construction"
              >
                <option value="Construction">Construction</option>
                <option value="Mining">Mining</option>
                <option value="Emergency">Emergency</option>
                <option value="Rental">Rental</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="rfq-quantity"
                className="block text-sm font-semibold text-gray-900"
              >
                Quantity
              </label>
              <input
                id="rfq-quantity"
                name="quantity"
                type="number"
                min="1"
                className="mt-2 h-12 w-full rounded-lg border border-gray-300 px-4 text-sm text-gray-900 outline-none focus:border-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="rfq-message"
                className="block text-sm font-semibold text-gray-900"
              >
                Message
              </label>
              <textarea
                id="rfq-message"
                name="message"
                rows={5}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white"
            >
              Request RFQ Quote
            </button>
            <a
              href="/en/contact"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 px-6 text-sm font-semibold text-blue-700"
            >
              Contact Sales Engineer
            </a>
            <a
              href="/en/contact"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-900"
            >
              Download Technical Catalog (PDF)
            </a>
          </div>
        </form>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold tracking-tight text-black">
            Related Links
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {relatedLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 transition-all duration-300 hover:border-blue-500 hover:bg-white hover:text-blue-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
