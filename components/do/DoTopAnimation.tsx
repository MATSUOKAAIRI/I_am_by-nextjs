'use client';
import { useDoAnimation } from '@/hooks/useAnimation';

export default function DoTopAnimation() {
  const { topbox } = useDoAnimation();

  return (
    <div
      ref={topbox}
      className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-red-400"
    ></div>
  );
}
