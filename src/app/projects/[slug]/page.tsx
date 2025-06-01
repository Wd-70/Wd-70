import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/lib/data/projects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container py-12">
      <div className="mb-8">
        <Button asChild variant="ghost" className="mb-6 -ml-2">
          <Link href="/projects" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            모든 프로젝트 보기
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-muted-foreground">{project.description}</p>
        </div>

        <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose dark:prose-invert max-w-none">
          {project.content ? (
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          ) : (
            <p>상세 내용이 준비 중입니다.</p>
          )}
        </div>

        <div className="mt-12 flex gap-4">
          {project.demoUrl && (
            <Button asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                데모 보기
              </a>
            </Button>
          )}
          
          {project.githubUrl && (
            <Button asChild variant="outline">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                코드 보기
              </a>
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: '프로젝트를 찾을 수 없습니다',
    };
  }

  return {
    title: `${project.title} | Wd-70`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}
