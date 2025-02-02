import { NextResponse } from 'next/server'

export function middleware(request) {
  // Check if the request is for the old route
  if (request.nextUrl.pathname === '/add-place') {
    // Redirect to the new route
    return NextResponse.redirect(new URL('/add-climbing-place', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/add-place']
} 