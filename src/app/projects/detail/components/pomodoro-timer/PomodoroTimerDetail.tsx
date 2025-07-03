'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/lib/data/projects';
import { FiClock, FiPlay, FiPause, FiSettings, FiBarChart, FiMoon, FiDownload } from 'react-icons/fi';

interface PomodoroTimerDetailProps {
  project: Project;
}

const PomodoroTimerDetail: React.FC<PomodoroTimerDetailProps> = ({ project }) => {
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
    { name: 'Flutter', icon: <FiSettings />, color: 'text-blue-500', description: '크로스 플랫폼 모바일 프레임워크' },
    { name: 'Dart', icon: <FiPlay />, color: 'text-cyan-500', description: '고성능 프로그래밍 언어' },
    { name: 'Material Design 3', icon: <FiBarChart />, color: 'text-green-500', description: '현대적 디자인 시스템' }
  ];

  const features = [
    {
      title: '포모도로 타이머 시스템',
      description: '과학적으로 입증된 25분 집중 + 5분 휴식 사이클로 생산성 최대화',
      color: 'brand-primary'
    },
    {
      title: '시각적 진행 표시',
      description: '직관적인 원형 진행바와 부드러운 애니메이션으로 시간 흐름 시각화',
      color: 'brand-secondary'
    },
    {
      title: '생산성 추적',
      description: '일일 집중 시간 통계와 완료된 포모도로 세션 수 추적 및 분석',
      color: 'brand-accent'
    }
  ];

  const challenges = project.details?.challenges || [];

  return (
    <motion.div
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-red-900 py-20"
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
              <div className="p-2 rounded-xl bg-red-500/10">
                <FiClock className="w-6 h-6 text-red-500" />
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
            <span className="text-red-500">핵심 기술 스택</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStackItems.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 min-w-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            <span className="text-orange-500">앱 목적</span>
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
                    color: feature.color === 'brand-primary' ? '#ef4444' :
                           feature.color === 'brand-secondary' ? '#f97316' :
                           '#f59e0b'
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

        {/* 도전 과제 및 해결책 */}
        {challenges.length > 0 && (
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-red-500">기술적 도전과 해결책</span>
            </h2>
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  className="group relative p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 min-w-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-red-500">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 break-words">
                      <strong>문제:</strong> {challenge.description}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 break-words">
                      <strong className="text-orange-500">해결책:</strong> {challenge.solution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* 앱 다운로드 섹션 */}
        <motion.section variants={itemVariants}>
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/20 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-red-500">
                앱 다운로드
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                포모도로 타이머 앱을 직접 사용해보세요. 안드로이드 APK 파일을 다운로드하여 설치할 수 있습니다.
              </p>
              <motion.a
                href="https://drive.google.com/file/d/1ofwdyMwNjboiInUsu4UKwEvxGXSj8hDo/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="w-5 h-5" />
                APK 다운로드
              </motion.a>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                * 안드로이드 기기에서만 설치 가능합니다
              </p>
            </div>
          </div>
        </motion.section>

        {/* 마무리 섹션 */}
        <motion.section variants={itemVariants}>
          <div className="relative p-8 rounded-2xl bg-red-500/10 backdrop-blur-sm border border-red-500/20 text-center">
            <div className="absolute inset-0 bg-red-500 opacity-5 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-red-500">
                생산성을 위한 완벽한 도구
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                포모도로 타이머는 단순하지만 강력한 생산성 도구입니다. 
                과학적으로 입증된 시간 관리 기법을 현대적이고 직관적인 앱으로 구현하여, 
                사용자의 집중력과 생산성을 극대화할 수 있도록 설계되었습니다.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default PomodoroTimerDetail;