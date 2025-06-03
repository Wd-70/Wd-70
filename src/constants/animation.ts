// 애니메이션 기본값
export const ANIMATION_CONFIG = {
  // 페이지 전환 애니메이션
  pageTransition: {
    duration: 0.3,
    ease: [0.16, 1, 0.3, 1],
    // exitDuration: 0.3,
  },
} as const;

// 애니메이션 타입
export type AnimationVariant = keyof typeof ANIMATION_CONFIG;
export interface AnimationProps {
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number | 'some' | 'all';
}
