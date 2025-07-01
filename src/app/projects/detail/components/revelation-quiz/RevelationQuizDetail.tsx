import DetailSection from "@/components/projects/DetailSection";
import { 
  CheckCircleIcon,
  BookOpenIcon,
  ChartBarIcon,
  EyeIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';
import { Project } from '@/lib/data/projects';

interface RevelationQuizDetailProps {
  project: Project;
  onImageClick?: (index: number) => void;
}

export default function RevelationQuizDetail({ project, onImageClick }: RevelationQuizDetailProps) {
  return (
    <div className="mt-24">
      <DetailSection
        title={project.title}
        description={project.description || '계시록 퀴즈 앱은 성경의 마지막 책인 계시록을 쉽고 재미있게 배울 수 있는 최고의 동반자입니다.'}
        image="/images/revelation-quiz-app-main.jpg"
        onImageClick={onImageClick ? () => onImageClick(0) : undefined}
        reverse={false}
      >
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          복잡한 성경 공부 대신, 퀴즈를 풀며 자연스럽게 말씀을 익혀보세요. 
          현재 안드로이드에서만 이용 가능하며, 누구나 무료로 다운로드하여 사용하실 수 있습니다. 
          성경을 처음 접하시는 분들도 쉽게 시작하실 수 있도록 직관적인 UI로 설계되었습니다.
        </p>
      </DetailSection>

      <DetailSection
        title="이 앱의 특별한 기능들"
        description="계시록 퀴즈 앱만의 차별화된 기능들을 소개합니다."
        reverse={true}
      >
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
                <BookOpenIcon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">쉽고 재미있는 퀴즈 학습</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">지루한 독서는 그만! 빈칸 채우기 퀴즈로 계시록을 재미있게 공부하세요.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full mr-3">
                <ChartBarIcon className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">나의 성장 확인</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">학습 통계를 통해 성장 과정을 한눈에 확인하세요.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-3">
                <EyeIcon className="h-6 w-6 text-green-600 dark:text-green-300" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">눈이 편한 디자인</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">어두운 밤에도 편안한 다크 모드를 지원합니다.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full mr-3">
                <DevicePhoneMobileIcon className="h-6 w-6 text-amber-600 dark:text-amber-300" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">오프라인 지원</h4>
                <p className="text-gray-600 dark:text-gray-300 mt-1">인터넷 연결 없이도 언제든 학습을 이어갈 수 있어요.</p>
              </div>
            </div>
          </div>
        </div>
      </DetailSection>

      <DetailSection
        title="기술 스택"
        description="프로젝트에 사용된 주요 기술들입니다."
        reverse={false}
      >
        <div className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-3">주요 기술</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  Flutter
                </span>
                <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                  Dart
                </span>
                <span className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                  Provider
                </span>
                <span className="px-3 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">
                  Hive
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">주요 기능</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>빈칸 채우기 퀴즈 시스템</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>학습 통계 및 진행 상황 추적</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>다크/라이트 테마 지원</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>오프라인 지원</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DetailSection>

      <DetailSection
        title="개발 과정에서의 도전과 해결"
        description="프로젝트를 진행하며 마주친 주요 도전 과제와 해결 방법을 소개합니다."
        reverse={true}
        image="/images/development-challenges.jpg"
      >
        <div className="space-y-6 mt-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">1. 원문 보기 모드 전환 시 UI 상태 관리</h4>
            <p className="text-gray-600 dark:text-gray-300">
              원문 보기 모드와 퀴즈 모드 간 전환 시 빈칸의 색상 상태가 초기화되는 문제가 있었습니다.
            </p>
            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-md">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">해결 방법</p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-sm text-blue-600 dark:text-blue-200">
                <li>BlankFillExerciseView 클래스의 _refreshBlankInputStates 메서드 개선</li>
                <li>컨트롤러 값 강제 변경 기법을 통한 색상 상태 리셋 및 복원 기능 구현</li>
                <li>UI 갱신 로직에 단계적 지연 시간 도입으로 안정성 향상</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg">
            <h4 className="font-semibold text-lg mb-2">2. 포커스된 빈칸의 답변 제출 문제</h4>
            <p className="text-gray-600 dark:text-gray-300">
              포커스된 빈칸에서 수정 후 다른 빈칸으로 이동하지 않고 정답을 제출할 경우, 최신 입력값이 반영되지 않는 문제가 있었습니다.
            </p>
            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-md">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">해결 방법</p>
              <ul className="list-disc list-inside mt-1 space-y-1 text-sm text-blue-600 dark:text-blue-200">
                <li>모든 답변 제출 전 현재 포커스된 빈칸의 값을 즉시 반영하는 로직 추가</li>
                <li>submitAllAnswers 메서드 개선으로 포커스된 빈칸의 값을 우선 처리</li>
                <li>QuizBlankInput의 _checkAnswer 메서드 개선으로 모든 입력값이 항상 업데이트되도록 변경</li>
              </ul>
            </div>
          </div>
        </div>
      </DetailSection>

      <DetailSection
        title="앞으로의 계획"
        description="향후 추가될 기능과 개선 사항들을 소개합니다."
        reverse={false}
      >
        <div className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <SparklesIcon className="h-5 w-5 text-amber-500 mr-2" />
                개발 중인 기능
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">일일 퀘스트 시스템 (개발 중)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <LightBulbIcon className="h-5 w-5 text-blue-500 mr-2" />
                계획 중인 기능
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">iOS 버전 출시</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">웹 버전 출시</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300">소셜 공유 기능</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DetailSection>

      <DetailSection
        title="지금 바로 다운로드하세요!"
        description="성경 공부가 이렇게 재미있을 수 있다는 걸 경험해보세요."
        reverse={true}
      >
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">지금 다운로드하고, 계시록의 깊은 진리를 발견하세요!</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">&quot;하나님의 말씀은 살아 있고 활력이 있어...&quot; (히브리서 4:12)</p>
          
          <div className="flex justify-center">
            <a 
              href="https://play.google.com/store/apps/details?id=com.revelation.quizapp"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                <path d="M10 12a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              Google Play에서 다운로드
            </a>
          </div>
          
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            현재 안드로이드에서만 이용 가능합니다. iOS 버전은 준비 중입니다.
          </p>
        </div>
      </DetailSection>
    </div>
  );
}
