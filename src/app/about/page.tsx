// app/about/page.tsx
'use client';

import AboutHero from '@/components/sections/AboutHero';
import MyStory from '@/components/sections/MyStory';
import Skills from '@/components/sections/Skills';
import Vision from '@/components/sections/Vision';
import CallToAction from '@/components/sections/CallToAction';

export default function AboutPage() {
  return (
    <main className="pt-20 relative overflow-hidden">
      {/* 🌟 프리미엄 배경 그라데이션 */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
      <div className="absolute inset-0 bg-brand-secondary opacity-5 dark:opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-500/10 to-transparent"></div>
      
      <div className="relative z-10">
        <AboutHero />
        <MyStory />
        <Skills />
        <Vision />
        <CallToAction />
      </div>
    </main>
  );
}