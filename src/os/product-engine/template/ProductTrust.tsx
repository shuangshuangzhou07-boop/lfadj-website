import type { ProductData } from "../product.types";

export function ProductTrust({ product }: { product: ProductData }) {
  const trustItems = [
    {
      icon: "🏭",
      title: "Manufacturing Capability",
      description:
        "OEM / ODM Available. 15+ Years Manufacturing Experience. ISO9001 / ISO14001 / ISO45001 Certified.",
    },
    {
      icon: "⚙️",
      title: "Engineering Strength",
      description:
        "Kubota / Yanmar / Perkins Engine Options. 9m Hydraulic Mast System. 4×400W LED High Efficiency System.",
    },
    {
      icon: "🌍",
      title: "Global Supply",
      description:
        "Middle East / Africa / Southeast Asia Export. FOB / CIF Support.",
    },
  ];

  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-3xl font-bold tracking-tight text-black">
          Manufacturer Trust
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {trustItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                {item.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-black">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
