'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
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
    // URL 업데이트 (리렌더링 방지를 위해 push 대신 replace 사용)
    router.replace(`/projects/${category}`, { scroll: false });
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
    <main className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">프로젝트</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          제공하는 서비스와 프로젝트를 소개합니다. 각 카테고리를 선택하여 확인해보세요.
        </p>
      </div>
      
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
      
      {/* 카테고리 탭 */}
      <div className="mb-8">
        <Tabs 
          value={activeCategory}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 mb-6">
            {CATEGORIES.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className={`px-6 py-2 ${activeCategory === category.id ? 'bg-blue-100 text-blue-800' : ''}`}
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* 프로젝트 목록 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Tabs>
      </div>
    </main>
  );
}
