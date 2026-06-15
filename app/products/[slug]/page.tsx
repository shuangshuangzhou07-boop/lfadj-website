import { getProduct } from "@/src/os/product-engine/product.loader";
import { ProductTemplate } from "@/src/os/product-engine/template/ProductTemplate";
import { generateSEO } from "@/src/os/seo-engine/seo.generator";

export const dynamicParams = true;

type ProductRouteProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: ProductRouteProps) {
  const product = getProduct(params.slug);

  if (!product) {
    return {
      title: "Product Not Found - LFADJ Lighting Solutions",
      description: "The requested LFADJ product page could not be found.",
    };
  }

  return generateSEO(product);
}

export default function OSProductBridgePage({ params }: ProductRouteProps) {
  const product = getProduct(params.slug);

  if (!product) {
    return (
      <main className="bg-white px-6 py-24">
        <div className="mx-auto max-w-[1200px] rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <h1 className="text-3xl font-bold text-black">
            Product Not Found - LFADJ Lighting Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
            The requested product is not available. Please contact LFADJ for
            mobile light tower specifications, OEM support and quotation help.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white"
          >
            Contact Us
          </a>
        </div>
      </main>
    );
  }

  return <ProductTemplate product={product} />;
}
