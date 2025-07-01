"use client";

import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Wd-70",
    icon: FiGithub,
  },
  // {
  //   name: "Twitter",
  //   href: "https://x.com/KeNN7052",
  //   icon: FiTwitter,
  // },
  // {
  //   name: "LinkedIn",
  //   href: "https://linkedin.com/in/yourusername",
  //   icon: FiLinkedin,
  // },
  {
    name: "Email",
    href: "mailto:kjk7052@gmail.com",
    icon: FiMail,
  },
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-8">
      {/* 🌟 새로운 배경 그라데이션 메시 */}
      <div className="absolute inset-0 bg-brand-primary opacity-5 dark:opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            {/* 🎨 혁신적인 3D 아바타 */}
            <motion.div 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand-primary p-1 mb-6 mx-auto glow-primary hover-glow-primary"
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
                {/* 내부 글로우 효과 */}
                <div className="absolute inset-0 bg-brand-primary opacity-20 rounded-full blur-xl"></div>
                <span className="text-4xl font-bold text-brand-primary relative z-10">
                  Wd-70
                </span>
              </div>
            </motion.div>
          </div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            안녕하세요, <span className="text-brand-primary">Wd-70</span>입니다
          </motion.h1>

          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-12">
            <TypeAnimation
              sequence={[
                'Flutter 개발자',
                1500,
                'AI 바이브 코딩 전문가',
                1500,
                'Next.js 개발자',
                1500,
                '신기술 애호가',
                1500,
                '자동화 프로그램 개발자',
                1500,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-12">
            사용자 경험을 중시하는 개발자로, 아름답고 직관적인 웹과 모바일 애플리케이션을
            만드는 것을 좋아합니다. 최신 기술을 배우고 공유하는 것을 즐기며, 문제 해결을
            위한 창의적인 솔루션을 찾는 데 열정적입니다.
          </p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {/* 🚀 네온 효과 버튼 */}
            <Link
              href="/projects"
              className="group relative px-8 py-3 bg-brand-primary text-white font-medium rounded-lg overflow-hidden hover-glow-primary transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">프로젝트 보기</span>
              <div className="absolute inset-0 bg-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              href="/contact"
              className="group relative px-8 py-3 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-700/70 text-gray-800 dark:text-white border border-white/20 dark:border-gray-600/50 font-medium rounded-lg transition-all duration-300 hover:scale-105 hover-glow-accent"
            >
              <span className="relative z-10">연락하기</span>
            </Link>
          </motion.div>

          <motion.div 
            className="flex space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {socialLinks.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm hover:bg-brand-primary transition-all duration-300 hover:scale-110 hover-glow-primary"
                aria-label={item.name}
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <item.icon className="h-6 w-6 text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
      {/* 🎯 개선된 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col items-center space-y-2"
        >
          <div className="w-1 h-8 bg-gradient-to-b from-transparent via-brand-primary to-transparent rounded-full opacity-60"></div>
          <div className="p-2 rounded-full bg-brand-primary/20 backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-brand-primary"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
