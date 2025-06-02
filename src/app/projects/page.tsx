import { Metadata } from 'next';
import { projects } from '@/lib/data/projects';
import { ProjectsClient } from './client';

// 서버 컴포넌트에서만 사용되는 메타데이터
export const metadata: Metadata = {
  title: 'Projects | Wd-70',
  description: 'Wd-70의 프로젝트 포트폴리오를 확인해보세요. 다양한 웹 및 앱 개발 프로젝트를 소개합니다.',
};

export default function ProjectsPage() {
  return <ProjectsClient projects={projects} />;
}
