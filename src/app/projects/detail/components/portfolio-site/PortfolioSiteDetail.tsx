'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/lib/data/projects';
import { FiCode, FiZap, FiEye, FiSettings, FiLayers, FiMonitor } from 'react-icons/fi';

interface PortfolioSiteDetailProps {
  project: Project;
}

const PortfolioSiteDetail: React.FC<PortfolioSiteDetailProps> = ({ project }) => {
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
    { name: 'Next.js 15', icon: <FiCode />, color: 'text-blue-500', description: 'App Router로 최적화된 라우팅' },
    { name: 'React 19', icon: <FiLayers />, color: 'text-cyan-500', description: '최신 React 서버 컴포넌트' },
    { name: 'TypeScript', icon: <FiSettings />, color: 'text-blue-600', description: '완전한 타입 안정성' },
    { name: 'Framer Motion', icon: <FiZap />, color: 'text-purple-500', description: '고급 애니메이션 라이브러리' },
    { name: 'Tailwind CSS', icon: <FiEye />, color: 'text-teal-500', description: '유틸리티 우선 스타일링' },
    { name: 'Next Themes', icon: <FiMonitor />, color: 'text-indigo-500', description: '다크모드 시스템' }
  ];

  const features = [
    {
      title: '개발자 포트폴리오 전시',
      description: '다양한 프로젝트들을 카테고리별로 정리하여 개발 경험과 역량을 체계적으로 소개',
      color: 'brand-primary'
    },
    {
      title: '기술 스택 및 경험 공유',
      description: '사용 가능한 기술들과 개발 철학, 비전을 통해 개발자로서의 정체성을 표현',
      color: 'brand-secondary'
    },
    {
      title: '프로젝트 협업 연결',
      description: '연락처 폼과 이메일 시스템을 통해 새로운 프로젝트 제안과 협업 기회 연결',
      color: 'brand-accent'
    }
  ];

  const challenges = project.details?.challenges || [];

  return (
    <motion.div
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900 py-20"
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
            <div className="p-2 rounded-xl bg-brand-primary/10">
              <FiCode className="w-6 h-6" style={{ color: 'hsl(var(--brand-primary-middle))' }} />
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
          <span style={{ color: 'hsl(var(--brand-primary-middle))' }}>핵심 기술 스택</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackItems.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 min-w-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* 사이트 목적 및 주요 기능 */}
      <motion.section variants={itemVariants}>
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span style={{ color: 'hsl(var(--brand-secondary-middle))' }}>사이트 목적</span>
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
                  color: feature.color === 'brand-primary' ? 'hsl(var(--brand-primary-middle))' :
                         feature.color === 'brand-secondary' ? 'hsl(var(--brand-secondary-middle))' :
                         'hsl(var(--brand-accent-start))'
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
            <span style={{ color: 'hsl(var(--brand-primary-middle))' }}>기술적 도전과 해결책</span>
          </h2>
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="group relative p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 min-w-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-brand-primary">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 break-words">
                    <strong>문제:</strong> {challenge.description}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 break-words">
                    <strong className="text-brand-secondary">해결책:</strong> {challenge.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* 마무리 섹션 */}
      <motion.section variants={itemVariants}>
        <div className="relative p-8 rounded-2xl bg-brand-primary/10 backdrop-blur-sm border border-brand-primary/20 text-center">
          <div className="absolute inset-0 bg-brand-primary opacity-5 rounded-2xl"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--brand-primary-middle))' }}>
              협업과 소통을 위한 공간
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              이 포트폴리오는 단순한 프로젝트 전시를 넘어, 개발자와 클라이언트 간의 소통 창구 역할을 합니다. 
              새로운 프로젝트 기회나 협업 제안이 있으시면 언제든지 연락 주세요. 
              함께 멋진 프로젝트를 만들어나가겠습니다.
            </p>
          </div>
        </div>
      </motion.section>
      </div>
    </motion.div>
  );
};

export default PortfolioSiteDetail;