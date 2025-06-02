import { notFound } from 'next/navigation';
import { projects } from '@/lib/data/projects';
import ProjectDetailClient from './client';

// 프로젝트 데이터를 가져오는 함수
function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  // params를 비동기적으로 처리
  const { slug } = await Promise.resolve(params);
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;


}

// 정적 경로 생성
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 메타데이터 생성
export async function generateMetadata({ params }: { params: { slug: string } }) {
  // params를 비동기적으로 처리
  const { slug } = await Promise.resolve(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: '프로젝트를 찾을 수 없습니다',
    };
  }

  return {
    title: `${project.title} | Wd-70`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Wd-70`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}
