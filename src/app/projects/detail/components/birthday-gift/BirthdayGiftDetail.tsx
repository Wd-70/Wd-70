'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/lib/data/projects';
import { FiHeart, FiGift, FiStar, FiSmile, FiImage, FiMusic, FiDownload } from 'react-icons/fi';

interface BirthdayGiftDetailProps {
  project: Project;
}

const BirthdayGiftDetail: React.FC<BirthdayGiftDetailProps> = ({ project }) => {
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
    { name: 'Flutter', icon: <FiStar />, color: 'text-blue-500', description: '크로스 플랫폼 모바일 프레임워크' },
    { name: 'Dart', icon: <FiHeart />, color: 'text-cyan-500', description: '고성능 프로그래밍 언어' },
    { name: 'Lottie', icon: <FiMusic />, color: 'text-pink-500', description: '고품질 애니메이션 라이브러리' },
    { name: 'Confetti', icon: <FiGift />, color: 'text-purple-500', description: '축하 효과 애니메이션' },
    { name: 'Google Fonts', icon: <FiSmile />, color: 'text-orange-500', description: '감성적 폰트 시스템' },
    { name: 'Custom UI', icon: <FiImage />, color: 'text-indigo-500', description: '맞춤형 사용자 인터페이스' }
  ];

  const features = [
    {
      title: '감성적 축하 경험',
      description: '화려한 애니메이션과 따뜻한 메시지로 특별한 생일을 더욱 특별하게 만들어주는 축하 앱',
      color: 'brand-primary'
    },
    {
      title: '개인 맞춤형 콘텐츠',
      description: '받는 사람만을 위한 특별한 메시지와 이미지로 구성된 세상에 하나뿐인 생일 선물',
      color: 'brand-secondary'
    },
    {
      title: '영원한 추억 보관',
      description: '시간이 지나도 변치 않을 소중한 순간을 디지털로 영구 보존하는 추억 저장소',
      color: 'brand-accent'
    }
  ];

  const challenges = project.details?.challenges || [];

  return (
    <motion.div
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-pink-900 py-20"
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
              <div className="p-2 rounded-xl bg-pink-500/10">
                <FiHeart className="w-6 h-6 text-pink-500" />
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
            <span className="text-pink-500">핵심 기술 스택</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStackItems.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 min-w-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            <span className="text-purple-500">앱 목적</span>
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
                    color: feature.color === 'brand-primary' ? '#ec4899' :
                           feature.color === 'brand-secondary' ? '#a855f7' :
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
              <span className="text-pink-500">기술적 도전과 해결책</span>
            </h2>
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  className="group relative p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 min-w-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-pink-500">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 break-words">
                      <strong>문제:</strong> {challenge.description}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 break-words">
                      <strong className="text-purple-500">해결책:</strong> {challenge.solution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* 앱 다운로드 섹션 */}
        <motion.section variants={itemVariants}>
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/20 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-pink-500">
                앱 다운로드
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
                생일 축하 카드 앱을 직접 체험해보세요. 안드로이드 APK 파일을 다운로드하여 설치할 수 있습니다.
              </p>
              <motion.a
                href="https://drive.google.com/file/d/1huvtPC0NZdZXF76pnd26a9Py8JLyp-ST/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
          <div className="relative p-8 rounded-2xl bg-pink-500/10 backdrop-blur-sm border border-pink-500/20 text-center">
            <div className="absolute inset-0 bg-pink-500 opacity-5 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-pink-500">
                세상에 하나뿐인 특별한 선물
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                생일 축하 카드 앱은 단순한 디지털 카드를 넘어서는 감성적 경험을 제공합니다. 
                소중한 사람에게 전하는 마음을 기술과 창의성으로 표현하여, 
                평생 간직할 특별한 추억으로 만들어주는 의미 있는 선물입니다.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default BirthdayGiftDetail;