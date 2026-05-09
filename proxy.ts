import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const pathname = request.nextUrl.pathname;
  const hostname = request.nextUrl.hostname.replace(/^www\./, "");
  const isLocalhost = host.startsWith("localhost") || host.startsWith("127.0.0.1");
  const isProduction = process.env.NODE_ENV === "production";
  const isHttp =
    request.nextUrl.protocol === "http:" || forwardedProto === "http";
  const hasPort = Boolean(request.nextUrl.port);

  if (isProduction && !isLocalhost && (isHttp || hasPort || request.nextUrl.hostname.startsWith("www."))) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = hostname;
    url.port = "";

    return NextResponse.redirect(url, 308);
  }

  if (pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|_vercel).*)"],
};
