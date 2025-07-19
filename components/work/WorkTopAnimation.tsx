'use client';
import { useWorkAnimation } from '@/hooks/useAnimation';

export default function WorkTopAnimation() {
  const { topbox } = useWorkAnimation();

  return (
    <div
      ref={topbox}
      className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-yellow-400 mx-auto"
    />
  );
}
