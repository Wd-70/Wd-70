'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { projects as projectsData } from '@/lib/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs';

const _DEBUG_ = false;

// 로그 헬퍼 함수
const log = (message: string, data?: unknown) => {
  console.log(`[Projects] ${message}`, data || '');
};

type ProjectCategory = 'mobile' | 'web' | 'automation';

// 프로젝트 카드에 필요한 타입 정의
interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  priceTier: 'standard' | 'deluxe' | 'premium';
  thumbnail?: string;
  image?: string;
  tags: string[];
  gallery: string[];
  techStack: string[];
  details?: {
    overview?: string;
    features?: string[];
    challenges?: string[];
    solutions?: string[];
  };
  slug?: string;
  createdAt: Date;
  updatedAt: Date;
}

const CATEGORIES = [
  { id: 'mobile', label: '모바일 앱' },
  { id: 'web', label: '웹사이트' },
  { id: 'automation', label: '업무 자동화' },
] as const;

interface ProjectsClientProps {
  initialCategory?: ProjectCategory;
}

export default function ProjectsClient({ initialCategory = 'mobile' }: ProjectsClientProps = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(initialCategory);
  const [isMounted, setIsMounted] = useState(false);
  const [projects, setProjects] = useState<ProjectCardProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  
  // Update activeCategory when URL changes
  useEffect(() => {
    const categoryFromPath = pathname?.split('/').pop();
    if (categoryFromPath && ['mobile', 'web', 'automation'].includes(categoryFromPath)) {
      setActiveCategory(categoryFromPath as ProjectCategory);
    }
  }, [pathname]);

  // 브라우저 뒤로가기/앞으로가기 지원
  useEffect(() => {
    const handlePopState = () => {
      const categoryFromPath = window.location.pathname.split('/').pop();
      if (categoryFromPath && ['mobile', 'web', 'automation'].includes(categoryFromPath)) {
        setActiveCategory(categoryFromPath as ProjectCategory);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 프로젝트 데이터 로드 및 처리
  useEffect(() => {
    setIsMounted(true);
    
    try {
      log('로드된 프로젝트 데이터:', projectsData);
      
      // 프로젝트 데이터 형식 검증 및 변환
      const formattedProjects = projectsData.map((project) => {
        // 카테고리 값 검증 및 정규화
        const normalizedCategory = (() => {
          const cat = String(project.category || 'web').toLowerCase() as ProjectCategory;
          if (['mobile', 'web', 'automation'].includes(cat)) {
            return cat as ProjectCategory;
          }
          log(`경고: 알 수 없는 카테고리 '${project.category}'를 'web'으로 설정합니다.`, project);
          return 'web';
        })();
        
        // 프로젝트 데이터 반환
        const projectData: ProjectCardProps = {
          ...project,
          id: project.id || `project-${Math.random().toString(36).substr(2, 9)}`,
          category: normalizedCategory,
          slug: project.id || `project-${Math.random().toString(36).substr(2, 9)}`,
          thumbnail: project.thumbnail || '/images/default-thumbnail.jpg',
          details: {
            overview: project.details?.overview || '',
            features: Array.isArray(project.details?.features) ? project.details.features : [],
            challenges: Array.isArray(project.details?.challenges) ? project.details.challenges : [],
            solutions: Array.isArray(project.details?.solutions) ? project.details.solutions : [],
          },
          createdAt: project.createdAt ? new Date(project.createdAt) : new Date(),
          updatedAt: project.updatedAt ? new Date(project.updatedAt) : new Date(),
        };
        
        log(`프로젝트 처리됨: ${projectData.title}`, {
          category: projectData.category,
          priceTier: projectData.priceTier,
          tagsCount: projectData.tags.length
        });
        
        return projectData;
      });
      
      log('처리된 프로젝트 목록:', formattedProjects);
      
      // 카테고리별 프로젝트 수 계산
      const categoryCounts = formattedProjects.reduce((acc, p) => {
        acc[p.category] = (acc[p.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      log('카테고리별 프로젝트 수:', categoryCounts);
      
      setProjects(formattedProjects);
    } catch (err) {
      console.error('프로젝트 처리 중 오류 발생:', err);
      setError('프로젝트를 불러오는 중 오류가 발생했습니다.');
    }
  }, []);

  const handleTabChange = (value: string) => {
    const category = value as ProjectCategory;
    setActiveCategory(category);
    // URL을 히스토리에 추가하지만 페이지 리로드 방지
    window.history.pushState(null, '', `/projects/${category}`);
  };

  // 카테고리별로 프로젝트 필터링
  const filteredProjects = projects.filter(p => {
    const isMatch = p.category === activeCategory;
    log(`[필터] ${isMatch ? '포함' : '제외'} - ${p.title} (${p.category})`);
    return isMatch;
  });

  // 오류 표시
  if (error) {
    return (
      <main className="container py-12">
        <div className="text-center py-12">
          <p className="text-red-500">{error}</p>
        </div>
      </main>
    );
  }


  // 로딩 상태
  if (!isMounted) {
    return (
      <main className="container py-12">
        <div className="text-center py-12">
          <p>로딩 중...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 🌟 프리미엄 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent"></div>
      
      <div className="container py-20 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 🎯 3D 프로젝트 아이콘 */}
          <motion.div
            className="w-20 h-20 mx-auto mb-8 rounded-full bg-brand-primary p-1 glow-primary"
            whileHover={{ 
              scale: 1.1,
              rotateY: 15,
              rotateX: 5 
            }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="bg-white dark:bg-gray-900 w-full h-full rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-primary opacity-20 rounded-full blur-xl"></div>
              <svg className="w-8 h-8 text-brand-primary relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ color: 'hsl(var(--brand-primary-middle))' }}>프로젝트</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            다양한 분야의 혁신적인 프로젝트들을 확인해보세요. AI와 함께 만들어낸 차별화된 솔루션입니다.
          </p>
        </motion.div>
      
      {/* 디버그 정보 섹션 */}
      {_DEBUG_ && (
      <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-bold text-lg mb-3 text-gray-800">디버그 정보</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 bg-white rounded border">
            <p className="text-sm text-gray-600">총 프로젝트</p>
            <p className="text-2xl font-bold">{projects.length}개</p>
          </div>
          <div className="p-3 bg-white rounded border">
            <p className="text-sm text-gray-600">현재 카테고리</p>
            <p className="text-xl font-bold">
              {CATEGORIES.find(c => c.id === activeCategory)?.label || activeCategory}
              <span className="text-sm text-gray-500 ml-1">({activeCategory})</span>
            </p>
          </div>
          <div className="p-3 bg-white rounded border">
            <p className="text-sm text-gray-600">표시 중인 프로젝트</p>
            <p className="text-2xl font-bold">{filteredProjects.length}개</p>
          </div>
        </div>
        
        {/* 카테고리별 프로젝트 수 */}
        <div className="mt-4 pt-4 border-t">
          <h4 className="font-semibold text-sm text-gray-700 mb-2">카테고리별 프로젝트 수</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(
              projects.reduce((acc, p) => {
                acc[p.category] = (acc[p.category] || 0) + 1;
                return acc;
              }, {} as Record<string, number>)
            ).map(([cat, count]) => (
              <span 
                key={cat}
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  cat === activeCategory 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {CATEGORIES.find(c => c.id === cat)?.label || cat} ({count})
              </span>
            ))}
          </div>
        </div>
      </div>
      )}
      
        {/* 🎨 프리미엄 카테고리 탭 */}
        <div className="mb-12">
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 rounded-2xl p-2 shadow-lg">
                <div className="flex">
                  {CATEGORIES.map((category, index) => (
                    <motion.button
                      key={category.id}
                      onClick={() => handleTabChange(category.id)}
                      className={`
                        flex-1 relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-center
                        ${activeCategory === category.id 
                          ? 'text-white' 
                          : 'text-gray-600 dark:text-gray-300 hover:text-brand-primary hover:bg-brand-primary/5'
                        }
                      `}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-20">{category.label}</span>
                    </motion.button>
                  ))}
                </div>
                
                {/* 활성 탭 배경 애니메이션 */}
                <motion.div
                  className="absolute top-2 bottom-2 bg-brand-primary rounded-xl shadow-lg z-10"
                  animate={{
                    left: `calc(${CATEGORIES.findIndex(cat => cat.id === activeCategory) * 33}% + 7px)`,
                    width: 'calc(33% - 7px)',
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              </div>
            </div>

            {/* 🚀 프로젝트 통계 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div 
                className="group relative p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover-glow-primary text-center"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="absolute inset-0 bg-brand-primary opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold text-brand-primary mb-1"
                    key={`${activeCategory}-count`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {filteredProjects.length}
                  </motion.h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {CATEGORIES.find(c => c.id === activeCategory)?.label} 프로젝트
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="group relative p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover-glow-secondary text-center"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="absolute inset-0 bg-brand-secondary opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-brand-secondary mb-1">{projects.length}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">전체 프로젝트</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="group relative p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover-glow-accent text-center"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="absolute inset-0 bg-brand-accent opacity-5 rounded-xl group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-brand-accent mb-1">3</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">카테고리</p>
                </div>
              </motion.div>
            </div>

            {/* 🎯 프로젝트 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${activeCategory}-${project.id}`}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ 
                    delay: index * 0.05, 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                  layout
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>

            {/* 빈 상태 메시지 */}
            {filteredProjects.length === 0 && (
              <motion.div 
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                  아직 {CATEGORIES.find(c => c.id === activeCategory)?.label} 프로젝트가 없습니다
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  곧 새로운 프로젝트가 추가될 예정입니다
                </p>
              </motion.div>
            )}
        </div>

        {/* 🎯 하단 Call to Action */}
        <div className="text-center mt-20">
          <div className="relative p-8 rounded-2xl bg-brand-primary/10 backdrop-blur-sm border border-brand-primary/20 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-brand-primary opacity-5 rounded-2xl"></div>
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'hsl(var(--brand-primary-middle))' }}>
                프로젝트 문의하기
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                비슷한 프로젝트가 필요하시거나 새로운 아이디어가 있으시다면 언제든지 연락주세요
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-brand-primary text-white font-semibold rounded-xl hover:bg-brand-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                문의하기
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
