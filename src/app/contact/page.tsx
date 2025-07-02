'use client';

import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/contact/ContactForm';
import { FiMail, FiGithub, FiMapPin, FiClock, FiZap, FiHeart, FiStar } from 'react-icons/fi';

// export const metadata: Metadata = {
//   title: '연락하기 | Wd-70 포트폴리오',
//   description: 'Wd-70에게 연락하실 수 있는 페이지입니다. 궁금한 점이 있으시면 언제든지 문의해주세요!',
// };

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 🌟 프리미엄 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-orange-500/10 to-transparent"></div>
      
      <motion.div
        className="container mx-auto px-4 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 🎯 헤더 섹션 */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-brand-primary p-1 glow-primary"
            whileHover={{ 
              scale: 1.1,
              rotateY: 15,
              rotateX: 5 
            }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="bg-white dark:bg-gray-900 w-full h-full rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-primary opacity-20 rounded-full blur-xl"></div>
              <FiMail className="text-2xl text-brand-primary relative z-10" />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ color: 'hsl(var(--brand-primary-middle))' }}>연락하기</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            새로운 프로젝트나 협업 기회에 대해 이야기해보세요. 함께 멋진 것을 만들어보겠습니다.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* 🚀 왼쪽: 연락처 정보 및 특징 */}
            <motion.div 
              className="lg:col-span-2 space-y-8"
              variants={itemVariants}
            >
              {/* 연락처 정보 카드 */}
              <motion.div 
                className="group relative p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 hover-glow-primary"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="absolute inset-0 bg-brand-primary opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <h2 className="text-2xl font-bold mb-6 relative z-10" style={{ color: 'hsl(var(--brand-primary-middle))' }}>
                  연락처 정보
                </h2>
                
                <div className="space-y-6 relative z-10">
                  <motion.div 
                    className="flex items-center group/item"
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-brand-primary/10 p-3 rounded-xl mr-4 group-hover/item:bg-brand-primary/20 transition-colors">
                      <FiMail className="h-6 w-6" style={{ color: 'hsl(var(--brand-primary-middle))' }} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">이메일</p>
                      <p className="font-semibold text-gray-900 dark:text-white">kjk7052@gmail.com</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center group/item"
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-brand-secondary/10 p-3 rounded-xl mr-4 group-hover/item:bg-brand-secondary/20 transition-colors">
                      <FiGithub className="h-6 w-6" style={{ color: 'hsl(var(--brand-secondary-middle))' }} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                      <a 
                        href="https://github.com/Wd-70" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-semibold text-gray-900 dark:text-white hover:text-brand-secondary transition-colors"
                      >
                        github.com/Wd-70
                      </a>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center group/item"
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-brand-accent/10 p-3 rounded-xl mr-4 group-hover/item:bg-brand-accent/20 transition-colors">
                      <FiMapPin className="h-6 w-6" style={{ color: 'hsl(var(--brand-accent-start))' }} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">위치</p>
                      <p className="font-semibold text-gray-900 dark:text-white">대한민국</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* 응답 시간 정보 */}
              <motion.div 
                className="group relative p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover-glow-accent"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="absolute inset-0 bg-brand-accent opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="flex items-center relative z-10">
                  <FiClock className="text-2xl mr-4" style={{ color: 'hsl(var(--brand-accent-start))' }} />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">빠른 응답</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">보통 24시간 이내 답변</p>
                  </div>
                </div>
              </motion.div>

              {/* 프로젝트 특징 카드들 */}
              <div className="grid grid-cols-1 gap-4">
                <motion.div 
                  className="group relative p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover-glow-primary"
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="absolute inset-0 bg-brand-primary opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="flex items-center relative z-10">
                    <FiZap className="text-xl mr-3" style={{ color: 'hsl(var(--brand-primary-middle))' }} />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">AI 바이브 개발</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">최신 기술 활용</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="group relative p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover-glow-secondary"
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="absolute inset-0 bg-brand-secondary opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="flex items-center relative z-10">
                    <FiHeart className="text-xl mr-3" style={{ color: 'hsl(var(--brand-secondary-middle))' }} />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">사용자 중심</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">UX 최우선</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="group relative p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover-glow-accent"
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="absolute inset-0 bg-brand-accent opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="flex items-center relative z-10">
                    <FiStar className="text-xl mr-3" style={{ color: 'hsl(var(--brand-accent-start))' }} />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">품질 보장</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">완성도 높은 결과물</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* 🎨 오른쪽: 연락 폼 */}
            <motion.div 
              className="lg:col-span-3"
              variants={itemVariants}
            >
              <div className="group relative p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 hover-glow-secondary h-full">
                <div className="absolute inset-0 bg-brand-secondary opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--brand-secondary-middle))' }}>
                    메시지 보내기
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    프로젝트 아이디어나 협업 제안을 자유롭게 공유해주세요
                  </p>
                  <ContactForm />
                </div>

                {/* 3D 테두리 효과 */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 🎯 하단 Call to Action */}
        <motion.div 
          className="text-center mt-20"
          variants={itemVariants}
        >
          <div className="relative p-8 rounded-2xl bg-brand-primary/10 backdrop-blur-sm border border-brand-primary/20 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-brand-primary opacity-5 rounded-2xl"></div>
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--brand-primary-middle))' }}>
                함께 멋진 프로젝트를 만들어보세요
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                새로운 아이디어와 기술로 세상을 더 편리하게 만드는 개발을 지향합니다. 
                언제든지 연락주세요!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
