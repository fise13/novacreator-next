import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { isLocalDevHost, isWwwHost, siteHosts } from "./lib/site-config";

const intlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const host = request.headers.get("host");

  if (isWwwHost(host) && !isLocalDevHost(host)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.protocol = "https:";
    redirectUrl.host = siteHosts.canonical;
    return NextResponse.redirect(redirectUrl, 301);
  }

  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  const response = intlMiddleware(request);
  const locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ru";
  response.headers.set("x-site-locale", locale);
  return response;
}

export const config = {
  matcher: ["/((?!_next|_vercel).*)"],
};
