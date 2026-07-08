import { allProductSummaries } from "@/src/product-data";
import { existsSync } from "node:fs";
import path from "node:path";

export type ProductData = {
  slug: string;
  name: string;
  category: string;
  subtitle: string;
  heroImage?: string;
  galleryImages?: string[];
  engine?: string;
  power?: string;
  mastHeight?: string;
  lightingPower?: string;
  runtime?: string;
  protection?: string;
  applications: string[];
  keywords: string[];
  primaryCTA: string;
  secondaryCTA: string;
};

const applicationLinks: Record<string, string> = {
  Construction: "/applications/construction-site-lighting",
  Mining: "/applications/mining-site-lighting",
  Emergency: "/applications/emergency-rescue-lighting",
  Rental: "/applications/rental-fleet-lighting",
};

const blogLinks = [
  {
    label: "What Is a Mobile Light Tower?",
    href: "/en/blog/what-is-mobile-light-tower",
  },
  {
    label: "Diesel vs Solar Light Tower",
    href: "/en/blog/diesel-vs-solar-light-tower",
  },
  {
    label: "Portable Light Tower Buying Guide",
    href: "/en/blog/portable-light-tower-buying-guide",
  },
];

const fallbackValue = "To be confirmed";
const publicDirectory = path.join(process.cwd(), "public");

function publicFileExists(publicPath: string) {
  return existsSync(path.join(publicDirectory, publicPath.replace(/^\//, "")));
}

function productImagePath(slug: string, fileName: string) {
  const imagePath = `/images/products/${slug}/${fileName}`;
  return publicFileExists(imagePath) ? imagePath : "/images/products/placeholder.webp";
}

function productGalleryImages(slug: string) {
  return ["gallery-1.webp", "gallery-2.webp", "gallery-3.webp"].map((fileName) =>
    productImagePath(slug, fileName)
  );
}

function productCatalogPath(slug: string) {
  const catalogPath = `/catalogs/${slug}.pdf`;
  return publicFileExists(catalogPath) ? catalogPath : null;
}

export function generateProductMetadata(product: ProductData) {
  const primaryKeyword = product.keywords[0] ?? "Mobile Light Tower";
  const hasConfirmedDescription = product.subtitle !== fallbackValue;

  return {
    title: `${product.name} | Mobile Lighting Tower Manufacturer`,
    description: hasConfirmedDescription
      ? `${product.name} is a ${primaryKeyword} for construction, mining, emergency and rental industries with OEM capability from LFADJ.`.slice(
          0,
          158
        )
      : fallbackValue,
    keywords: product.keywords.length > 0 ? product.keywords.join(", ") : fallbackValue,
    alternates: {
      canonical: `https://lfadj.com/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | LFADJ`,
      description: hasConfirmedDescription
        ? `${product.name} industrial product page for mobile lighting tower buyers, OEM projects and global B2B supply.`
        : fallbackValue,
      url: `https://lfadj.com/products/${product.slug}`,
      type: "website",
    },
  };
}

export function getProductJsonLd(product: ProductData) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.subtitle,
      brand: {
        "@type": "Brand",
        name: "LFADJ",
      },
      manufacturer: "Zhejiang Longfa Lighting Equipment Co., Ltd",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://lfadj.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: "https://lfadj.com/products",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: product.name,
          item: `https://lfadj.com/products/${product.slug}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Zhejiang Longfa Lighting Equipment Co., Ltd",
      alternateName: "LFADJ",
      url: "https://lfadj.com",
    },
  ];
}

function productHighlights(product: ProductData) {
  return [
    ["Engine", product.engine],
    ["Power", product.power],
    ["Mast Height", product.mastHeight],
    ["Lighting System", product.lightingPower],
    ["Runtime", product.runtime],
    ["IP Rating", product.protection],
  ];
}

function relatedProducts(product: ProductData) {
  const categoryRelated = allProductSummaries.filter(
    (item) => item.category === product.category && item.slug !== product.slug
  );
  const lf6130 = allProductSummaries.find((item) => item.slug === "lf6130");
  const base = lf6130 && product.slug !== "lf6130" ? [lf6130] : [];

  return [...base, ...categoryRelated]
    .filter((item, index, list) => list.findIndex((entry) => entry.slug === item.slug) === index)
    .slice(0, 4);
}

export function LFProductTemplate({ product }: { product: ProductData }) {
  const primaryKeyword = product.keywords[0] ?? "Mobile Light Tower";
  const secondaryKeywords = product.keywords.slice(1, 4).join(", ");
  const highlights = productHighlights(product);
  const hasMissingSpecs = highlights.some(([, value]) => !value);
  const heroImage = productImagePath(product.slug, "hero.webp");
  const galleryImages = productGalleryImages(product.slug);
  const catalogPath = productCatalogPath(product.slug);
  const related = relatedProducts(product);
  const hasConfirmedOverview = product.subtitle !== fallbackValue;
  const hasConfirmedApplications = product.applications.some(
    (application) => application !== fallbackValue
  );

  return (
    <main className="bg-white">
      {getProductJsonLd(product).map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="px-6 py-12 lg:py-16">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
              {product.category} / {primaryKeyword}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              {product.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white"
              >
                {product.primaryCTA}
              </a>
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-900"
              >
                {product.secondaryCTA}
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-3">
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-2">
              <img
                src={heroImage}
                alt={`${product.name} ${primaryKeyword}`}
                className="h-full w-full scale-110 object-contain drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Technical Specifications
          </h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {[
              ["Engine", product.engine],
              ["Power", product.power],
              ["Mast Height", product.mastHeight],
              ["Lighting System", product.lightingPower],
              ["Runtime", product.runtime],
              ["IP Rating", product.protection],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-1 border-b border-gray-100 px-5 py-4 last:border-b-0 sm:grid-cols-[240px_1fr]"
              >
                <span className="font-semibold text-gray-900">{label}</span>
                <span className="text-gray-600">{value ?? fallbackValue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Product Highlights
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(([label, value]) => (
              <article
                key={label}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-black">{label}</h3>
                <p className="text-sm font-semibold leading-6 text-gray-800">
                  {value ?? fallbackValue}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Image Gallery
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="aspect-square overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-3">
                  <img
                    src={image}
                    alt={`${product.name} gallery image ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              ))}
            </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Applications
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {product.applications.length > 0 && hasConfirmedApplications ? product.applications.map((application) => (
              <a
                key={application}
                href={applicationLinks[application] ?? "/applications"}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-black">{application}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {application} projects can use {product.name} as an industrial
                  lighting solution for temporary, mobile and outdoor work.
                </p>
              </a>
            )) : (
              <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-black">To be confirmed</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  To be confirmed
                </p>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px] rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            SEO Product Overview
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-600">
            {hasConfirmedOverview
              ? `${product.name} is built as a ${primaryKeyword} for industrial buyers. The page naturally supports ${secondaryKeywords || primaryKeyword} keywords while keeping LFADJ positioned as a mobile lighting tower manufacturer.`
              : fallbackValue}
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            FAQ
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {[
              `What is ${product.name}?`,
              `What specifications are available for ${product.name}?`,
              `Which applications can use ${product.name}?`,
              "Do you support OEM / ODM?",
            ].map((question, index) => (
              <article
                key={question}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-black">{question}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {index === 1
                    ? hasMissingSpecs
                      ? fallbackValue
                      : "Confirmed product specifications are listed in the technical specifications section of this page."
                    : `${product.name} is supported through the LFADJ industrial product template system for mobile lighting tower buyers, OEM projects and global B2B inquiries.`}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Related Products
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <a
                key={item.slug}
                href={`/products/${item.slug}`}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-blue-500"
              >
                <h3 className="text-lg font-bold text-black">{item.name}</h3>
                <p className="mt-3 text-sm text-gray-600">{item.category}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px] rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Request Product Information
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white">
              Request Quote
            </a>
            <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-lg border border-blue-200 bg-blue-50 px-6 text-sm font-semibold text-blue-700">
              Contact Sales
            </a>
            {catalogPath ? (
              <a href={catalogPath} className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-900">
                Download Catalog
              </a>
            ) : (
              <span className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-gray-500">
                Catalog coming soon
              </span>
            )}
          </div>
          {!catalogPath ? (
            <p className="mt-4 text-sm font-semibold text-gray-600">
              Catalog coming soon
            </p>
          ) : null}
          <div className="mt-10 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold tracking-tight text-black">
              Automatic Internal Links
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "LF6130 Highest Priority", href: "/products/lf6130" },
                { label: "OEM Manufacturer", href: "/oem/light-tower-manufacturer" },
                { label: "Applications Overview", href: "/applications" },
                ...blogLinks,
              ].map((link) => (
                <a
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 hover:border-blue-500 hover:bg-white hover:text-blue-700"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
