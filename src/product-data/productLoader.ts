import { getProductBySlug } from "@/src/data/products";
import { getRegisteredProduct } from ".";
import type { ProductData } from "@/src/product-template/LFProductTemplate";

const toBeConfirmed = "To be confirmed";

type WebsiteProduct = NonNullable<ReturnType<typeof getProductBySlug>>;

function adaptWebsiteProduct(product: WebsiteProduct): ProductData {
  return {
    slug: product.slug,
    name: product.productName,
    category: product.category,
    subtitle: product.hero.subtitle,
    heroImage: product.hero.image === toBeConfirmed ? undefined : product.hero.image,
    engine: product.coreSpecs.engine,
    power: `${product.technicalSpecs.find((spec) => spec.label === "Rated power")?.value ?? toBeConfirmed}, ${product.coreSpecs.voltage}, 50Hz / 60Hz`,
    mastHeight: `${product.coreSpecs.mastHeight} ${product.coreSpecs.mastType} Mast`,
    lightingPower: product.coreSpecs.lamp,
    runtime: product.coreSpecs.runtime,
    protection: product.coreSpecs.protection,
    applications: [...product.applications],
    keywords: [...product.seo.keywords],
    primaryCTA: "Request Quote",
    secondaryCTA: "Contact Sales",
  };
}

export async function loadProductData(slug: string) {
  const websiteProduct = getProductBySlug(slug);

  if (websiteProduct) {
    return adaptWebsiteProduct(websiteProduct);
  }

  return getRegisteredProduct(slug);
}
