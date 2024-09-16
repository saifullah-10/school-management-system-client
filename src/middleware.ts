import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { parse } from 'cookie';

export function middleware(request: NextRequest) {
  const cookies = parse(request.headers.get('cookie') || '');
  const token = cookies['us_token_cookie'];

  if (!token) {
    // console.log("No token found");

    // Store the original URL user was trying to access
    const redirectUrl = new URL('/login', request.url);
    redirectUrl.searchParams.set('redirectTo', request.nextUrl.pathname + request.nextUrl.search);

    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/courses/:path*'],
};
