// components/sections/CallToAction.tsx
'use client';

import Link from 'next/link';
import { motion } from "framer-motion";
import { FiMail, FiArrowRight, FiFolder } from "react-icons/fi";

export default function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* 🌟 다이나믹 배경 */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-brand-accent/5 to-brand-secondary/10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/5 to-transparent"></div>
      
      <motion.div 
        className="max-w-5xl mx-auto text-center px-4 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span style={{ color: 'hsl(var(--brand-primary-middle))' }}>함께 일하고 싶으신가요?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            새로운 도전과 협업을 기다리고 있습니다. 프로젝트 문의나 인사는 언제든지 환영입니다.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {/* 연락하기 버튼 */}
          {/* <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/contact" 
              className="group relative px-8 py-4 bg-brand-primary text-white font-semibold rounded-xl overflow-hidden hover-glow-primary transition-all duration-300 flex items-center gap-3"
            >
              <FiMail className="w-5 h-5" />
              <span className="relative z-10">연락하기</span>
              <motion.div
                className="absolute inset-0 bg-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div> */}

          {/* 프로젝트 보기 버튼 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/projects" 
              className="group relative px-8 py-4 bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm border-2 border-brand-primary/30 text-brand-primary font-semibold rounded-xl hover:bg-brand-primary/10 dark:hover:bg-brand-primary/20 transition-all duration-300 flex items-center gap-3"
            >
              <FiFolder className="w-5 h-5" />
              <span>프로젝트 보기</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>

        {/* 🎯 추가 정보 카드들 */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            className="group relative p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover-glow-primary"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="absolute inset-0 bg-brand-primary opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
            <h3 className="text-lg font-semibold mb-2 relative z-10" style={{ color: 'hsl(var(--brand-primary-middle))' }}>빠른 응답</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm relative z-10">
              24시간 이내 연락드립니다
            </p>
          </motion.div>

          <motion.div 
            className="group relative p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover-glow-accent"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="absolute inset-0 bg-brand-accent opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
            <h3 className="text-lg font-semibold mb-2 relative z-10" style={{ color: 'hsl(var(--brand-accent-start))' }}>무료 상담</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm relative z-10">
              프로젝트 상담은 언제나 무료
            </p>
          </motion.div>

          <motion.div 
            className="group relative p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover-glow-secondary"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="absolute inset-0 bg-brand-secondary opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
            <h3 className="text-lg font-semibold mb-2 relative z-10" style={{ color: 'hsl(var(--brand-secondary-middle))' }}>유연한 협업</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm relative z-10">
              다양한 협업 방식 지원
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}