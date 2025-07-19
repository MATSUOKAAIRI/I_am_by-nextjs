'use client';
import { useAboutAnimation } from '@/hooks/useAnimation';

export default function AboutTopAnimation() {
  const { topbox } = useAboutAnimation();

  return (
    <div
      ref={topbox}
      className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-blue-400"
    ></div>
  );
}
