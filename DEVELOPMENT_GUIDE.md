# Wd-70 개발자 포트폴리오 - 개발 가이드

## 📌 프로젝트 개요
- **목표**: Wd-70 개발자의 프로필과 포트폴리오를 소개하는 현대적 웹사이트
- **주요 기술**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **배포**: Vercel (무료 계정)

## 🛠 기술 스택

### 핵심 기술
- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **애니메이션**: Framer Motion
- **폰트**: Noto Sans KR, Inter, Fira Code

### 주요 라이브러리
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "framer-motion": "^10.0.0",
    "next-themes": "^0.2.1",
    "react-intersection-observer": "^9.5.0",
    "react-icons": "^4.10.0",
    "react-markdown": "^8.0.0"
  }
}
```

## 🎨 디자인 시스템

### 색상 팔레트
```js
const colors = {
  primary: '#2563EB',
  secondary: '#7C3AED',
  accent: '#3B82F6',
  dark: '#0F172A',
  light: '#F8FAFC',
  // ...
};
```

### 타이포그래피
- **제목**: Noto Sans KR (Bold)
- **본문**: Inter (Regular)
- **코드**: Fira Code (Mono)

## 📁 프로젝트 구조

```
app/
├── (home)/
│   └── page.tsx
├── about/
│   └── page.tsx
├── projects/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── contact/
│   └── page.tsx
└── layout.tsx
```

```
components/
├── layout/              # 레이아웃 컴포넌트
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PageTransition.tsx  # 페이지 전환 로딩 인디케이터
│   └── ThemeToggle.tsx
├── ui/                  # UI 컴포넌트
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Section.tsx
└── sections/            # 페이지 섹션
    ├── Hero.tsx
    ├── About.tsx
    ├── Projects.tsx
    └── Contact.tsx
```

## 🚀 개발 가이드

### 1. 개발 서버 실행
```bash
npm run dev
```

## 🎨 UI/UX 개선 사항

### 1. 활성 링크 스타일링
- 네비게이션 바에서 현재 활성화된 페이지 링크가 파란색으로 강조됩니다.
- 모바일 메뉴에서도 동일하게 활성 링크가 강조됩니다.
- `usePathname` 훅을 사용하여 현재 경로를 감지하고 스타일을 동적으로 적용합니다.

### 2. 페이지 전환 로딩 인디케이터
- 페이지 전환 시 상단에 로딩 바가 표시됩니다.
- `PageTransition` 컴포넌트가 레이아웃에 추가되어 모든 페이지에서 작동합니다.
- CSS 애니메이션을 사용하여 부드러운 로딩 효과를 제공합니다.

## 🚀 개발 가이드

### 1. 개발 서버 실행
```bash
npm run dev
```

### 2. 빌드 및 배포
```bash
# 프로덕션 빌드
npm run build

# Vercel에 배포
vercel --prod
```

### 3. 코드 스타일
- **컴포넌트**: PascalCase (예: `MyComponent.tsx`)
- **훅**: camelCase with 'use' prefix (예: `useScrollPosition.ts`)
- **스타일**: Tailwind CSS 클래스 사용
- **타입**: TypeScript 타입 명시 필수

### 4. 커밋 메시지 컨벤션
```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락 등
refactor: 코드 리팩토링
test: 테스트 코드 추가/수정
chore: 빌드 프로세스, 패키지 매니저 설정 등
```

## 📱 반응형 디자인
- Mobile First 접근 방식
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🎯 성능 최적화
- 이미지 최적화: `next/image` 사용
- 코드 분할: 동적 임포트 활용
- 정적 생성: SSG/ISR 활용

## 🔄 배포
1. GitHub 저장소에 푸시
2. Vercel과 GitHub 연동
3. 환경 변수 설정
4. 자동 배포 활성화

## 📅 개발 일정
1. **1주차**: 프로젝트 설정 및 기본 레이아웃 ✅
2. **2주차**: 메인 섹션 개발 ✅
3. **3주차**: 프로젝트 섹션 개발 ✅
   - 프로젝트 목록 페이지 구현
   - 프로젝트 상세 페이지 구현
   - 프로젝트 카드 컴포넌트 개발
   - 태그 시스템 추가
4. **4주차**: 연락처 섹션 및 반응형
5. **5주차**: 성능 최적화
6. **6주차**: 배포 및 문서화

## 🚀 개발 현황

### 완료된 작업
- [x] 프로젝트 기본 구조 설정
- [x] 테마 시스템 구현 (다크/라이트 모드)
- [x] 반응형 네비게이션 바
- [x] 메인 페이지 (Hero 섹션)
- [x] 프로젝트 목록 페이지
- [x] 프로젝트 상세 페이지
- [x] 프로젝트 카드 컴포넌트
- [x] 태그 시스템

### 진행 중인 작업
- [ ] 연락처 페이지
- [ ] 블로그 섹션
- [ ] SEO 최적화
- [ ] 성능 최적화

### 향후 계획
- [ ] 애니메이션 효과 추가
- [ ] 다국어 지원 (i18n)
- [ ] 다크/라이트 모드 전환 효과 개선
- [ ] 프로젝트 필터링 기능
- [ ] 댓글 시스템 (Utterances 또는 Disqus 연동)

## 📞 연락처
- 개발자: Wd-70
- 이메일: [이메일 주소]
- GitHub: [GitHub 프로필 링크]

---
*이 문서는 프로젝트 개발 가이드라인으로, 필요에 따라 업데이트됩니다.*
