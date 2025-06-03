"use client";

import { Project } from "@/lib/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <main className="container py-12">
      <div className="mb-8">
        <Link href="/projects">
          <Button variant="ghost" className="mb-6 pl-0">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">
          {project.title}
        </h1>
        
        <p className="text-muted-foreground text-lg mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {/* 프로젝트 내용 섹션 */}
        {project.content ? (
          <section className="prose dark:prose-invert max-w-4xl">
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          </section>
        ) : (
          <p>상세 내용이 준비 중입니다.</p>
        )}

        <div className="mt-12 flex gap-4">
          {project.demoUrl && (
            <div>
              <Button asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  데모 보기
                </a>
              </Button>
            </div>
          )}
          
          {project.githubUrl && (
            <div>
              <Button asChild variant="outline">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  코드 보기
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
