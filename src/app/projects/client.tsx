"use client";

import { motion } from "framer-motion";
import { Project } from '@/lib/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';

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

interface ProjectsClientProps {
  projects: Project[];
}

export function ProjectsClient({ projects }: ProjectsClientProps) {
  return (
    <main className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          개발한 프로젝트들을 소개합니다. 각 프로젝트를 클릭하면 자세한 내용을 확인하실 수 있습니다.
        </motion.p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div key={project.slug} variants={item}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
