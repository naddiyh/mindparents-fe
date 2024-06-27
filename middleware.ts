import { NextResponse, NextRequest } from "next/server";
import { IUser } from "./interface/user";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const userCookies = cookies().get("user")?.value;
  const user = userCookies ? (JSON.parse(userCookies) as IUser) : null;

  if (request.nextUrl.pathname.startsWith("/login")) {
    if (user) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!user) {
      return NextResponse.redirect(new URL("/login/admin", request.url));
    }

    if (user.role !== "admin" && user.role !== "psikologi") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/setting")) {
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/tanyaahli")) {
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/chat")) {
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (request.nextUrl.pathname.startsWith("/bookmark")) {
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next(); // If no redirect conditions are met, allow next request
}
