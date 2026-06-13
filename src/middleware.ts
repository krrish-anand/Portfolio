import { NextRequest, NextResponse } from "next/server";

// Simple rate limiting middleware
const rateLimit = new Map<string, number[]>();

export function middleware(request: NextRequest) {
  // Only rate limit API endpoints
  if (request.nextUrl.pathname.startsWith("/api")) {
    const ip = request.ip || "unknown";
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const maxRequests = 30; // 30 requests per minute

    if (!rateLimit.has(ip)) {
      rateLimit.set(ip, []);
    }

    const timestamps = rateLimit.get(ip)!;
    const recentRequests = timestamps.filter((t) => now - t < windowMs);

    if (recentRequests.length >= maxRequests) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    recentRequests.push(now);
    rateLimit.set(ip, recentRequests);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
