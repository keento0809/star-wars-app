import { NextRequest, NextResponse } from "next/server";
import { generateCsp } from "./app/_lib/csp";

export function middleware(request: NextRequest) {
  const { nonce, contentSecurityPolicyHeaderValue } = generateCsp();

  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-nonce", nonce);

  // Add unsafe-eval in development mode
  const cspValue =
    process.env.NODE_ENV === "development"
      ? contentSecurityPolicyHeaderValue
          .replace("script-src", "script-src 'unsafe-eval'")
          .replace("style-src", "style-src 'self' 'unsafe-inline'")
      : contentSecurityPolicyHeaderValue;

  requestHeaders.set("Content-Security-Policy", cspValue);

  const response = NextResponse.next({
    headers: requestHeaders,
  });
  response.headers.set("Content-Security-Policy", cspValue);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
