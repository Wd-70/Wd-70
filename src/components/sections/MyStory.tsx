// components/sections/MyStory.tsx
'use client';

export default function MyStory() {
    return (
      <section className="py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold mb-8">나의 이야기</h2>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              컴퓨터공학을 전공으로 공부하며 다양한 사이드 프로젝트를 통해 개발 실력을 키워왔습니다.
              필요에 따라 다양한 프로그램을 개발하며 사용자 중심의 개발 철학을 키웠습니다.
            </p>
            
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">개발 철학</h3>
              <p className="text-gray-700 dark:text-gray-300">
                "사용자의 불편함을 예측하고 해결하는 개발자"
              </p>
              <p className="mt-3">
                단순한 기능 구현을 넘어, 사용자가 경험할 수 있는 모든 불편함을 사전에 예측하고
                해결책을 제시하는 개발을 지향합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }