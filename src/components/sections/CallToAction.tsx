// components/sections/CallToAction.tsx
'use client';

import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6">함께 일하고 싶으신가요?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          새로운 도전과 협업을 기다리고 있습니다. 프로젝트 문의나 인사는 언제든지 환영입니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            연락하기
          </Link>
          <Link 
            href="/projects" 
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            프로젝트 보기
          </Link>
        </div>
      </div>
    </section>
  );
}