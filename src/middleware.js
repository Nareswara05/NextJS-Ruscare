import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token');
  const url = request.nextUrl.clone();

  const protectedRoutes = ['/profile', '/dashboard', '/mailbox'];

  if (!token && protectedRoutes.includes(url.pathname)) {
    url.pathname = '/auth/login';
    return NextResponse.redirect(url);
  }

  if (token && url.pathname === '/auth/login') {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/dashboard', '/mailbox', '/auth/login'],
};
