export type ProductApplication = {
  title: string;
  description: string;
};

export type ProductFeature = {
  title: string;
  description: string;
};

export type ProductData = {
  slug: string;
  name: string;
  category: string;
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  specs: {
    engine: string;
    power: string;
    mast: string;
    lights: string;
    runtime: string;
  };
  features: ProductFeature[];
  applications: ProductApplication[];
  trust: {
    manufacturer: string;
    oem: string;
    supply: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  seo: {
    description: string;
    keywords: string[];
  };
  keywords: string[];
  image: {
    src: string;
    alt: string;
  };
};
