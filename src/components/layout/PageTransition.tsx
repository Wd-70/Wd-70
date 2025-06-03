'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

// 메인 콘텐츠 전환 애니메이션
const contentVariants = {
  hidden: {
    y: 20,  // 아래에서 위로 이동
    opacity: 0,  // 투명도 0에서 시작
    filter: 'blur(2px)',  // 약간의 블러 효과
  },
  visible: {
    y: 0,  // 원래 위치로
    opacity: 1,  // 완전히 불투명해짐
    filter: 'blur(0)',  // 블러 제거
    transition: {
      duration: 0.4,  // 애니메이션 지속 시간
      ease: "easeInOut", // [0.16, 1, 0.3, 1],  // 부드러운 가속/감속
      opacity: {
        duration: 0.4,  // 페이드인은 조금 더 빠르게
      },
      y: {
        duration: 0,  // 이동 애니메이션 지속 시간
      },
      filter: {
        duration: 0.4,  // 블러 제거 애니메이션
      }
    }
  }
};

type PageTransitionProps = {
  children: React.ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    // 초기 로드 후 애니메이션 활성화
    const timer = setTimeout(() => {
      setIsInitial(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // 초기 로드 시에는 애니메이션 없이 바로 표시
  if (isInitial) return <>{children}</>;

  // children을 배열로 변환
  const childrenArray = React.Children.toArray(children);
  
  // 첫 번째 요소가 Header인지 확인
  const firstChild = childrenArray[0];
  const isFirstChildHeader = React.isValidElement(firstChild) && 
                           firstChild.type && 
                           firstChild.type.toString().includes('Header');
  
  // Header가 있으면 분리, 없으면 children 전체에 애니메이션 적용
  if (isFirstChildHeader) {
    const [header, ...rest] = childrenArray;
    return (
      <>
        {header}
        <motion.div
          key={pathname}
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          className="min-h-[calc(100vh-4rem)] w-full pt-4"  // 헤더 높이만큼 상단 여백 조정
        >
          {rest}
        </motion.div>
      </>
    );
  }


  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="visible"
      variants={contentVariants}
      className="min-h-[calc(100vh-4rem)] w-full pt-4"  // 헤더가 없는 경우에도 동일한 여백 적용
    >
      {children}
    </motion.div>
  );
}
