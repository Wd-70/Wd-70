import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectsClient from '../client';
import { ProjectCategory } from '@/lib/data/projects';

type CategoryParams = {
  category: ProjectCategory;
};

type Props = {
  params: Promise<CategoryParams>;
};

// 카테고리별 메타데이터 생성
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // params를 비동기적으로 처리
  const { category } = await params;
  
  const categoryName = {
    mobile: '모바일 앱',
    web: '웹사이트',
    automation: '자동화'
  }[category] || '프로젝트';

  return {
    title: `${categoryName} | Wd-70`,
    description: `Wd-70의 ${categoryName} 프로젝트 포트폴리오를 확인해보세요.`,
    alternates: {
      canonical: `/projects/${category}`,
    },
  };
}

// 카테고리별 프로젝트 페이지
export default async function CategoryProjectsPage({ params }: Props) {
  // params를 비동기적으로 처리
  const { category } = await params;
  
  // 유효한 카테고리인지 확인
  const validCategories: ProjectCategory[] = ['mobile', 'web', 'automation'];
  if (!validCategories.includes(category)) {
    notFound();
  }
  
  return <ProjectsClient initialCategory={category} />;
}

// 정적 생성 시 경로 생성
export async function generateStaticParams(): Promise<{ category: ProjectCategory }[]> {
  return [
    { category: 'mobile' },
    { category: 'web' },
    { category: 'automation' },
  ];
}

export const dynamicParams = false;