'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaSearch, FaMobile } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiMongodb, SiTailwindcss, SiFramer, SiYoutube } from 'react-icons/si';
import { IoMdCheckmarkCircle } from 'react-icons/io';

export default function AyaukeSongbookDetail() {
  const techStackIcons: { [key: string]: React.ReactNode } = {
    'Next.js 15': <SiNextdotjs className="w-6 h-6" />,
    'React 18': <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">R</div>,
    'TypeScript': <SiTypescript className="w-6 h-6" />,
    'Tailwind CSS': <SiTailwindcss className="w-6 h-6" />,
    'MongoDB': <SiMongodb className="w-6 h-6" />,
    'Google Sheets API v4': <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">G</div>,
    'YouTube API': <SiYoutube className="w-6 h-6" />,
    'Framer Motion': <SiFramer className="w-6 h-6" />,
    'Vercel Analytics': <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-xs font-bold">V</div>
  };

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

  return (
    <motion.div
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Hero Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900 px-4 py-2 rounded-full text-purple-600 dark:text-purple-300 text-sm font-medium mb-6">
            <FaCode className="w-4 h-4" />
            웹 애플리케이션
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            아야 팬페이지
            <span className="block text-purple-600 dark:text-purple-400">노래책 플랫폼</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            버튜버 아야의 노래 데이터베이스와 실시간 스트리밍 정보를 제공하는 팬 커뮤니티 플랫폼
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" variants={itemVariants}>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <FaSearch className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">지능형 검색</h3>
            <p className="text-gray-600 dark:text-gray-300">
              한글 초성, 한/영 오타 허용, 띄어쓰기 무관 검색으로 450+ 곡을 쉽게 찾을 수 있습니다.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <FaDatabase className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">실시간 동기화</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Google Sheets와 MongoDB 하이브리드 시스템으로 실시간 데이터 업데이트를 지원합니다.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <FaMobile className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">반응형 디자인</h3>
            <p className="text-gray-600 dark:text-gray-300">
              모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 사용자 경험을 제공합니다.
            </p>
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">프로젝트 개요</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            HONEYZ 소속 버튜버 아야의 팬을 위해 제작된 종합 정보 플랫폼입니다. 아야가 부른 450여 곡의 노래 데이터를 체계적으로 관리하고, 
            팬들이 쉽게 검색하고 감상할 수 있는 환경을 제공합니다.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Google Sheets와 MongoDB를 연동한 하이브리드 데이터 관리 시스템을 구축하여, 스트리머가 직접 시트를 수정하면 실시간으로 웹사이트에 반영되는 
            효율적인 콘텐츠 관리 시스템을 구현했습니다.
          </p>
        </motion.div>

        {/* Technical Challenges */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">기술적 도전과 해결책</h2>
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">한국어 검색 시스템 구현</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                한글 초성 검색, 자모 분리, 한/영 오타 허용 등 복잡한 검색 로직이 필요했습니다.
              </p>
              <div className="flex items-start gap-3">
                <IoMdCheckmarkCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-200">
                  지능형 검색 알고리즘을 개발하여 한국어 특성을 고려한 사용자 친화적 검색을 구현했습니다.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">대용량 데이터 성능 최적화</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                450+ 곡 데이터를 원활하게 렌더링하고 검색하는 성능 문제가 있었습니다.
              </p>
              <div className="flex items-start gap-3">
                <IoMdCheckmarkCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-200">
                  Virtual scrolling과 chunk 렌더링 기법을 적용하여 성능을 최적화했습니다.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">실시간 데이터 동기화</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Google Sheets와 MongoDB 간의 실시간 데이터 동기화가 필요했습니다.
              </p>
              <div className="flex items-start gap-3">
                <IoMdCheckmarkCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-200">
                  Google Sheets API를 활용한 하이브리드 데이터 관리 시스템을 구축했습니다.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">기술 스택</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.entries(techStackIcons).map(([tech, icon]) => (
              <div key={tech} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:scale-105 transition-transform">
                {icon}
                <span className="font-medium text-gray-900 dark:text-white text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Features List */}
        <motion.div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">주요 기능</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              '고도화된 다국어 검색 시스템 (한글 초성, 한/영 오타 허용, 띄어쓰기 무관)',
              'Google Sheets ↔ MongoDB 하이브리드 데이터 동기화',
              'YouTube MR 영상 재생 및 구간 점프 기능',
              '반응형 모바일 네비게이션 및 다크 모드 지원',
              '언어별 필터링 및 실시간 검색 결과 카운팅',
              'Virtual scrolling과 chunk 렌더링으로 450+ 곡 데이터 원활 처리'
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <IoMdCheckmarkCircle className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-200">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Stats */}
        <motion.div className="grid md:grid-cols-4 gap-6 mb-16" variants={itemVariants}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">450+</div>
            <div className="text-gray-600 dark:text-gray-300">관리 곡 수</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">3개월</div>
            <div className="text-gray-600 dark:text-gray-300">개발 기간</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">9개</div>
            <div className="text-gray-600 dark:text-gray-300">핵심 기술</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">반응형 지원</div>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div className="text-center" variants={itemVariants}>
          <div className="flex justify-center gap-6">
            <button className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors cursor-not-allowed opacity-50">
              <FaGithub className="w-5 h-5" />
              GitHub (Private)
            </button>
            <button className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors cursor-not-allowed opacity-50">
              <FaExternalLinkAlt className="w-5 h-5" />
              Live Demo (준비중)
            </button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            현재 프라이빗 리포지토리이며, 배포 준비 중입니다.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}