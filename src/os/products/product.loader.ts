import lf6130 from "./lf6130.json";
import type { OSProduct } from "./product.types";

const products: OSProduct[] = [lf6130];

export function loadOSProducts(): OSProduct[] {
  return products;
}

export function loadOSProduct(slug: string): OSProduct | undefined {
  return products.find((product) => product.slug === slug);
}
