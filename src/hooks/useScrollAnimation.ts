import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export const useScrollAnimation = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const { scrollY } = useScroll();

  // 요소의 위치와 크기 설정
  useEffect(() => {
    if (typeof window === 'undefined' || !ref.current) return;

    const setValues = () => {
      if (!ref.current) return;
      const { top, height } = ref.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      
      setElementTop(top + scrollY);
      setElementHeight(height);
    };

    // 초기 값 설정
    setValues();
    
    // 리사이즈 시 값 업데이트
    window.addEventListener('resize', setValues);
    return () => window.removeEventListener('resize', setValues);
  }, [ref]);

  // 스크롤 위치에 따른 진행도 (0~1)
  const progress = useTransform<number, number>(
    scrollY,
    (y) => {
      if (typeof window === 'undefined' || elementTop === 0) return 0;
      const windowHeight = window.innerHeight;
      const start = elementTop - windowHeight * 0.8;
      const end = elementTop + elementHeight * 0.2;
      const progress = (y - start) / (end - start);
      return Math.max(0, Math.min(1, progress));
    }
  );

  // 요소가 뷰포트에 보이는지 여부
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
      
      if (isVisible !== isInView) {
        setIsInView(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInView, elementTop, elementHeight]);

  return { ref, scrollY: progress, isInView };
};
