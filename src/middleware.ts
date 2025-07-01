import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 프로젝트 메인 페이지 접근 시 기본 카테고리(mobile)로 리다이렉트
  if (request.nextUrl.pathname === '/projects') {
    return NextResponse.redirect(new URL('/projects/mobile', request.url));
  }
  
  return NextResponse.next();
}

// 미들웨어가 실행될 경로 설정
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
