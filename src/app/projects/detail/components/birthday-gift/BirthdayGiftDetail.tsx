'use client';

import { Project } from '@/lib/data/projects';
import { HeartIcon } from '@heroicons/react/24/outline';
import DetailSection from '@/components/projects/DetailSection';

interface BirthdayGiftDetailProps {
  project: Project;
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

export default function BirthdayGiftDetail({ project }: BirthdayGiftDetailProps) {
  const { title, description, details, gallery = [], techStack = [] } = project;
  const { overview = '', features = [] } = details || {};

  return (
    <div className="mt-24">
      {/* 프로젝트 개요 섹션 */}
      <DetailSection
        title={title}
        description={description}
        image={gallery[0] || ''}
        reverse={false}
      >
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          {overview || '소중한 사람을 위한 특별한 생일 축하 앱입니다. 따뜻한 마음과 추억을 전하는 특별한 선물이 될 거예요.'}
        </p>
      </DetailSection>

      {/* 주요 기능 섹션 */}
      <DetailSection
        title="이 앱의 특별한 기능들"
        description="생일 축하 카드 앱만의 차별화된 기능들을 소개합니다."
        reverse={true}
      >
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {features.length > 0 ? (
            features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-start">
                  <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded-full mr-3 flex-shrink-0">
                    <HeartIcon className="h-6 w-6 text-pink-600 dark:text-pink-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{feature}</h4>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">기능 정보가 없습니다.</p>
          )}
        </div>
      </DetailSection>

      {/* 기술 스택 섹션 */}
      <DetailSection
        title="기술 스택"
        description="이 프로젝트에 사용된 기술들입니다"
        reverse={false}
      >
        <div className="flex flex-wrap gap-3 mt-6">
          {techStack.length > 0 ? (
            techStack.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400">기술 스택 정보가 없습니다.</p>
          )}
        </div>
      </DetailSection>

      {/* 3. 기술 스택 */}
      <DetailSection
        title="완성도를 위한 기술"
        description="영원히 간직할 가치를 담아내기 위한 기술"
      >
        <div className="mt-6 space-y-6">
          <div>
            <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">핵심 기술</h4>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-sm font-medium">
                Flutter
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-medium">
                Lottie
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-3 text-gray-700 dark:text-gray-300">특별함의 가치</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              최신 크로스플랫폼 기술을 활용해 모든 기기에서 완벽하게 구현되는 경험을 제공합니다. 
              Lottie 애니메이션을 통해 부드럽고 세련된 모션으로 특별한 순간을 더욱 빛나게 합니다.
            </p>
          </div>
        </div>
      </DetailSection>

      {/* 4. 영원한 추억 */}
      <DetailSection
        title="영원히 간직될 추억"
        description="시간이 지나도 변치 않을 소중한 순간들"
        image="/images/timeless-memory.png"
        reverse={false}
      >
        <div className="space-y-4 mt-4">
          <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
            <QuoteIcon className="absolute top-4 right-4 h-8 w-8 text-gray-200 dark:text-gray-700" />
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 italic">
              &quot;세상에 단 하나뿐인 이 선물은 시간이 흘러도 변치 않을 우리만의 특별한 추억이 될 거예요.&quot;
            </p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            이 앱은 단순한 디지털 카드를 넘어, 특별한 사람에게 전하는 영원한 사랑과 감사의 마음을 담은 선물입니다. 
            시간이 흘러도 변치 않을 소중한 추억으로 남을 것입니다.
          </p>
        </div>
      </DetailSection>
    </div>
  );
}
