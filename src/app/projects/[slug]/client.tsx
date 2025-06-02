"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import type { Project } from '@/lib/data/projects';

// 애니메이션 변수
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <main className="container py-12">
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button asChild variant="ghost" className="mb-6 -ml-2">
          <Link href="/projects" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            모든 프로젝트 보기
          </Link>
        </Button>

        <motion.div 
          className="mb-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className="text-3xl font-bold mb-2" variants={item}>
            {project.title}
          </motion.h1>
          <motion.div className="flex flex-wrap gap-2 mb-4" variants={item}>
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </motion.div>
          <motion.p className="text-muted-foreground" variants={item}>
            {project.description}
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative aspect-video w-full rounded-lg overflow-hidden mb-8"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div 
          className="prose dark:prose-invert max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {project.content ? (
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          ) : (
            <p>상세 내용이 준비 중입니다.</p>
          )}
        </motion.div>

        <motion.div 
          className="mt-12 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {project.demoUrl && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  데모 보기
                </a>
              </Button>
            </motion.div>
          )}
          
          {project.githubUrl && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  코드 보기
                </a>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </main>
  );
}
