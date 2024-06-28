import { NextResponse } from 'next/server'

export function middleware(request) {
  // Check for a token in cookies
  const token = request.cookies.get('auth_token')?.value

  console.log('victony', token);

  if (!token) {
    return NextResponse.redirect(new URL('/justice/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/justice/dashboard/:path*']

}