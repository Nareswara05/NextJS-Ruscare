import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token');
  const url = request.nextUrl.clone();

  if (!token && url.pathname === '/profile') {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile'],
};
