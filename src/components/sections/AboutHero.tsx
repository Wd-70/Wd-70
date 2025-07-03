'use client';

import { motion } from "framer-motion";
import { FiCode, FiZap, FiHeart } from "react-icons/fi";

export default function AboutHero() {
  return (
    <section className="h-[800px] flex items-center justify-center relative overflow-hidden">
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* 🎨 3D 코딩 아이콘 */}
          <motion.div 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-brand-secondary p-1 mb-8 mx-auto glow-secondary hover-glow-secondary"
            whileHover={{ 
              scale: 1.05,
              rotateY: 15,
              rotateX: 5 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div className="bg-white dark:bg-gray-900 w-full h-full rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-secondary opacity-20 rounded-full blur-xl"></div>
              <FiCode className="text-3xl md:text-4xl text-brand-secondary relative z-10" />
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            안녕하세요, <span style={{ color: 'hsl(var(--brand-secondary-middle))' }}>개발자 Wd-70</span>입니다
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            AI와 함께하는 직관적인 개발로 세상을 더 편리하게 만드는 개발자
          </motion.p>

          {/* 🚀 특징 카드들 */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              className="group relative p-6 rounded-xl bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/50 hover-glow-primary"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="absolute inset-0 bg-brand-primary opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
              <FiZap className="text-3xl mb-4 relative z-10" style={{ color: 'hsl(var(--brand-primary-middle))' }} />
              <h3 className="text-lg font-semibold mb-2 relative z-10">AI 바이브 코딩</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm relative z-10">최신 AI 기술과 함께하는 효율적인 개발</p>
            </motion.div>

            <motion.div 
              className="group relative p-6 rounded-xl bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/50 hover-glow-accent"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="absolute inset-0 bg-brand-accent opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
              <FiCode className="text-3xl mb-4 relative z-10" style={{ color: 'hsl(var(--brand-accent-start))' }} />
              <h3 className="text-lg font-semibold mb-2 relative z-10">풀스택 개발</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm relative z-10">프론트엔드부터 백엔드까지 전체 개발</p>
            </motion.div>

            <motion.div 
              className="group relative p-6 rounded-xl bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/50 hover-glow-secondary"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="absolute inset-0 bg-brand-secondary opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
              <FiHeart className="text-3xl mb-4 relative z-10" style={{ color: 'hsl(var(--brand-secondary-middle))' }} />
              <h3 className="text-lg font-semibold mb-2 relative z-10">사용자 중심</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm relative z-10">사용자 경험을 최우선으로 하는 개발</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}