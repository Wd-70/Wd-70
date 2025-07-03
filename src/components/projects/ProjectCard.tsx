'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/lib/data/projects';

type PriceTier = 'standard' | 'deluxe' | 'deluxe-plus' | 'premium';

interface ProjectCardProps {
  project: Project & {
    image?: string;
    slug?: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const pathname = usePathname();

  // Get tier label and premium styling
  const getTierInfo = (tier: PriceTier) => {
    switch (tier) {
      case 'standard':
        return { 
          label: '스탠다드', 
          color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
          glow: 'hover-glow-accent'
        };
      case 'deluxe':
        return { 
          label: '디럭스', 
          color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
          glow: 'hover-glow-primary'
        };
      case 'deluxe-plus':
        return { 
          label: '디럭스+', 
          color: 'bg-brand-primary text-white shadow-lg glow-primary',
          glow: 'hover-glow-primary'
        };
      case 'premium':
        return { 
          label: '프리미엄', 
          color: 'bg-brand-secondary text-white shadow-lg glow-secondary',
          glow: 'hover-glow-secondary'
        };
      default:
        return { 
          label: '기본', 
          color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
          glow: ''
        };
    }
  };

  const tierInfo = getTierInfo(project.priceTier || 'standard');

  // Handle project click with smooth navigation
  const handleProjectClick = () => {
    // Let Next.js handle the navigation naturally without forcing scroll to top
  };

  return (
    <motion.div 
      className={`group relative flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-lg transition-all duration-300 dark:border-gray-800 h-full ${tierInfo.glow}`}
      whileHover={{ 
        y: -8,
        rotateX: 2,
        rotateY: 5,
        scale: 1.02
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 25 
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* 🌟 홀로그램 배경 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
      
      {/* 🎨 무지개 보더 효과 (고급 등급용) */}
      {(project.priceTier === 'deluxe-plus' || project.priceTier === 'premium') && (
        <div className="absolute inset-0 bg-brand-primary opacity-20 rounded-xl blur-sm group-hover:opacity-40 transition-opacity duration-500"></div>
      )}
      
      {/* Thumbnail Image with Link */}
      <Link 
        href={`/projects/detail/${project.id}`}
        onClick={handleProjectClick}
        className="block relative z-10"
      >
        <div className="relative aspect-video overflow-hidden rounded-t-xl">
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
            {/* 이미지 반사 효과 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <motion.div
              className="relative w-full h-full"
              whileHover={{ 
                rotateX: 5,
                rotateY: -5,
                scale: 1.05
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={project.thumbnail || project.image || '/images/default-thumbnail.jpg'}
                alt={project.title}
                fill
                className="object-contain p-2 transition-all duration-500 group-hover:brightness-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
        </div>
      </Link>
      
      {/* Project Content */}
      <div className="flex-1 p-6 flex flex-col relative z-10">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-brand-primary transition-colors duration-300">
              {project.title}
            </h3>
            
            {/* 🏆 3D 메탈릭 등급 뱃지 */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.1, rotateZ: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-lg ${tierInfo.color} transform transition-all duration-300 hover:shadow-xl`}>
                {tierInfo.label}
              </span>
            </motion.div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
            {project.description}
          </p>
          
          {/* 🎨 개선된 태그들 */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag: string, index: number) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-brand-primary/10 text-brand-primary border border-brand-primary/20 hover:bg-brand-primary/80 hover:text-white hover:border-brand-primary transition-all duration-200"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* 🚀 네온 효과 버튼 */}
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button asChild className="w-full bg-brand-primary hover:bg-brand-secondary text-white shadow-lg hover-glow-primary transition-all duration-300" size="sm">
              <Link 
                href={`/projects/detail/${project.id}`}
                onClick={handleProjectClick}
                className="relative overflow-hidden"
              >
                <span className="relative z-10">자세히 보기</span>
                <div className="absolute inset-0 bg-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
