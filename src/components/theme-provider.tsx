"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // 초기 로드 시 FOUC 방지
  React.useEffect(() => {
    const root = document.documentElement;
    
    // 초기 로드 시 테마 클래스 추가
    const theme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    root.classList.add(theme);
    root.classList.add('theme-loaded');
    
    // 클린업 함수
    return () => {
      root.classList.remove(theme);
      root.classList.remove('theme-loaded');
    };
  }, []);

  return (
    <NextThemesProvider 
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
