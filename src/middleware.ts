import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { parse } from 'cookie';

export function middleware(request: NextRequest) {
  const cookies = parse(request.headers.get('cookie') || '');
  const token = cookies['us_token_cookie'];

  if (!token) {
    console.log("No token found");
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/courses/:path*'],
};
