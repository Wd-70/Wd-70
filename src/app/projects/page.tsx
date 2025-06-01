import { Metadata } from 'next';
import { projects } from '@/lib/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects | Wd-70',
  description: 'Wd-70의 프로젝트 포트폴리오를 확인해보세요. 다양한 웹 및 앱 개발 프로젝트를 소개합니다.',
};

export default function ProjectsPage() {
  return (
    <main className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          개발한 프로젝트들을 소개합니다. 각 프로젝트를 클릭하면 자세한 내용을 확인하실 수 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
