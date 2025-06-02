import type { Metadata, Viewport } from "next";

// 뷰포트 설정
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

// 메타데이터 설정
export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'), // 실제 도메인으로 변경
  title: "Wd-70 | 개발자 포트폴리오",
  description: "Wd-70의 개발 블로그 및 포트폴리오 사이트입니다. Flutter, Next.js, Python을 활용한 프로젝트를 소개합니다.",
  keywords: ["개발자 포트폴리오", "Wd-70", "Next.js", "Flutter", "Python", "웹 개발"],
  authors: [{ name: "Wd-70" }],
  creator: "Wd-70",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://wd-70.vercel.app",
    title: "Wd-70 | 개발자 포트폴리오",
    description: "Wd-70의 개발 블로그 및 포트폴리오 사이트입니다.",
    siteName: "Wd-70 Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wd-70 | 개발자 포트폴리오",
    description: "Wd-70의 개발 블로그 및 포트폴리오 사이트입니다.",
    creator: "@wd70",
  },
};
