'use client';

import DetailSection from '@/components/projects/DetailSection';
import { ClockIcon, ChartBarIcon, MoonIcon, BellIcon } from '@heroicons/react/24/outline';

export default function PomodoroTimerDetail() {
  return (
    <div className="mt-24">
      <DetailSection
        title="프로젝트 개요"
        description="집중력 향상을 위한 모던한 포모도로 타이머 앱"
        image="/images/pomodoro-preview.png"
        reverse={false}
      >
        <div className="space-y-4">
          <p className="text-lg">
            포모도로 기법을 적용한 생산성 향상 타이머 앱으로, 사용자가 작업과 휴식 시간을 효과적으로 관리할 수 있도록 도와줍니다. 
            직관적인 인터페이스와 시각적 피드백을 통해 집중력 향상과 워라밸 균형을 동시에 추구합니다.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200 font-medium">
              &quot;단순하지만 강력한 타이머로 하루의 생산성을 극대화하세요&quot;
            </p>
          </div>
        </div>
      </DetailSection>

      <DetailSection
        title="주요 기능"
        description="사용자 경험을 고려한 다양한 기능들"
        reverse={true}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
                <ClockIcon className="h-5 w-5 text-blue-600 dark:text-blue-300" />
              </div>
              <div>
                <h4 className="font-semibold">3가지 타이머 모드</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  집중(25분), 짧은 휴식(5분), 긴 휴식(15분)으로 구성된 과학적 생산성 사이클
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full mr-3">
                <ChartBarIcon className="h-5 w-5 text-purple-600 dark:text-purple-300" />
              </div>
              <div>
                <h4 className="font-semibold">생산성 통계</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  주간/월간 집중 시간 추적 및 시각화
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-3">
                <MoonIcon className="h-5 w-5 text-green-600 dark:text-green-300" />
              </div>
              <div>
                <h4 className="font-semibold">다크 모드</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  눈의 피로를 줄여주는 어두운 테마 지원
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-full mr-3">
                <BellIcon className="h-5 w-5 text-yellow-600 dark:text-yellow-300" />
              </div>
              <div>
                <h4 className="font-semibold">알림 시스템</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  타이머 완료 시 진동 및 사운드 알림
                </p>
              </div>
            </div>
          </div>
        </div>
      </DetailSection>

      <DetailSection
        title="기술 스택"
        description="최신 기술로 구현된 견고한 아키텍처"
      >
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3">주요 프레임워크 & 라이브러리</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium flex items-center">
                Flutter
              </span>
              <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                Dart
              </span>
              <span className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                Provider
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">주요 패키지</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs">
                google_fonts
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs">
                audioplayers
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs">
                shared_preferences
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs">
                flutter_animate
              </span>
            </div>
          </div>
        </div>
      </DetailSection>

      <DetailSection
        title="UI/UX 디자인"
        description="직관적이고 아름다운 사용자 경험"
        image="/images/pomodoro-screens.png"
        reverse={true}
      >
        <div className="space-y-4">
          <p>
            모던하고 미니멀한 디자인으로 사용자의 집중력을 방해하지 않도록 설계되었습니다. 
            애니메이션을 활용한 시각적 피드백으로 사용자 경험을 향상시켰습니다.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-sm mb-1">시각적 계층 구조</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300">중요 요소에 집중할 수 있는 명확한 시각적 계층 구조</p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-sm mb-1">직관적인 컨트롤</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300">누구나 쉽게 사용할 수 있는 직관적인 인터페이스</p>
            </div>
          </div>
        </div>
      </DetailSection>
    </div>
  );
}
