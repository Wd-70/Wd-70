// components/sections/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiOpenai } from 'react-icons/si';

const skills = [
  { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" />, level: '상' },
  { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" />, level: '상' },
  { name: 'React', icon: <FaReact className="w-8 h-8" />, level: '상' },
  { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" />, level: '중' },
  { name: 'Python', icon: <FaPython className="w-8 h-8" />, level: '중' },
  { name: 'AI/ML', icon: <SiOpenai className="w-8 h-8" />, level: '중' },
  { name: 'AWS', icon: <FaAws className="w-8 h-8" />, level: '하' },
  { name: 'Tailwind', icon: <SiTailwindcss className="w-8 h-8" />, level: '상' },
];

export default function Skills() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">기술 스택</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3 text-blue-500">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              <div className="mt-2">
                <span className="text-sm text-gray-500">숙련도: {skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}