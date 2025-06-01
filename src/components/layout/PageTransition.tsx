'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function PageTransition() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // 페이지 전환 시작 시 로딩 상태 활성화
    setIsLoading(true);

    // 페이지 로드 완료 후 로딩 상태 비활성화
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);
    // 약간의 지연 후에도 로딩 상태를 해제 (안전장치)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 overflow-hidden">
      <div className="h-full bg-blue-500 animate-loading"></div>
    </div>
  );
}
