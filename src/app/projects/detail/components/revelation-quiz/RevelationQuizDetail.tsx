'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/lib/data/projects';
import { FiBook, FiPlay, FiAward, FiSettings, FiDatabase, FiSmartphone } from 'react-icons/fi';

interface RevelationQuizDetailProps {
  project: Project;
  onImageClick?: (index: number) => void;
}

const RevelationQuizDetail: React.FC<RevelationQuizDetailProps> = ({ project }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const techStackItems = [
    { name: 'Flutter', icon: <FiSmartphone />, color: 'text-blue-500', description: '크로스 플랫폼 모바일 프레임워크' },
    { name: 'Dart', icon: <FiPlay />, color: 'text-cyan-500', description: '고성능 프로그래밍 언어' },
    { name: 'Hive', icon: <FiDatabase />, color: 'text-amber-500', description: '빠른 로컬 데이터베이스' },
    { name: 'Provider', icon: <FiSettings />, color: 'text-purple-500', description: '상태 관리 라이브러리' },
    { name: 'Google Mobile Ads', icon: <FiAward />, color: 'text-green-500', description: '광고 수익화 시스템' },
    { name: 'GetIt', icon: <FiBook />, color: 'text-indigo-500', description: '의존성 주입 컨테이너' }
  ];

  const features = [
    {
      title: '성경 학습 혁신',
      description: '기존의 지루한 성경 공부 방식을 벗어나 게임처럼 재미있게 계시록을 학습할 수 있는 혁신적 도구',
      color: 'brand-primary'
    },
    {
      title: '프리미엄 사용자 경험',
      description: '한 달 이상의 집중 개발로 완성된 복잡한 UI 상태 관리와 최적화된 학습 플로우',
      color: 'brand-secondary'
    },
    {
      title: '크로스 플랫폼 호환',
      description: '데스크톱과 모바일에서 동일한 고품질 경험을 제공하는 완전한 크로스 플랫폼 솔루션',
      color: 'brand-accent'
    }
  ];

  const challenges = project.details?.challenges || [];

  return (
    <motion.div
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-900 dark:to-yellow-900 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 max-w-6xl space-y-16">
        {/* 프로젝트 개요 */}
        <motion.section variants={itemVariants} className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 rounded-2xl"></div>
          <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-amber-500/10">
                <FiBook className="w-6 h-6 text-amber-500" />
              </div>
              프로젝트 개요
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              {project.details?.overview}
            </p>
          </div>
        </motion.section>

        {/* 기술 스택 섹션 */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-amber-500">핵심 기술 스택</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStackItems.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 min-w-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className={`text-3xl mb-4 ${tech.color}`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 앱 목적 및 주요 기능 */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-yellow-500">앱 목적</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`absolute inset-0 bg-${feature.color} opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-center" style={{ 
                    color: feature.color === 'brand-primary' ? '#f59e0b' :
                           feature.color === 'brand-secondary' ? '#eab308' :
                           '#d97706'
                  }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 주요 기능 하이라이트 */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-amber-500">프리미엄 기능</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.details?.features?.slice(0, 6).map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-8 h-8 mb-3 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  </div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">{feature}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 도전 과제 및 해결책 */}
        {challenges.length > 0 && (
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-amber-500">기술적 도전과 해결책</span>
            </h2>
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  className="group relative p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 min-w-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-yellow-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-amber-500">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 break-words">
                      <strong>문제:</strong> {challenge.description}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 break-words">
                      <strong className="text-yellow-500">해결책:</strong> {challenge.solution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* 개발 통계 */}
        <motion.section variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-amber-500">개발 성과</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div 
              variants={itemVariants}
              className="group relative p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 text-center"
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-amber-500 opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-amber-500 mb-2">30+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">개발 기간 (일)</p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="group relative p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 text-center"
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-yellow-500 opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-yellow-500 mb-2">6+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">핵심 기술</p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="group relative p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 text-center"
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-orange-500 opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-orange-500 mb-2">2+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">플랫폼 지원</p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="group relative p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 text-center"
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-amber-600 opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-amber-600 mb-2">100%</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">오프라인 지원</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 마무리 섹션 */}
        <motion.section variants={itemVariants}>
          <div className="relative p-8 rounded-2xl bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-center">
            <div className="absolute inset-0 bg-amber-500 opacity-5 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-amber-500">
                성경 학습의 새로운 패러다임
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
                재미있는 계시록 앱은 단순한 학습 도구를 넘어서는 혁신적인 성경 공부 경험을 제공합니다. 
                한 달 이상의 집중적인 개발과 세심한 최적화를 통해 완성된 이 앱은 
                복잡한 기술적 도전을 해결하며 사용자에게 최고의 학습 환경을 선사합니다.
              </p>
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.revelation.quizapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-xl hover:bg-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPlay className="w-4 h-4 mr-2" />
                Google Play에서 다운로드
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default RevelationQuizDetail;