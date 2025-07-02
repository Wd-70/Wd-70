'use client';

import { motion } from "framer-motion";
import { FiBook, FiTarget, FiUsers, FiZap } from "react-icons/fi";

export default function MyStory() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* 🌟 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-purple-900/20 dark:via-gray-900 dark:to-cyan-900/20"></div>
      
      <motion.div 
        className="max-w-6xl mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span style={{ color: 'hsl(var(--brand-primary-middle))' }}>나의 이야기</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            컴퓨터공학을 전공으로 공부하며 다양한 사이드 프로젝트를 통해 개발 실력을 키워왔습니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* 왼쪽: 개발 여정 */}
          <motion.div variants={itemVariants}>
            <div className="group relative p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 hover-glow-primary h-full">
              <div className="absolute inset-0 bg-brand-primary opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300"></div>
              <FiBook className="text-4xl mb-6 relative z-10" style={{ color: 'hsl(var(--brand-primary-middle))' }} />
              <h3 className="text-2xl font-bold mb-4 relative z-10">개발 여정</h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 relative z-10">
                필요에 따라 다양한 프로그램을 개발하며 사용자 중심의 개발 철학을 키웠습니다. 
                매 프로젝트마다 새로운 기술을 배우고 적용하면서 성장해 나가고 있습니다.
              </p>
            </div>
          </motion.div>

          {/* 오른쪽: 개발 철학 */}
          <motion.div variants={itemVariants}>
            <div className="group relative p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 hover-glow-secondary h-full">
              <div className="absolute inset-0 bg-brand-secondary opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300"></div>
              <FiTarget className="text-4xl mb-6 relative z-10" style={{ color: 'hsl(var(--brand-secondary-middle))' }} />
              <h3 className="text-2xl font-bold mb-4 relative z-10">개발 철학</h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 relative z-10 mb-4">
                <strong>사용자의 불편함을 예측하고 해결하는 개발자</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 relative z-10">
                단순한 기능 구현을 넘어, 사용자가 경험할 수 있는 모든 불편함을 사전에 예측하고
                해결책을 제시하는 개발을 지향합니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 하단: 핵심 가치들 */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span style={{ color: 'hsl(var(--brand-accent-start))' }}>핵심 가치</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="group relative p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover-glow-accent"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="absolute inset-0 bg-brand-accent opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
              <FiUsers className="text-3xl mb-4 relative z-10" style={{ color: 'hsl(var(--brand-accent-start))' }} />
              <h4 className="text-xl font-semibold mb-3 relative z-10">협업과 소통</h4>
              <p className="text-gray-600 dark:text-gray-300 relative z-10">
                팀워크를 중시하며, 효과적인 소통을 통해 더 나은 결과를 만들어냅니다.
              </p>
            </motion.div>

            <motion.div 
              className="group relative p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover-glow-primary"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="absolute inset-0 bg-brand-primary opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
              <FiZap className="text-3xl mb-4 relative z-10" style={{ color: 'hsl(var(--brand-primary-middle))' }} />
              <h4 className="text-xl font-semibold mb-3 relative z-10">지속적 학습</h4>
              <p className="text-gray-600 dark:text-gray-300 relative z-10">
                빠르게 변화하는 기술 트렌드에 발맞춰 끊임없이 학습하고 성장합니다.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}