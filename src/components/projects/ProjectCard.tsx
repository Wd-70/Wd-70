'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/lib/data/projects';

type PriceTier = 'standard' | 'deluxe' | 'deluxe-plus' | 'premium';

interface ProjectWithOptionalPriceTier extends Omit<Project, 'priceTier' | 'thumbnail' | 'image'> {
  priceTier?: PriceTier;
  thumbnail?: string;
  image?: string;
}

interface ProjectCardProps {
  project: ProjectWithOptionalPriceTier;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const pathname = usePathname();

  // Get tier label and color
  const getTierInfo = (tier: PriceTier) => {
    switch (tier) {
      case 'standard':
        return { label: '스탠다드', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' };
      case 'deluxe':
        return { label: '디럭스', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' };
      case 'deluxe-plus':
        return { label: '디럭스+', color: 'bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-900 dark:from-purple-900 dark:to-indigo-900 dark:text-purple-100 border border-purple-300 dark:border-purple-700' };
      case 'premium':
        return { label: '프리미엄', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200' };
      default:
        return { label: '기본', color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' };
    }
  };

  const tierInfo = getTierInfo(project.priceTier || 'standard');

  // Handle project click to prevent animation on category change
  const handleProjectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname?.startsWith('/projects/')) {
      e.preventDefault();
      window.scrollTo(0, 0);
      // Add slight delay for animation to complete
      setTimeout(() => {
        window.location.href = `/projects/detail/${project.id}`;
      }, 100);
    }
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md dark:border-gray-800 h-full">
      {/* Thumbnail Image with Link */}
      <Link 
        href={`/projects/detail/${project.id}`}
        onClick={handleProjectClick}
        className="block"
      >
        <div className="relative aspect-video overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <Image
              src={project.thumbnail || project.image || '/images/default-thumbnail.jpg'}
              alt={project.title}
              fill
              className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </Link>
      
      {/* Project Content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
          
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          
          {/* Price Tier Badge */}
          <div className="mb-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tierInfo.color}`}>
              {tierInfo.label}
            </span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="mt-auto pt-4 border-t">
          <Button asChild className="w-full" size="sm">
            <Link 
              href={`/projects/detail/${project.id}`}
              onClick={handleProjectClick}
            >
              자세히 보기
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
