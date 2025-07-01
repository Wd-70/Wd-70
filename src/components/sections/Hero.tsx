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
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 mb-6 mx-auto">
              <div className="bg-white dark:bg-gray-900 w-full h-full rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Wd-70
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            안녕하세요, Wd-70입니다
          </h1>

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

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              프로젝트 보기
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 font-medium rounded-lg transition-colors duration-200"
            >
              연락하기
            </Link>
          </div>

          <div className="flex space-x-6 mb-12">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label={item.name}
              >
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
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
          className="text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
