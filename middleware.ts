import { NextResponse, type NextRequest } from "next/server";

const productionOnlyInternalPaths = [
  "/admin/pricing",
  "/pdf-catalog-generator",
  "/quote/result",
  "/select",
  "/translate",
  "/seo-dashboard",
  "/seo/backlink-strategy",
] as const;

const permanentRedirectMap: Readonly<Record<string, string>> = {
  "/": "/en",
  "/about": "/en/about",
  "/about/manufacturing": "/en/about/manufacturing",
  "/applications": "/en/applications",
  "/applications/construction-lighting": "/en/applications/construction-lighting",
  "/applications/emergency-lighting": "/en/applications/emergency-lighting",
  "/applications/mining-lighting": "/en/applications/mining-lighting",
  "/applications/rental-lighting": "/en/applications/rental-lighting",
  "/case-studies": "/en/case-studies",
  "/contact": "/en/contact",
  "/faq": "/en/faq",
  "/oem": "/en/oem",
  "/products": "/en/products",
  "/products/lf6130": "/en/products/lf6130",
  "/products/lf955": "/en/products/lf955",
  "/resources": "/en/resources",
  "/solutions": "/en/solutions",
  "/en/solutions/construction-lighting": "/en/applications/construction-lighting",
  "/en/solutions/emergency-lighting": "/en/applications/emergency-lighting",
  "/en/solutions/mining-lighting": "/en/applications/mining-lighting",
  "/en/solutions/oil-gas-lighting": "/en/applications/oil-gas-lighting",
  "/en/solutions/rental-fleet-solutions": "/en/applications/rental-lighting",
  "/zh/solutions/construction-lighting": "/zh/applications/construction-lighting",
  "/zh/solutions/emergency-lighting": "/zh/applications/emergency-lighting",
  "/zh/solutions/mining-lighting": "/zh/applications/mining-lighting",
  "/zh/solutions/oil-gas-lighting": "/zh/applications/oil-gas-lighting",
  "/zh/solutions/rental-fleet-solutions": "/zh/applications/rental-lighting",
  "/en/contact/request-a-quote": "/en/contact",
  "/zh/contact/request-a-quote": "/zh/contact",
  "/zh/联系我们": "/zh/contact",
  "/zh/%e8%81%94%e7%b3%bb%e6%88%91%e4%bb%ac": "/zh/contact",
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    process.env.NODE_ENV === "production" &&
    productionOnlyInternalPaths.some(
      (internalPath) =>
        pathname === internalPath || pathname.startsWith(`${internalPath}/`),
    )
  ) {
    return new NextResponse(null, { status: 404 });
  }

  const legacyEnglishPathname =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  const englishDestinationPathname =
    permanentRedirectMap[legacyEnglishPathname] ??
    permanentRedirectMap[legacyEnglishPathname.toLowerCase()];

  if (englishDestinationPathname) {
    const destination = new URL(request.url);
    destination.pathname = englishDestinationPathname;
    return NextResponse.redirect(destination, 301);
  }

  const legacyApplicationsPath = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  if (
    legacyApplicationsPath === "/zh/应用场景" ||
    legacyApplicationsPath.toLowerCase() === "/zh/%e5%ba%94%e7%94%a8%e5%9c%ba%e6%99%af"
  ) {
    const destination = new URL(request.url);
    destination.pathname = "/zh/applications";
    return NextResponse.redirect(destination, 308);
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    const destination = new URL(request.url);
    destination.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(destination, 308);
  }

  const requestHeaders = new Headers(request.headers);
  const locale = request.nextUrl.pathname.startsWith("/zh") ? "zh" : "en";

  requestHeaders.set("x-lfadj-locale", locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/",
    "/about/:path*",
    "/applications/:path*",
    "/case-studies/:path*",
    "/contact",
    "/en/:path*",
    "/faq/:path*",
    "/oem/:path*",
    "/products/:path*",
    "/resources/:path*",
    "/solutions/:path*",
    "/zh/:path*",
    "/admin/pricing/:path*",
    "/pdf-catalog-generator/:path*",
    "/quote/result/:path*",
    "/select/:path*",
    "/translate/:path*",
    "/seo-dashboard/:path*",
    "/seo/backlink-strategy/:path*",
  ],
};
