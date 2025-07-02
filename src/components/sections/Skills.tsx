// components/sections/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { FaReact, FaPython, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiJavascript, SiOpenai, SiFlutter, SiDart, SiTailwindcss, SiFramer } from 'react-icons/si';

const skillCategories = [
  {
    category: "Frontend",
    color: "brand-primary",
    skills: [
      { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" />, color: "text-black dark:text-white" },
      { name: 'React', icon: <FaReact className="w-8 h-8" />, color: "text-blue-500" },
      { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" />, color: "text-blue-600" },
      { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8" />, color: "text-yellow-500" },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" />, color: "text-cyan-500" },
      { name: 'Framer Motion', icon: <SiFramer className="w-8 h-8" />, color: "text-pink-500" },
    ]
  },
  {
    category: "Mobile",
    color: "brand-secondary",
    skills: [
      { name: 'Flutter', icon: <SiFlutter className="w-8 h-8" />, color: "text-blue-400" },
      { name: 'Dart', icon: <SiDart className="w-8 h-8" />, color: "text-blue-600" },
    ]
  },
  {
    category: "Backend & Languages",
    color: "brand-accent",
    skills: [
      { name: 'Python', icon: <FaPython className="w-8 h-8" />, color: "text-yellow-400" },
      { name: 'Java', icon: <FaJava className="w-8 h-8" />, color: "text-red-500" },
      { name: 'C#', icon: <svg className="w-8 h-8" viewBox="0 0 128 128"><path fill="#7BAAF6" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/><path fill="#3B82F6" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"/></svg>, color: "text-blue-500" },
      { name: 'AI/ML', icon: <SiOpenai className="w-8 h-8" />, color: "text-green-500" },
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* 🌟 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span style={{ color: 'hsl(var(--brand-primary-middle))' }}>기술 스택</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            다양한 기술을 활용하여 완성도 높은 프로젝트를 만들어냅니다
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.category}
              variants={categoryVariants}
              className="group"
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-center mb-8"
                style={{ 
                  color: category.color === 'brand-primary' ? 'hsl(var(--brand-primary-middle))' :
                         category.color === 'brand-secondary' ? 'hsl(var(--brand-secondary-middle))' :
                         'hsl(var(--brand-accent-start))'
                }}
                whileHover={{ scale: 1.05 }}
              >
                {category.category}
              </motion.h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group/skill relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.05,
                      rotateY: 5
                    }}
                  >
                    <div className={`relative p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 transition-all duration-300 h-full ${
                      category.color === 'brand-primary' ? 'hover-glow-primary' :
                      category.color === 'brand-secondary' ? 'hover-glow-secondary' :
                      'hover-glow-accent'
                    }`}>
                      {/* 홀로그램 배경 효과 */}
                      <div className="absolute inset-0 opacity-5 rounded-2xl group-hover/skill:opacity-10 transition-opacity duration-300"
                           style={{ 
                             background: category.color === 'brand-primary' ? 'linear-gradient(135deg, hsl(var(--brand-primary-start)), hsl(var(--brand-primary-middle)), hsl(var(--brand-primary-end)))' :
                                        category.color === 'brand-secondary' ? 'linear-gradient(135deg, hsl(var(--brand-secondary-start)), hsl(var(--brand-secondary-middle)), hsl(var(--brand-secondary-end)))' :
                                        'linear-gradient(135deg, hsl(var(--brand-accent-start)), hsl(var(--brand-accent-end)))'
                           }}></div>
                      
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className={`text-4xl mb-4 ${skill.color} group-hover/skill:scale-110 transition-transform duration-300`}>
                          {skill.icon}
                        </div>
                        <h4 className="font-semibold text-lg text-gray-800 dark:text-white">{skill.name}</h4>
                      </div>
                      
                      {/* 3D 테두리 효과 */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🎯 하단 Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="relative p-8 rounded-2xl bg-brand-primary/10 backdrop-blur-sm border border-brand-primary/20">
            <div className="absolute inset-0 bg-brand-primary opacity-5 rounded-2xl"></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">지속적인 성장</h3>
            <p className="text-gray-600 dark:text-gray-300 relative z-10">
              새로운 기술을 배우고 적용하며, 더 나은 개발자가 되기 위해 노력하고 있습니다
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}