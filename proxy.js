import { withAuth } from "next-auth/middleware";

const middleware = withAuth();

export function proxy(req) {
  return middleware(req);
}

export const config = {
  matcher: ["/properties/add", "/profile", "/properties/saved", "/messages"],
};
