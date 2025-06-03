"use client";

import { Project } from '@/lib/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';

interface ProjectsClientProps {
  projects: Project[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
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
          <div key={project.slug} className="h-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </main>
  );
}
