'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';

// Framer Motion을 동적으로 임포트
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false,
});

const AnimatePresence = dynamic(() => import('framer-motion').then((mod) => mod.AnimatePresence), {
  ssr: false,
});

export function PageTransition() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    // 경로가 변경되면 로딩 상태 활성화
    if (pathname !== prevPathname) {
      setIsLoading(true);
      setPrevPathname(pathname);
      
      // 1초 후에 로딩 상태 비활성화 (안전장치)
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [pathname, prevPathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <MotionDiv
          className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: 1,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
          exit={{ 
            scaleX: 1,
            opacity: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
          onAnimationComplete={() => setIsLoading(false)}
        >
          <MotionDiv
            className="h-full bg-blue-300"
            initial={{ width: '0%' }}
            animate={{
              width: '100%',
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
          />
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
