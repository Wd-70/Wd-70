'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageGalleryProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

export const ImageGallery = ({ images, initialIndex = 0, onClose }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);


  // 모달이 열릴 때 현재 스크롤 위치 저장 및 body 고정
  useEffect(() => {
    // 현재 스크롤 위치 저장
    const savedScrollY = window.scrollY;
    setScrollOffset(savedScrollY);
    
    // body 스크롤 방지
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => setIsOpen(true), 10);
    
    return () => {
      // 스타일 초기화
      document.body.style.overflow = '';
      
      clearTimeout(timer);
    };
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setTimeout(onClose, 300); // 애니메이션 완료 후 닫기
  }, [onClose]);

  // 키보드 이벤트 핸들링
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious, handleClose]);

  // 스와이프 제스처
  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    trackMouse: true,
  });

  // 외부 클릭 시 닫기
  const handleBackdropClick = (e: React.MouseEvent) => {
    // 클릭된 요소가 이미지나 네비게이션 버튼이 아닌 경우에만 닫기
    const target = e.target as HTMLElement;
    const isImage = target.closest('img') || target.closest('button');
    const isThumbnail = target.closest('.thumbnail-container');
    
    if (!isImage && !isThumbnail) {
      handleClose();
    }
  };

  // 이미지 로드 실패 시 대체 함수
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = '/images/placeholder.png'; // 대체 이미지 경로
    target.onerror = null; // 무한 루프 방지
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-sm"
      style={{
        position: 'fixed',
        top: scrollOffset,
        left: 0,
        right: 0,
        bottom: scrollOffset - window.innerHeight,
        margin: 0,
        padding: 0,
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        transform: 'translate3d(0, 0, 0)',
        zIndex: 9999
      }}
      onClick={handleBackdropClick}
      {...handlers}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full flex flex-col"
          >
            {/* 상단 안전 영역 (상단바 대체용) */}
            <div 
              ref={headerRef}
              className="w-full bg-black/90 transition-all duration-300 ease-out"
              style={{
                height: '80px',
                minHeight: '60px',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                display: 'flex',
                alignItems: 'flex-end',
                paddingBottom: '10px'
              }}
            >
              <div className="w-full flex justify-end px-4">
                <button
                  onClick={handleClose}
                  className="text-white text-2xl p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="닫기"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* 메인 이미지 */}
            <div 
              className="absolute inset-0 flex items-center justify-center p-4 w-full" 
              style={{ 
                paddingTop: '80px',
                paddingBottom: '100px',
                boxSizing: 'border-box'
              }}
            >
              <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                <div className="relative w-full h-full max-h-full flex items-center justify-center">
                  {images[currentIndex] ? (
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Image
                        src={images[currentIndex]}
                        alt={`이미지 ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                        style={{
                          objectFit: 'contain'
                        }}
                        onError={handleImageError}
                        priority
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white">
                      이미지를 불러올 수 없습니다.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 썸네일 목록 */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-24 bg-black/50 overflow-x-auto overflow-y-hidden py-2 w-full thumbnail-container"
              style={{ zIndex: 101 }}
            >
              <div className="flex gap-2 px-4 h-full items-center justify-center">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative h-16 w-16 flex-shrink-0 rounded overflow-hidden transition-all ${
                      currentIndex === index ? 'ring-2 ring-white' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`썸네일 ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* 네비게이션 버튼 */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
              style={{
                left: 'max(1rem, env(safe-area-inset-left, 1rem))'
              }}
              aria-label="이전 이미지"
            >
              &larr;
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
              style={{
                right: 'max(1rem, env(safe-area-inset-right, 1rem))'
              }}
              aria-label="다음 이미지"
            >
              &rarr;
            </button>

            {/* 이미지 인덱스 표시 */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
