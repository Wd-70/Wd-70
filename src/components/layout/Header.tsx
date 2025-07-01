"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

const navItems = [
  { name: "홈", href: "/" },
  { name: "소개", href: "/about" },
  { name: "프로젝트", href: "/projects" },
  { name: "연락처", href: "/contact" },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // 컴포넌트가 마운트된 후에만 테마를 변경하도록 함 (hydration 에러 방지)
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {/* 🌈 그라데이션 테두리 효과 */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-brand-accent/5 to-brand-secondary/10 rounded-b-xl"></div>
      
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10">
        {/* 🎨 프리미엄 로고 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300">
            Wd-70
          </Link>
        </motion.div>

        {/* 🚀 고급 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => {
            const isActive = item.href === '/' 
              ? pathname === '/' 
              : pathname.startsWith(item.href) && item.href !== '/';
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? 'text-purple-600 dark:text-purple-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                  }`}
                >
                  <span className="relative z-20">{item.name}</span>
                  {/* 🌊 흐르는 언더라인 효과 */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-purple-600 dark:bg-purple-400 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                  {/* 글로우 배경 */}
                  <div className="absolute inset-0 bg-purple-600/10 dark:bg-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            );
          })}
          
          {/* 🌟 3D 테마 토글 버튼 */}
          <motion.button
            onClick={toggleTheme}
            className="relative ml-4 p-3 rounded-xl bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/50 hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300"
            aria-label="Toggle theme"
            whileHover={{ 
              scale: 1.05,
              rotateY: 180
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              initial={false}
              animate={{ rotateY: theme === "dark" ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {theme === "dark" ? (
                <FiSun size={20} className="text-orange-500" />
              ) : (
                <FiMoon size={20} className="text-purple-600" />
              )}
            </motion.div>
          </motion.button>
        </nav>

        {/* 🎯 고급 모바일 메뉴 버튼 */}
        <motion.button
          className="md:hidden p-3 rounded-xl bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/50 text-purple-600 dark:text-purple-400 hover:bg-white/30 dark:hover:bg-gray-700/50 transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.div>
        </motion.button>
      </div>

      {/* 🌊 개선된 모바일 메뉴 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-t border-white/30 dark:border-gray-700/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-2">
              {navItems.map((item, index) => {
                const isActive = item.href === '/' 
                  ? pathname === '/' 
                  : pathname.startsWith(item.href) && item.href !== '/';
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative block py-3 px-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-purple-600 text-white font-semibold shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-purple-600/10 hover:text-purple-600 dark:hover:text-purple-400'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center w-full py-3 px-4 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
                >
                  {theme === "dark" ? (
                    <>
                      <FiSun className="mr-3" size={20} /> 라이트 모드로 전환
                    </>
                  ) : (
                    <>
                      <FiMoon className="mr-3" size={20} /> 다크 모드로 전환
                    </>
                  )}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
