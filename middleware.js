import { NextResponse } from 'next/server'
import { jwtDecode } from 'jwt-decode'

export function middleware(request) {
  // Check for a token in cookies
  const token = request.cookies.get('auth_token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/justice/login', request.url))
  }

  try {
    // Decode the JWT token
    const decodedToken = jwtDecode(token)

    // Check if the token has expired
    if (decodedToken.exp * 1000 < Date.now()) {
      // Token has expired
      alert("Session expired. Please login again")
      const response = NextResponse.redirect(new URL('/justice/login', request.url))
      
      // Remove the expired token from cookies
      response.cookies.delete('auth_token')

      return response
    }

    // Token is valid
    return NextResponse.next()
  } catch (error) {
    // If there's an error decoding the token, consider it invalid
    console.error('Error decoding token:', error)
    const response = NextResponse.redirect(new URL('/justice/login', request.url))
    response.cookies.delete('auth_token')
    return response
  }
}

export const config = {
  matcher: ['/justice/dashboard/:path*']
}