import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token');
  const url = request.nextUrl.clone();

  const protectedRoutes = [
    /^\/profile\/.*$/,
    /^\/dashboard\/.*$/,
    /^\/mailbox\/.*$/,
    /^\/auth\/login\/.*$/,
    '/dashboard',
    '/profile',
    '/mailbox',
  ];

  const isProtectedRoute = protectedRoutes.some((pattern) => {
    if (typeof pattern === 'string') {
      return url.pathname.startsWith(pattern);
    }
    return pattern.test(url.pathname);
  });

  if (!token && isProtectedRoute) {
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
  matcher: ['/profile/:path*', '/dashboard/:path*', '/mailbox/:path*', '/auth/login/:path*', '/dashboard', '/profile', '/mailbox'],
};
