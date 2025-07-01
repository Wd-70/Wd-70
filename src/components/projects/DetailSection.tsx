'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion, useTransform } from 'framer-motion';
import Image from 'next/image';

interface DetailSectionProps {
  title: string;
  description: string;
  image?: string;
  reverse?: boolean;
  children?: React.ReactNode;
  onImageClick?: () => void;
}

const DetailSection: React.FC<DetailSectionProps> = ({ 
  title, 
  description, 
  image, 
  reverse = false,
  onImageClick,
  children 
}) => {
  const { ref, scrollY } = useScrollAnimation();
  
  // 스크롤 위치에 따른 애니메이션 값
  const x = useTransform<number, number>(
    scrollY,
    [0, 1],
    [reverse ? 100 : -100, 0]
  );
  const opacity = useTransform<number, number>(
    scrollY,
    [0, 0.5, 1],
    [0, 0.8, 1]
  );
  const scale = useTransform<number, number>(
    scrollY,
    [0, 0.5, 1],
    [0.9, 1, 1]
  );

  return (
    <div 
      ref={ref}
      className={`min-h-screen flex items-center justify-center p-8 md:p-16 ${reverse ? 'bg-gray-50' : 'bg-white'}`}
    >
      <motion.div 
        className={`flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12 ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}
        style={{ opacity, scale }}
      >
        <motion.div 
          className="flex-1"
          style={{ x: reverse ? undefined : x }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">{description}</p>
          {children}
        </motion.div>
        
        {image && (
          <motion.div 
            className={`flex-1 relative ${reverse ? 'md:order-1' : 'md:order-2'}`}
            style={{ x: reverse ? x : undefined }}
          >
            <Image 
              src={image} 
              alt={title}
              width={800}
              height={600}
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg transition-transform hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              onClick={onImageClick}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default DetailSection;
