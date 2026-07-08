import {
  LFProductTemplate,
  generateProductMetadata,
} from "@/src/product-template/LFProductTemplate";
import { loadProductData } from "@/src/product-data/productLoader";

export const dynamicParams = true;

type ProductRouteProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: ProductRouteProps) {
  const product = await loadProductData(params.slug);

  if (!product) {
    return {
      title: "Product Not Found - LFADJ Lighting Solutions",
      description: "The requested LFADJ product page could not be found.",
    };
  }

  return generateProductMetadata(product);
}

export default async function ProductFactoryPage({ params }: ProductRouteProps) {
  const product = await loadProductData(params.slug);

  if (!product) {
    return (
      <main className="bg-white px-6 py-24">
        <div className="mx-auto max-w-[1200px] rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <h1 className="text-3xl font-bold text-black">
            Product Not Found
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Product Not Found - LFADJ Lighting Solutions. Please contact LFADJ
            for mobile light tower specifications, OEM support and quotation
            help.
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

  return <LFProductTemplate product={product} />;
}
