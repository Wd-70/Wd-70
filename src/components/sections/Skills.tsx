// components/sections/Skills.tsx
'use client';

// import { motion } from 'framer-motion';
import { FaReact, FaPython, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiJavascript, SiOpenai, SiFlutter, SiDart } from 'react-icons/si';

const skills = [
  { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" /> },
  { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8" /> },
  { name: 'React', icon: <FaReact className="w-8 h-8" /> },
  { name: 'Flutter', icon: <SiFlutter className="w-8 h-8" /> },
  { name: 'Dart', icon: <SiDart className="w-8 h-8" /> },
  { name: 'C#', icon: <svg className="w-8 h-8" viewBox="0 0 128 128"><path fill="#7BAAF6" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/><path fill="#3B82F6" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"/></svg> },
  { name: 'Java', icon: <FaJava className="w-8 h-8" /> },
  { name: 'Python', icon: <FaPython className="w-8 h-8" /> },
  { name: 'AI/ML', icon: <SiOpenai className="w-8 h-8" /> },
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}