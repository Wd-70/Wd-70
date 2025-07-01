"use client";

import { useState } from 'react';
import { Project, PriceTier } from "@/lib/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import { ImageGallery } from "@/components/projects/ImageGallery";
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

// 기본 프로젝트 디테일 컴포넌트
const DefaultProjectDetail = ({ project }: { project: Project }) => (
  <div className="mt-12">
    <h2 className="text-2xl font-bold mb-6">{project.title} 프로젝트</h2>
    <div className="prose dark:prose-invert max-w-none">
      <p>{project.details?.overview || '이 프로젝트에 대한 자세한 정보가 곧 제공될 예정입니다.'}</p>
      {project.details?.features && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">주요 기능</h3>
          <ul className="list-disc pl-5 space-y-1">
            {project.details.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

// 프로젝트별 상세 컴포넌트 매핑
const projectDetailComponents = {
  'fun-revelation-quiz': dynamic<{ 
    project: Project; 
    onImageClick?: (index: number) => void;
  }>(
    () => import('@/app/projects/detail/components/revelation-quiz/RevelationQuizDetail'),
    { 
      loading: () => <Skeleton className="w-full h-96" />,
      ssr: false 
    }
  ),
  'birthday-wish-app': dynamic<{
    project: Project;
    onImageClick?: (index: number) => void;
  }>(
    () => import('@/app/projects/detail/components/birthday-gift/BirthdayGiftDetail'),
    {
      loading: () => <Skeleton className="w-full h-96" />,
      ssr: false
    }
  ),
  'pomodoro-timer': dynamic<{
    project: Project;
    onImageClick?: (index: number) => void;
  }>(
    () => import('@/app/projects/detail/components/pomodoro-timer/PomodoroTimerDetail'),
    {
      loading: () => <Skeleton className="w-full h-96" />,
      ssr: false
    }
  ),
  'ayauke-songbook-platform': dynamic<{
    project: Project;
  }>(
    () => import('@/app/projects/detail/components/ayauke-songbook/AyaukeSongbookDetail'),
    {
      loading: () => <Skeleton className="w-full h-96" />,
      ssr: false
    }
  )
} as const;

// type ProjectId = keyof typeof projectDetailComponents; // 사용하지 않는 타입 제거

interface ProjectDetailClientProps {
  project: Project & {
    details?: {
      overview?: string;
      features?: string[];
      challenges?: {
        title: string;
        description: string;
        solution?: string;
      }[];
    };
  };
}

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

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const tierInfo = getTierInfo(project.priceTier || 'standard');
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // project.gallery가 없을 경우를 대비해 기본값 설정
  const galleryImages = project.gallery || [];
  const allImages = [project.thumbnail, ...galleryImages];

  // 프로젝트 ID에 해당하는 상세 컴포넌트 가져오기
  const ProjectDetailComponent = project.id in projectDetailComponents 
    ? projectDetailComponents[project.id as keyof typeof projectDetailComponents]
    : DefaultProjectDetail;
    
  console.log('Current project ID:', project.id); // 디버깅용 로그 추가

  const openGallery = (index: number) => {
    setSelectedImageIndex(index);
    setIsGalleryOpen(true);
  };

  // 이미지 로드 실패 시 대체 함수
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800';
      errorDiv.textContent = '이미지를 불러올 수 없습니다.';
      parent.appendChild(errorDiv);
    }
  };

  // 페이지 전환 애니메이션
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="overflow-hidden">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className=""
      >
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              프로젝트 목록으로 돌아가기
            </Link>
          </Button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          {/* 메인 이미지 */}
          <div 
            className="relative aspect-video rounded-lg overflow-hidden mb-6 bg-gray-100 dark:bg-gray-800 flex items-center justify-center cursor-zoom-in"
            onClick={() => openGallery(0)}
          >
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={handleImageError}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                이미지를 불러올 수 없습니다.
              </div>
            )}
          </div>
          
          {/* 갤러리 썸네일 목록 */}
          {galleryImages.length > 0 && (
            <div className="grid grid-cols-4 gap-2 mt-4">
              {project.gallery.map((img, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openGallery(index + 1)}
                >
                  <Image
                    src={img}
                    alt={`${project.title} 이미지 ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 100px"
                    onError={handleImageError}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
          
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${tierInfo.color}`}>
              {tierInfo.label}
            </span>
          </div>
            
          <p className="text-muted-foreground text-lg mb-6">
            {project.description}
          </p>
            
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
            
          <div className="space-y-4">
            {project.details?.overview && (
              <div>
                <h3 className="text-lg font-semibold mb-2">프로젝트 개요</h3>
                <p className="text-muted-foreground">{project.details.overview}</p>
              </div>
            )}
              
            {project.details?.features && project.details.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">주요 기능</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {project.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
              
            {project.techStack && project.techStack.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">기술 스택</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
            
          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="/contact">
                문의하기
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 이미지 갤러리 모달 */}
      {isGalleryOpen && (
        <ImageGallery
          images={allImages}
          initialIndex={selectedImageIndex}
          onClose={() => setIsGalleryOpen(false)}
        />
      )}

      {/* 프로젝트 상세 컴포넌트 렌더링 */}
      <div className="mt-12 -mx-4 md:-mx-8 lg:-mx-12 -mb-12">
          <ProjectDetailComponent project={project} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
