import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Server-Side Gate: Guard all /admin routes except /admin/login
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const adminToken = request.cookies.get("it_academy_admin_token")?.value;

    if (!adminToken || !adminToken.trim()) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      const redirectRes = NextResponse.redirect(loginUrl);
      applySecurityHeaders(redirectRes, pathname);
      return redirectRes;
    }
  }

  // 2. Global defense-in-depth security response headers
  const response = NextResponse.next();
  applySecurityHeaders(response, pathname);
  return response;
}

function applySecurityHeaders(res: NextResponse, pathname: string) {
  // Prevent clickjacking: DENY for admin backoffice, SAMEORIGIN for user portal
  res.headers.set("X-Frame-Options", pathname.startsWith("/admin") ? "DENY" : "SAMEORIGIN");

  // Prevent MIME-sniffing
  res.headers.set("X-Content-Type-Options", "nosniff");

  // Modern referrer policy protecting student privacy
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Cross-site scripting legacy filter
  res.headers.set("X-XSS-Protection", "1; mode=block");

  // Restrict powerful browser hardware features not used by the platform
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  // Enforce HTTPS
  res.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
