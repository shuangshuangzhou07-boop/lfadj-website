export const linkGraph = {
  "/": ["/products", "/applications", "/oem", "/case-studies", "/blog", "/contact"],
  "/products": ["/products/lf6130", "/applications", "/oem/light-tower-manufacturer", "/contact"],
  "/products/lf6130": ["/applications", "/blog", "/oem/light-tower-manufacturer", "/contact"],
  "/blog": ["/products", "/products/lf6130", "/oem/light-tower-manufacturer", "/contact"],
  "/oem/light-tower-manufacturer": ["/contact", "/products/lf6130", "/applications"],
};
