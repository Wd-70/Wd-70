import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/data/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md dark:border-gray-800">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="flex-1 p-6">
        <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="mt-auto flex gap-2 pt-2">
          {project.demoUrl && (
            <Button asChild variant="outline" size="sm" className="gap-1">
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                데모 보기 <ExternalLink className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          )}
          
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm" className="gap-1">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                코드 보기 <Github className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          )}
          
          <Button asChild variant="link" size="sm" className="ml-auto">
            <Link href={`/projects/${project.slug}`} className="text-sm">
              자세히 보기 →
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
