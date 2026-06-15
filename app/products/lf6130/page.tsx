import { notFound } from "next/navigation";
import { getProduct } from "@/src/os/product-engine/product.loader";
import { ProductTemplate } from "@/src/os/product-engine/template/ProductTemplate";
import { generateSEO } from "@/src/os/seo-engine/seo.generator";

export function generateMetadata() {
  const product = getProduct("lf6130");
  return product ? generateSEO(product) : {};
}

export default function LF6130Page() {
  const product = getProduct("lf6130");

  if (!product) {
    notFound();
  }

  return (
    <ProductTemplate product={product} />
  );
}
