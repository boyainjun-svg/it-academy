import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Allow unauthenticated access to the admin login page
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // 2. Server-Side Gate: Guard all /admin routes
  if (pathname.startsWith("/admin")) {
    const adminToken = request.cookies.get("it_academy_admin_token")?.value;

    if (!adminToken || !adminToken.trim()) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 3. Security response headers (defense-in-depth)
  const response = NextResponse.next();
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  return response;
}

export const config = {
  matcher: [
    "/admin/:path*",
  ],
};
