'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

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
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <motion.div
            className="h-full bg-blue-600 w-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
