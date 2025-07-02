// components/sections/Vision.tsx
'use client';

import { motion } from "framer-motion";
import { FiZap, FiUsers, FiTrendingUp, FiStar } from "react-icons/fi";

export default function Vision() {
  const visionItems = [
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "AI와 함께하는 개발",
      description: "바이브 코딩의 시대에 발맞춰, AI를 활용한 직관적이고 효율적인 개발 방식을 추구합니다. AI가 단순한 도구를 넘어 개발의 동반자로 자리매김할 수 있도록 노력하고 있습니다.",
      color: "brand-primary",
      glowColor: "primary"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "사용자 중심의 서비스",
      description: "사용자가 겪을 수 있는 불편함을 사전에 예측하고 해결하는 서비스를 만들고자 합니다. 기술의 발전이 더 나은 사용자 경험으로 이어질 수 있도록 노력하겠습니다.",
      color: "brand-accent",
      glowColor: "accent"
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "지속 가능한 개발",
      description: "단기적인 성과보다는 장기적으로 지속 가능한 개발을 지향합니다. 깔끔한 코드와 체계적인 문서화를 통해 유지보수가 용이한 프로젝트를 만들고자 합니다.",
      color: "brand-secondary",
      glowColor: "secondary"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* 🌟 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20"></div>
      
      <motion.div 
        className="max-w-6xl mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span style={{ color: 'hsl(var(--brand-primary-middle))' }}>앞으로의 비전</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            지속 가능하고 사용자 중심적인 개발을 통해 더 나은 미래를 만들어가겠습니다
          </p>
        </motion.div>

        <div className="space-y-8">
          {visionItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group"
            >
              <motion.div 
                className={`relative p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 hover-glow-${item.glowColor} transition-all duration-500`}
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: index % 2 === 0 ? 2 : -2
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 홀로그램 배경 효과 */}
                <div className="absolute inset-0 opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300"
                     style={{ 
                       background: item.color === 'brand-primary' ? 'linear-gradient(135deg, hsl(var(--brand-primary-start)), hsl(var(--brand-primary-middle)), hsl(var(--brand-primary-end)))' :
                                  item.color === 'brand-secondary' ? 'linear-gradient(135deg, hsl(var(--brand-secondary-start)), hsl(var(--brand-secondary-middle)), hsl(var(--brand-secondary-end)))' :
                                  'linear-gradient(135deg, hsl(var(--brand-accent-start)), hsl(var(--brand-accent-end)))'
                     }}></div>
                
                <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  {/* 아이콘 */}
                  <motion.div 
                    className="flex-shrink-0 p-4 rounded-2xl"
                    style={{ 
                      backgroundColor: item.color === 'brand-primary' ? 'hsl(var(--brand-primary-middle) / 0.1)' :
                                      item.color === 'brand-secondary' ? 'hsl(var(--brand-secondary-middle) / 0.1)' :
                                      'hsl(var(--brand-accent-start) / 0.1)',
                      color: item.color === 'brand-primary' ? 'hsl(var(--brand-primary-middle))' :
                             item.color === 'brand-secondary' ? 'hsl(var(--brand-secondary-middle))' :
                             'hsl(var(--brand-accent-start))'
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotateY: 360 
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  {/* 콘텐츠 */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4"
                        style={{ 
                          color: item.color === 'brand-primary' ? 'hsl(var(--brand-primary-middle))' :
                                 item.color === 'brand-secondary' ? 'hsl(var(--brand-secondary-middle))' :
                                 'hsl(var(--brand-accent-start))'
                        }}>
                      {item.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* 3D 테두리 효과 */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* 🎯 미래 목표 섹션 */}
        <motion.div 
          className="mt-20 text-center"
          variants={itemVariants}
        >
          <div className="relative p-8 rounded-2xl bg-brand-primary/10 backdrop-blur-sm border border-brand-primary/20">
            <div className="absolute inset-0 bg-brand-primary opacity-5 rounded-2xl"></div>
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
            >
              <FiStar className="w-12 h-12 mx-auto mb-6" style={{ color: 'hsl(var(--brand-primary-middle))' }} />
              <h3 className="text-3xl font-bold mb-4" style={{ color: 'hsl(var(--brand-primary-middle))' }}>2025년 목표</h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                AI 기술을 활용한 혁신적인 개발 도구를 만들어 개발자 커뮤니티에 기여하고, 
                사용자 경험을 최우선으로 하는 서비스들을 세상에 선보이겠습니다.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}