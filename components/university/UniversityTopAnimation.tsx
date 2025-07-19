'use client';
import { useUniversityAnimation } from '@/hooks/useAnimation';

export default function UniversityTopAnimation() {
  const { topbox } = useUniversityAnimation();

  return (
    <div
      ref={topbox}
      className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-green-400"
    ></div>
  );
}
