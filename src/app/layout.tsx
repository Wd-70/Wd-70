"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { Inter, Fira_Code } from "next/font/google";
import { Toaster } from 'sonner';
import "./globals.css";

// 폰트 설정
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // 초기 로드 시 한 번만 실행
  useEffect(() => {
    // HTML에 loaded 클래스 추가하여 FOUC 방지
    document.documentElement.classList.add('loaded');
    
    // 초기 로드 시 스크롤 위치 초기화
    window.scrollTo(0, 0);
    
    return () => {
      document.documentElement.classList.remove('loaded');
    };
  }, []);
  
  // 경로 변경 시 스크롤 위치 초기화
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <title>Wd-70 | 개발자 포트폴리오</title>
        <meta name="description" content="Wd-70의 개발 블로그 및 포트폴리오 사이트입니다. Flutter, Next.js, Python을 활용한 프로젝트를 소개합니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="keywords" content="개발자 포트폴리오, Wd-70, Next.js, Flutter, Python, 웹 개발" />
        <meta name="author" content="Wd-70" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wd-70.vercel.app/" />
        <meta property="og:title" content="Wd-70 | 개발자 포트폴리오" />
        <meta property="og:description" content="Wd-70의 개발 블로그 및 포트폴리오 사이트입니다." />
        <meta property="og:image" content="/images/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://wd-70.vercel.app/" />
        <meta property="twitter:title" content="Wd-70 | 개발자 포트폴리오" />
        <meta property="twitter:description" content="Wd-70의 개발 블로그 및 포트폴리오 사이트입니다." />
        <meta property="twitter:image" content="/images/og-image.jpg" />
      </head>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased transition-colors duration-300`}>
        {/* FOUC 방지를 위한 초기 테마 설정 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // 초기 테마 설정
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
                
                // FOUC 방지를 위한 클래스 추가
                document.documentElement.classList.add('theme-loaded');
              })();
            `,
          }}
        />
        <ThemeProvider>
          <PageTransition />
          <Header />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              initial="initial"
              animate="animate"
              variants={{
                initial: { opacity: 0, y: 10 },
                animate: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.3, 
                    ease: "easeOut" 
                  } 
                }
              }}
              className="min-h-screen w-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
          <Footer />
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
