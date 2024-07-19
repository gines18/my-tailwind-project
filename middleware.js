import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

// Middleware to protect routes and redirect to login if not authenticated
export default function middleware(req) {
  return withAuth(req, {
    isReturnToCurrentPage: true
  });
}

// Configuration to specify which routes are protected
export const config = {
  matcher: ["/UserProfile"]
};