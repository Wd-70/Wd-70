import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex-1 home-page pt-20 relative overflow-hidden">
      {/* 🌟 프리미엄 배경 그라데이션 */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900"></div>
      <div className="absolute inset-0 bg-brand-primary opacity-5 dark:opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/10 to-transparent"></div>
      
      <div className="relative z-10">
        <Hero />
        {/* 다른 섹션들이 여기에 추가됩니다 */}
      </div>
    </main>
  );
}
