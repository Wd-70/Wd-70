export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  content?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'portfolio-website',
    title: '포트폴리오 웹사이트',
    description: 'Next.js와 Tailwind CSS를 사용하여 제작한 현대적인 포트폴리오 웹사이트입니다.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/projects/portfolio-preview.jpg',
    demoUrl: 'https://wd-70.vercel.app',
    githubUrl: 'https://github.com/wd-70/portfolio',
    featured: true,
    content: '\n## 프로젝트 개요\n\n이 프로젝트는 제 개인 포트폴리오 웹사이트로, Next.js 14의 App Router를 활용하여 개발되었습니다.\n\n### 주요 기능\n- 반응형 디자인\n- 다크/라이트 모드 지원\n- 부드러운 페이지 전환 애니메이션\n- 프로젝트 갤러리\n\n### 기술 스택\n- Next.js 14\n- TypeScript\n- Tailwind CSS\n- Framer Motion',
  },
  {
    slug: 'ecommerce-app',
    title: '이커머스 웹 앱',
    description: 'React와 Node.js를 사용한 풀스택 이커머스 애플리케이션',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/images/projects/ecommerce-preview.jpg',
    githubUrl: 'https://github.com/wd-70/ecommerce-app',
    featured: true,
  },
  {
    slug: 'task-manager',
    title: '태스크 관리자',
    description: '할 일 관리를 위한 웹 애플리케이션',
    tags: ['React', 'Redux', 'Firebase'],
    image: '/images/projects/task-manager-preview.jpg',
    demoUrl: 'https://task-manager-wd70.vercel.app',
    githubUrl: 'https://github.com/wd-70/task-manager',
    featured: true,
  },
];
