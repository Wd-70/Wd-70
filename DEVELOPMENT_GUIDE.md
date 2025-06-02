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

### 1. 애니메이션 시스템
- **Framer Motion**을 사용한 부드러운 전환 효과
- **페이지 전환 애니메이션**: 페이드 인/아웃 효과
- **스크롤 애니메이션**: 스크롤에 따른 요소 등장 효과
- **호버/포커스 효과**: 버튼 및 인터랙티브 요소에 마우스 오버 시 미세한 애니메이션 적용
- **로딩 상태**: 데이터 로딩 시 스켈레톤 UI와 로딩 인디케이터

### 2. 애니메이션 적용 가이드
1. **기본 애니메이션**: `motion` 컴포넌트를 사용한 기본적인 페이드인/슬라이드인 효과
   ```tsx
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5 }}
   >
     내용
   </motion.div>
   ```

2. **스태거 애니메이션**: 자식 요소에 순차적인 애니메이션 적용
   ```tsx
   const container = {
     hidden: { opacity: 0 },
     show: {
       opacity: 1,
       transition: { staggerChildren: 0.1 }
     }
   };
   
   const item = {
     hidden: { opacity: 0, y: 20 },
     show: { opacity: 1, y: 0 }
   };
   
   <motion.div variants={container} initial="hidden" animate="show">
     {items.map((item) => (
       <motion.div key={item.id} variants={item}>
         {item.content}
       </motion.div>
     ))}
   </motion.div>
   ```

3. **호버/탭 상호작용**:
   ```tsx
   <motion.button
     whileHover={{ scale: 1.05 }}
     whileTap={{ scale: 0.95 }}
   >
     버튼
   </motion.button>
   ```

4. **페이지 전환**: `AnimatePresence`를 사용한 컴포넌트 마운트/언마운트 애니메이션

### 3. 성능 고려사항
- `will-change` 속성을 사용하여 브라우저에 애니메이션 요소를 미리 알림
- `transform`과 `opacity` 속성을 우선적으로 사용하여 합성 스레드에서 애니메이션 처리
- 불필요한 리플로우 방지를 위해 `position: fixed` 또는 `position: absolute` 사용
- 모바일 기기에서는 감소된 모션 설정(`prefers-reduced-motion`) 고려

### 4. 활성 링크 스타일링
- 네비게이션 바에서 현재 활성화된 페이지 링크가 파란색으로 강조됩니다.
- 모바일 메뉴에서도 동일하게 활성 링크가 강조됩니다.
- `usePathname` 훅을 사용하여 현재 경로를 감지하고 스타일을 동적으로 적용합니다.

### 5. 페이지 전환 로딩 인디케이터
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
  - 부드러운 테마 전환 애니메이션 적용 (0.3초)
  - FOUC(Flash of Unstyled Content) 방지 처리
  - 시스템 테마 자동 감지
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
- [x] 애니메이션 효과 추가
- [ ] 다국어 지원 (i18n)
- [ ] 다크/라이트 모드 전환 효과 개선
- [ ] 프로젝트 필터링 기능
- [ ] 댓글 시스템 (Utterances 또는 Disqus 연동)

## 📞 연락처
- 개발자: Wd-70
- 이메일: [이메일 주소]
- GitHub: [GitHub 프로필 링크]

---

## 📝 연락처 폼 & 이메일 전송 기능

### 1. 구현된 기능
- **연락처 폼**: 방문자가 이름, 이메일, 메시지를 입력할 수 있는 반응형 폼
- **유효성 검증**: Zod를 사용한 클라이언트/서버 사이드 유효성 검증
- **이메일 전송**: nodemailer를 사용한 Gmail SMTP 연동
- **보안**: IP 주소 및 사용자 에이전트 로깅
- **사용자 피드백**: 성공/실패 시 토스트 알림

### 2. 기술 스택
- **프론트엔드**: React Hook Form, Sonner (토스트 알림)
- **백엔드**: Next.js API Routes
- **이메일**: nodemailer, Gmail SMTP
- **유효성 검증**: Zod
- **스타일링**: Tailwind CSS, Framer Motion (애니메이션)

### 3. 환경 변수 설정
```env
# Gmail SMTP 설정
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password  # Gmail 앱 비밀번호
EMAIL_TO=recipient@example.com  # 메시지를 받을 이메일 주소
```

### 4. Gmail 설정 가이드
1. [Google 계정 보안](https://myaccount.google.com/security)에서 2단계 인증 활성화
2. [앱 비밀번호](https://myaccount.google.com/apppasswords)에서 새 앱 비밀번호 생성
3. 앱 유형: "기타(이름 지정)" 선택 후 앱 이름 지정 (예: "포트폴리오 사이트")
4. 생성된 16자리 비밀번호를 `EMAIL_PASS`에 입력

### 5. 주요 파일 구조
```
src/
├── app/
│   └── contact/
│       └── page.tsx          # 연락처 페이지
│   └── api/
│       └── contact/
│           └── route.ts     # 연락처 API 라우트
├── components/
│   └── contact/
│       └── ContactForm.tsx  # 연락처 폼 컴포넌트
└── lib/
    ├── email.ts           # 이메일 전송 유틸리티
    └── validations/
        └── contact.ts    # 연락처 폼 유효성 검증 스키마
```

### 6. 향후 개선 사항
- [ ] 스팸 방지를 위한 reCAPTCHA 연동
- [ ] 이메일 템플릿 개선
- [ ] 관리자 페이지 연동 (메시지 관리)

---

## 📝 MongoDB 연락처 게시판 개발 계획 (예정)

### 1. 기술 스택
- **데이터베이스**: MongoDB Atlas (무료 티어)
- **API 라우트**: Next.js API Routes
- **ODM**: Mongoose
- **유효성 검증**: Zod
- **보안**: rate limiting, XSS 방지

### 2. 데이터 모델 (Mongoose 스키마)
```typescript
// models/ContactMessage.ts
import { Schema, model, models } from 'mongoose';

const ContactMessageSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false },
  ipAddress: { type: String },
  userAgent: { type: String }
});

export default models.ContactMessage || model('ContactMessage', ContactMessageSchema);
```

### 3. API 엔드포인트

#### 3.1 메시지 제출
```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import ContactMessage from '@/models/ContactMessage';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000)
});

export async function POST(request: Request) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const validation = contactSchema.safeParse(body);
    
    if (!validation.success) {
      return NextResponse.json(
        { error: '유효하지 않은 입력값입니다.' },
        { status: 400 }
      );
    }

    const message = await ContactMessage.create({
      ...validation.data,
      ipAddress: request.headers.get('x-forwarded-for'),
      userAgent: request.headers.get('user-agent')
    });

    return NextResponse.json({ success: true, data: message });
  } catch (error) {
    console.error('메시지 전송 오류:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
```

### 4. 프론트엔드 컴포넌트

#### 4.1 연락처 폼 컴포넌트
```tsx
// components/contact/ContactForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/lib/validations/contact';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

type FormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('전송 실패');
      
      toast({
        title: '전송 완료!',
        description: '메시지가 성공적으로 전송되었습니다.',
        variant: 'default'
      });
      reset();
    } catch (error) {
      toast({
        title: '오류 발생',
        description: '메시지 전송 중 오류가 발생했습니다.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="이름"
          {...register('name')}
          disabled={isLoading}
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>
      
      <div>
        <Input
          type="email"
          placeholder="이메일"
          {...register('email')}
          disabled={isLoading}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <Textarea
          placeholder="메시지를 입력하세요"
          rows={5}
          {...register('message')}
          disabled={isLoading}
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>
      
      <Button type="submit" disabled={isLoading}>
        {isLoading ? '전송 중...' : '메시지 보내기'}
      </Button>
    </form>
  );
}
```

### 5. 보안 조치
1. **Rate Limiting**: `@upstash/ratelimit`을 사용한 API 요청 제한
2. **XSS 방지**: `DOMPurify`로 사용자 입력값 정제
3. **CORS 설정**: 허용된 도메인에서만 API 접근 가능하도록 제한
4. **데이터 검증**: Zod를 사용한 서버/클라이언트 측 유효성 검증
5. **관리자 인증**: NextAuth.js를 활용한 관리자 전용 엔드포인트 보호

### 6. 배포 계획
1. **MongoDB Atlas 설정**
   - 무료 티어 클러스터 생성
   - 네트워크 액세스 제한 (Vercel IP 화이트리스트)
   - 데이터베이스 사용자 생성

2. **환경 변수 설정**
```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://your-domain.com
```

3. **Vercel 배포**
   - 환경 변수 설정 후 배포
   - 도메인 연결 (선택사항)

### 7. 유지보수 계획
1. **모니터링**: MongoDB Atlas의 모니터링 대시보드 활용
2. **백업**: MongoDB Atlas의 자동 백업 설정
3. **알림**: 관리자 이메일로 새로운 메시지 알림 설정
4. **정기 점검**: 주기적인 보안 업데이트 및 성능 최적화

---
*이 문서는 프로젝트 개발 가이드라인으로, 필요에 따라 업데이트됩니다.*
