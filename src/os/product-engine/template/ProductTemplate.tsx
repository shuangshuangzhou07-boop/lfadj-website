import type { ProductData } from "../product.types";
import { ProductApplications } from "./ProductApplications";
import { ProductCTA } from "./ProductCTA";
import { ProductFeatures } from "./ProductFeatures";
import { ProductHero } from "./ProductHero";
import { ProductSpecs } from "./ProductSpecs";
import { ProductTrust } from "./ProductTrust";

export function ProductTemplate({ product }: { product: ProductData }) {
  return (
    <main className="bg-white">
      <ProductHero product={product} />
      <ProductSpecs product={product} />
      <ProductFeatures product={product} />
      <ProductApplications product={product} />
      <ProductTrust product={product} />
      <ProductCTA product={product} />
    </main>
  );
}
