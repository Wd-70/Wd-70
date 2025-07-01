/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Framer Motion ESM 호환성 설정
  experimental: {
    // serverExternalPackages는 Next.js 15에서 제거된 옵션
  },
  // Framer Motion을 위한 웹팩 설정 + WSL 핫 리로딩 설정
  webpack: (config, { dev }) => {
    // Framer Motion ESM 호환성 설정
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    
    // WSL 환경에서의 핫 리로딩 설정
    if (dev) {
      config.watchOptions = {
        poll: 1000,                    // 1초마다 파일 변경 감지
        aggregateTimeout: 300,         // 300ms 동안 변경사항 수집 후 리빌드
        ignored: [                     // 감시 제외 폴더들
          '**/node_modules/**',
          '**/.git/**',
          '**/.next/**'
        ],
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;
