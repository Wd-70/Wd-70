const now = new Date();

export type ProjectCategory = 'mobile' | 'web' | 'automation';
export type PriceTier = 'standard' | 'deluxe' | 'premium';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  priceTier: PriceTier;
  description: string;
  thumbnail: string;
  tags: string[];
  gallery: string[];
  techStack: string[];
  details?: {
    overview?: string;
    features?: string[];
    challenges?: {
      title: string;
      description: string;
      solution?: string;
    }[];
    solutions?: string[];
    techStack?: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

export const projects: Project[] = [
  {
    "id": "pomodoro-timer",
    "title": "포모도로 타이머",
    "category": "mobile",
    "priceTier": "standard",
    "description": "Flutter로 제작된 아름답고 현대적인 포모도로 타이머 앱으로, 집중력 향상과 생산성 향상을 도와줍니다.",
    "thumbnail": "/images/projects/unnamed.jpg",
    "tags": ["Flutter", "Dart", "Mobile App"],
    "gallery": [
      "/images/projects/unnamed.jpg",
      "/images/projects/unnamed.jpg",
      "/images/projects/unnamed.jpg"
    ],
    "techStack": [
      "Flutter",
      "Dart",
      "Google Fonts"
    ],
    "details": {
      "overview": "포모도로 기법을 활용한 생산성 향상 타이머 앱으로, 사용자가 집중 시간과 휴식 시간을 효과적으로 관리할 수 있도록 도와줍니다. Material Design 3를 기반으로 한 현대적이고 직관적인 UI를 제공합니다.",
      "features": [
        "작업 시간(25분)과 휴식 시간(5분/15분) 타이머",
        "작업 세션 추적 및 통계",
        "시각적 진행 표시기",
        "완료 시 사운드 알림",
        "다크 모드 지원",
        "로컬 저장소를 통한 설정 저장"
      ]
    },
    createdAt: new Date(2025, 5, 31),
    updatedAt: new Date(2025, 5, 31)
  },
  {
    "id": "birthday-wish-app",
    "title": "생일 축하 카드",
    "category": "mobile",
    "priceTier": "standard",
    "description": "소중한 사람을 위한 특별한 생일 축하 앱",
    "thumbnail": "/images/projects/birthday-wish.png",
    "tags": ["Flutter", "모바일", "축하 카드"],
    "gallery": [
      "/images/projects/unnamed.jpg",
      "/images/projects/unnamed.jpg",
      "/images/projects/unnamed.jpg"
    ],
    "techStack": ["Flutter", "Dart", "Lottie", "Confetti", "Google Fonts"],
    "details": {
      "overview": "이 앱은 특별한 사람을 위한 진심 가득한 선물로, 다양한 사람들의 축하 메시지를 모아 하나의 아름다운 경험으로 만들어줍니다. 생일을 맞은 사람이 앱을 열면 펼쳐지는 화려한 애니메이션과 따뜻한 메시지들은 평생 간직할 소중한 추억이 될 것입니다.",
      "features": [
        "아름다운 컨페티 애니메이션 효과",
        "여러 사람의 축하 메시지 슬라이드",
        "부드러운 페이지 전환 효과",
        "감성적인 폰트와 색상 구성"
      ]
    },
    createdAt: new Date(2025, 5, 31),
    updatedAt: now
  },{
    "id": "fun-revelation-quiz",
    "title": "재미있는 계시록",
    "category": "mobile",
    "priceTier": "premium",
    "description": "성경 계시록을 공부하기 위한 퀴즈 앱으로, 성경 암기와 이해를 돕습니다.",
    thumbnail: '/images/projects/bible1.png',
    "tags": ["Flutter", "Dart", "Hive", "Provider", "Google Ads"],
    "gallery": [
      '/images/projects/bible2.png',
      '/images/projects/bible3.png',
      '/images/projects/bible4.png',
      '/images/projects/bible5.png'
    ],
    "techStack": [
      "Flutter", 
      "Dart", 
      "Hive (로컬 데이터베이스)", 
      "Provider (상태 관리)", 
      "Google Mobile Ads",
      "GetIt (의존성 주입)",
      "Window Manager (데스크톱 지원)"
    ],
    "details": {
      "overview": "성경 계시록을 효과적으로 공부하고 암기할 수 있도록 설계된 퀴즈 앱입니다. 다양한 디자인 테마와 함께 사용자 맞춤형 학습이 가능합니다.",
      "features": [
        "빈칸 채우기 퀴즈 제공",
        "다양한 디자인 테마 지원 (심플, 큐트)",
        "퀴즈 타이머 기능",
        "학습 진도 추적",
        "오프라인 학습 지원",
        "다크 모드 지원",
        "데스크톱 및 모바일 플랫폼 호환",
        "광고 통합 (Google AdMob)"
      ]
    },
    "createdAt": new Date(2025, 4, 29),  // 예시에서 유지
    "updatedAt": new Date(2025, 6, 8)    // 현재 날짜로 업데이트
  },
  {
    id: 'portfolio-site',
    title: '포트폴리오 웹사이트',
    category: 'web',
    priceTier: 'standard',
    description: '개발자 포트폴리오를 위한 반응형 웹사이트',
    thumbnail: '/images/projects/unnamed.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    gallery: [
      '/images/projects/unnamed.jpg',
      '/images/projects/unnamed.jpg',
      '/images/projects/unnamed.jpg'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    details: {
      overview: '개발자의 프로젝트와 기술 스택을 보여주는 모던한 포트폴리오 웹사이트입니다.',
      features: [
        '반응형 디자인',
        '다크 모드 지원',
        '프로젝트 필터링',
        '애니메이션 효과'
      ]
    },
    createdAt: new Date(2024, 2, 10),
    updatedAt: now
  },
  // {
  //   id: 'data-pipeline',
  //   title: '데이터 파이프라인 자동화',
  //   category: 'automation',
  //   priceTier: 'deluxe',
  //   description: '데이터 수집, 처리, 시각화를 자동화하는 파이프라인 시스템',
  //   thumbnail: '/images/projects/unnamed.jpg',
  //   tags: ['Python', 'Airflow', 'Docker', 'BigQuery'],
  //   gallery: [
  //     '/images/projects/unnamed.jpg',
  //     '/images/projects/unnamed.jpg'
  //   ],
  //   techStack: ['Python', 'Apache Airflow', 'Docker', 'Google BigQuery'],
  //   details: {
  //     overview: '다양한 소스에서 데이터를 수집하여 처리하고 시각화하는 종단간 데이터 파이프라인을 구축했습니다.',
  //     features: [
  //       '자동화된 데이터 수집',
  //       '데이터 변환 및 정제',
  //       '에러 처리 및 모니터링',
  //       '자동화된 보고서 생성'
  //     ]
  //   },
  //   createdAt: new Date(2023, 11, 5),
  //   updatedAt: now
  // },
  {
    id: 'ayauke-songbook-platform',
    title: '아야 팬페이지 - 노래책 플랫폼',
    category: 'web',
    priceTier: 'premium',
    description: '버튜버 아야의 노래 데이터베이스와 실시간 스트리밍 정보를 제공하는 팬 커뮤니티 플랫폼',
    thumbnail: '/images/projects/ayauke-thumbnail.png',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Google Sheets API', 'YouTube API'],
    gallery: [
      '/images/projects/ayauke-homepage.png',
      '/images/projects/ayauke-songbook.png',
      '/images/projects/ayauke-search-demo.gif',
      '/images/projects/ayauke-mobile.png',
      '/images/projects/ayauke-dark-mode.png'
    ],
    techStack: [
      'Next.js 15',
      'React 18', 
      'TypeScript',
      'Tailwind CSS',
      'MongoDB',
      'Google Sheets API v4',
      'YouTube API',
      'Framer Motion',
      'Vercel Analytics'
    ],
    details: {
      overview: 'HONEYZ 소속 버튜버 아야의 팬을 위해 제작된 종합 정보 플랫폼입니다. 아야가 부른 450여 곡의 노래 데이터를 체계적으로 관리하고, 팬들이 쉽게 검색하고 감상할 수 있는 환경을 제공합니다. Google Sheets와 MongoDB를 연동한 하이브리드 데이터 관리 시스템을 구축하여, 스트리머가 직접 시트를 수정하면 실시간으로 웹사이트에 반영되는 효율적인 콘텐츠 관리 시스템을 구현했습니다.',
      features: [
        '고도화된 다국어 검색 시스템 (한글 초성, 한/영 오타 허용, 띄어쓰기 무관)',
        'Google Sheets ↔ MongoDB 하이브리드 데이터 동기화',
        'YouTube MR 영상 재생 및 구간 점프 기능',
        '반응형 모바일 네비게이션 및 다크 모드 지원',
        '언어별 필터링 및 실시간 검색 결과 카운팅',
        'Virtual scrolling과 chunk 렌더링으로 450+ 곡 데이터 원활 처리'
      ],
      challenges: [
        {
          title: '한국어 검색 시스템 구현',
          description: '한글 초성 검색, 자모 분리, 한/영 오타 허용 등 복잡한 검색 로직 필요',
          solution: '지능형 검색 알고리즘을 개발하여 한국어 특성을 고려한 사용자 친화적 검색 구현'
        },
        {
          title: '대용량 데이터 성능 최적화',
          description: '450+ 곡 데이터를 원활하게 렌더링하고 검색하는 성능 문제',
          solution: 'Virtual scrolling과 chunk 렌더링 기법을 적용하여 성능 최적화'
        },
        {
          title: '실시간 데이터 동기화',
          description: 'Google Sheets와 MongoDB 간의 실시간 데이터 동기화 필요',
          solution: 'Google Sheets API를 활용한 하이브리드 데이터 관리 시스템 구축'
        }
      ]
    },
    createdAt: new Date(2024, 10, 1), // 2024년 11월
    updatedAt: new Date(2025, 0, 31)  // 2025년 1월
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter(project => project.category === category);
};

export default projects;