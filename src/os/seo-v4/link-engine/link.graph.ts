export const linkGraph = {
  "/": ["/products", "/applications", "/oem", "/case-studies", "/blog", "/en/contact"],
  "/products": ["/products/lf6130", "/applications", "/oem/light-tower-manufacturer", "/en/contact"],
  "/products/lf6130": ["/applications", "/blog", "/oem/light-tower-manufacturer", "/en/contact"],
  "/blog": ["/products", "/products/lf6130", "/oem/light-tower-manufacturer", "/en/contact"],
  "/oem/light-tower-manufacturer": ["/en/contact", "/products/lf6130", "/applications"],
};
