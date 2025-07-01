import { redirect } from 'next/navigation';

// 기본 카테고리(mobile)로 리다이렉트
export default function ProjectsPage() {
  redirect('/projects/mobile');
}

// 메타데이터
export const metadata = {
  title: 'Projects | Wd-70',
  description: 'Wd-70의 프로젝트 포트폴리오를 확인해보세요. 다양한 웹 및 앱 개발 프로젝트를 소개합니다.',
  alternates: {
    canonical: '/projects',
  },
};


