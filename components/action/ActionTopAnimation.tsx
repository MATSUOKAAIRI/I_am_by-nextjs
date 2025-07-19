'use client';
import { useActionAnimation } from '@/hooks/useAnimation';

export default function ActionTopAnimation() {
  const { topbox } = useActionAnimation();

  return (
    <div
      ref={topbox}
      className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-purple-400"
    ></div>
  );
}
