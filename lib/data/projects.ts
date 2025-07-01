const now = new Date();

export type ProjectCategory = 'mobile' | 'web' | 'automation';

export interface PricingTier {
  price: number;
  features: string[];
  description?: string;
}

export interface ProjectPricing {
  standard: PricingTier;
  deluxe: PricingTier;
  premium: PricingTier;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  thumbnail: string;
  tags: string[];
  pricing: ProjectPricing;
  gallery: string[];
  techStack: string[];
  details?: {
    overview?: string;
    features?: string[];
    challenges?: string[];
    solutions?: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

const defaultPricing: ProjectPricing = {
  standard: {
    price: 500000,
    features: [
      '기본 기능 제공',
      '1회 수정 가능',
      '기본 디자인 제공'
    ],
    description: '기본적인 기능을 갖춘 표준 버전'
  },
  deluxe: {
    price: 1000000,
    features: [
      '표준 기능 포함',
      '3회 수정 가능',
      '커스텀 디자인',
      '기본 호스팅 지원'
    ],
    description: '추가 기능과 커스터마이징이 가능한 디럭스 버전'
  },
  premium: {
    price: 2000000,
    features: [
      '디럭스 기능 포함',
      '무제한 수정',
      '프리미엄 디자인',
      '우선 지원',
      '도메인 & 호스팅 설정 지원'
    ],
    description: '프리미엄 기능과 우선 지원이 포함된 최상위 버전'
  }
};

export const projects: Project[] = [
  {
    id: 'birthday-app',
    title: '생일축하 앱',
    category: 'mobile',
    description: '특별한 날을 기념하고 축하 메시지를 공유할 수 있는 모바일 애플리케이션',
    thumbnail: '/images/projects/birthday-app-thumb.jpg',
    tags: ['Flutter', '모바일', '소셜'],
    pricing: {
      ...defaultPricing,
      standard: {
        ...defaultPricing.standard,
        price: 500000,
        features: [
          '기본 생일 알림',
          '기본 테마 3종',
          '1회 수정 가능'
        ]
      },
      deluxe: {
        ...defaultPricing.deluxe,
        price: 1000000,
        features: [
          '사용자 정의 테마',
          'SNS 공유 기능',
          '3회 수정 가능',
          '푸시 알림'
        ]
      },
      premium: {
        ...defaultPricing.premium,
        price: 2000000,
        features: [
          '커스텀 애니메이션',
          '클라우드 동기화',
          '무제한 수정',
          '우선 지원'
        ]
      }
    },
    gallery: [
      '/images/projects/birthday-app-1.jpg',
      '/images/projects/birthday-app-2.jpg',
      '/images/projects/birthday-app-3.jpg'
    ],
    techStack: ['Flutter', 'Dart', 'Firebase'],
    details: {
      overview: '사용자들이 가족, 친구, 지인들의 생일을 등록하고 관리할 수 있으며, 생일이 다가오면 알림을 받고 축하 메시지를 보낼 수 있는 애플리케이션입니다.',
      features: [
        '생일 등록 및 관리',
        '다가오는 생일 알림',
        '사용자 정의 테마',
        'SNS 공유 기능',
        '오프라인 동작 지원'
      ],
      challenges: [
        '다양한 기기에서의 일관된 UI/UX 구현',
        '오프라인 상태에서의 데이터 동기화',
        '배터리 효율적인 알림 시스템 구축'
      ],
      solutions: [
        'Flutter의 크로스 플랫폼 기능을 활용하여 iOS와 Android에서 일관된 경험 제공',
        '로컬 데이터베이스와 클라우드 동기화를 통한 오프라인 지원',
        'Firebase Cloud Messaging을 활용한 효율적인 알림 시스템 구현'
      ]
    },
    createdAt: new Date(2024, 0, 15),
    updatedAt: now
  },
  {
    id: 'pomodoro-timer',
    title: '포모도로 타이머',
    category: 'mobile',
    description: '집중력 향상을 위한 포모도로 타이머 애플리케이션',
    thumbnail: '/images/projects/pomodoro-timer-thumb.jpg',
    tags: ['Flutter', '생산성', '타이머'],
    pricing: {
      ...defaultPricing,
      standard: {
        ...defaultPricing.standard,
        price: 300000,
        features: [
          '기본 타이머 기능',
          '간단한 통계',
          '1회 수정 가능'
        ]
      },
      deluxe: {
        ...defaultPricing.deluxe,
        price: 700000,
        features: [
          '상세 통계',
          '테마 커스터마이징',
          '3회 수정 가능',
          '백업/복원 기능'
        ]
      },
      premium: {
        ...defaultPricing.premium,
        price: 1500000,
        features: [
          '클라우드 동기화',
          '맞춤형 리포트',
          '무제한 수정',
          '우선 지원'
        ]
      }
    },
    gallery: [
      '/images/projects/pomodoro-timer-1.jpg',
      '/images/projects/pomodoro-timer-2.jpg',
      '/images/projects/pomodoro-timer-3.jpg'
    ],
    techStack: ['Flutter', 'Dart', 'Hive'],
    details: {
      overview: '포모도로 기법을 활용한 생산성 향상 타이머 애플리케이션으로, 집중 시간과 휴식 시간을 효과적으로 관리할 수 있도록 도와줍니다.',
      features: [
        '사용자 정의 가능한 타이머 설정',
        '세부 통계 및 진행 상황 추적',
        '다양한 테마 및 소리 알림',
        '태스크 관리 기능',
        '오프라인 사용 가능'
      ],
      challenges: [
        '정확한 타이밍 유지',
        '배터리 효율적인 백그라운드 실행',
        '사용자 친화적인 UI/UX 디자인'
      ],
      solutions: [
        'Flutter의 Timer 클래스를 활용한 정밀한 타이밍 제어',
        'WorkManager를 활용한 안정적인 백그라운드 작업 처리',
        'Material Design 3 가이드라인을 준수한 직관적인 인터페이스 구현'
      ]
    },
    createdAt: new Date(2024, 2, 10),
    updatedAt: now
  },
  {
    id: 'bible-fill-blanks',
    title: '계시록 빈칸채우기',
    category: 'mobile',
    description: '성경 말씀을 공부하며 빈칸을 채워가는 성경 학습 애플리케이션',
    thumbnail: '/images/projects/bible-fill-blanks-thumb.jpg',
    tags: ['Flutter', '종교', '교육'],
    pricing: {
      ...defaultPricing,
      standard: {
        ...defaultPricing.standard,
        price: 800000,
        features: [
          '기본 성경 본문 제공',
          '빈칸 채우기 퀴즈',
          '1회 수정 가능'
        ]
      },
      deluxe: {
        ...defaultPricing.deluxe,
        price: 1500000,
        features: [
          '개인화된 학습 추적',
          '다양한 난이도 설정',
          '3회 수정 가능',
          '오프라인 사용 가능'
        ]
      },
      premium: {
        ...defaultPricing.premium,
        price: 3000000,
        features: [
          '맞춤형 콘텐츠 제작',
          '관리자 대시보드',
          '무제한 수정',
          '우선 지원 및 유지보수'
        ]
      }
    },
    gallery: [
      '/images/projects/bible-fill-blanks-1.jpg',
      '/images/projects/bible-fill-blanks-2.jpg',
      '/images/projects/bible-fill-blanks-3.jpg'
    ],
    techStack: ['Flutter', 'Firebase', 'SQLite'],
    details: {
      overview: '성경 말씀을 효과적으로 암기하고 이해할 수 있도록 돕는 인터랙티브한 학습 애플리케이션입니다. 사용자들은 성경 구절의 빈칸을 채우며 말씀을 깊이 있게 공부할 수 있습니다.',
      features: [
        '다양한 성경 버전 지원',
        '개인별 학습 진행 상황 추적',
        '맞춤형 퀴즈 생성',
        '오프라인 모드 지원',
        '성경 구절 공유 기능'
      ],
      challenges: [
        '대용량 성경 데이터 효율적 관리',
        '사용자별 학습 진행 상황 추적',
        '오프라인 환경에서의 원활한 사용자 경험 제공'
      ],
      solutions: [
        'Firebase Firestore와 SQLite를 활용한 효율적인 데이터 관리',
        '사용자 인증 시스템과 연동된 개인화된 학습 경로 제공',
        '로컬 데이터베이스를 활용한 오프라인 지원 및 동기화 기능 구현'
      ]
    },
    createdAt: new Date(2023, 11, 5),
    updatedAt: now
  },
  {
    id: 'portfolio-website',
    title: '포트폴리오 웹사이트',
    category: 'web',
    description: '개발자 포트폴리오를 위한 현대적이고 반응형 웹사이트',
    thumbnail: '/images/projects/portfolio-website-thumb.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    pricing: {
      ...defaultPricing,
      standard: {
        ...defaultPricing.standard,
        price: 1000000,
        features: [
          '반응형 디자인',
          '기본 SEO 최적화',
          '1회 수정 가능'
        ]
      },
      deluxe: {
        ...defaultPricing.deluxe,
        price: 2000000,
        features: [
          '커스텀 디자인',
          '콘텐츠 관리 시스템 연동',
          '3회 수정 가능',
          '기본 호스팅 설정'
        ]
      },
      premium: {
        ...defaultPricing.premium,
        price: 4000000,
        features: [
          '프리미엄 디자인',
          '맞춤형 애니메이션',
          '무제한 수정',
          '도메인 및 호스팅 설정 포함'
        ]
      }
    },
    gallery: [
      '/images/projects/portfolio-website-1.jpg',
      '/images/projects/portfolio-website-2.jpg',
      '/images/projects/portfolio-website-3.jpg'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    details: {
      overview: '개발자의 프로젝트와 기술 스택을 효과적으로 보여줄 수 있는 현대적이고 반응형 포트폴리오 웹사이트입니다. 모바일과 데스크톱에서 모두 최적화된 사용자 경험을 제공합니다.',
      features: [
        '반응형 디자인 (모바일, 태블릿, 데스크톱 최적화)',
        '다크 모드 지원',
        '애니메이션 및 전환 효과',
        'SEO 최적화',
        '접근성 고려 사항 준수'
      ],
      challenges: [
        '다양한 기기와 브라우저에서의 일관된 디스플레이',
        '로딩 성능 최적화',
        '접근성 표준 준수'
      ],
      solutions: [
        'Tailwind CSS를 활용한 반응형 디자인 구현',
        '이미지 최적화 및 코드 분할을 통한 성능 개선',
        'WAI-ARIA 표준 준수 및 키보드 내비게이션 지원'
      ]
    },
    createdAt: new Date(2024, 1, 20),
    updatedAt: now
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return projects.filter(project => project.category === category);
};

// Re-export the projects array for direct usage
export default projects;
