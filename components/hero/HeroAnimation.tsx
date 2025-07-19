'use client';
import { useHeroAnimation } from '@/hooks/useAnimation';

export default function HeroAnimation() {
  const { leftRef, rightRef, bg } = useHeroAnimation();

  return (
    <div className="min-h-screen relative" ref={bg}>
      <div
        className="absolute top-0 left-0 w-full sm:w-1/2 h-screen bg-gray-200 z-40"
        ref={leftRef}
      ></div>
      <div
        className="absolute top-0 right-0 w-full sm:w-1/2 h-screen bg-gray-200 z-40"
        ref={rightRef}
      ></div>
    </div>
  );
}
