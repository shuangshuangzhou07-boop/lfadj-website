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

  const legacyApplicationsPath = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  if (
    legacyApplicationsPath === "/zh/应用场景" ||
    legacyApplicationsPath.toLowerCase() === "/zh/%e5%ba%94%e7%94%a8%e5%9c%ba%e6%99%af"
  ) {
    const destination = request.nextUrl.clone();
    destination.pathname = "/zh/applications";
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
    "/en/:path*",
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
