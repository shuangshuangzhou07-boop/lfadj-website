import {
  LFProductTemplate,
  generateProductMetadata,
} from "@/src/product-template/LFProductTemplate";
import { loadProductData } from "@/src/product-data/productLoader";
import { notFound } from "next/navigation";

export const dynamicParams = true;

type ProductRouteProps = {
  params: {
    slug: string;
  };
};

async function loadProductOrNotFound(slug: string) {
  const product = await loadProductData(slug);

  if (!product) {
    notFound();
  }

  return product;
}

export async function generateMetadata({ params }: ProductRouteProps) {
  const product = await loadProductOrNotFound(params.slug);

  return generateProductMetadata(product);
}

export default async function ProductFactoryPage({ params }: ProductRouteProps) {
  const product = await loadProductOrNotFound(params.slug);

  return <LFProductTemplate product={product} />;
}
