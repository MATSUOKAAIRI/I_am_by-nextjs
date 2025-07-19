'use client';
import { useActionAnimation } from '@/hooks/useAnimation';

export default function ActionBottomAnimation() {
  const { buttombox } = useActionAnimation();

  return (
    <div
      ref={buttombox}
      className="bg-purple-400 w-16 h-16 sm:w-24 sm:h-24 mx-auto mt-8"
    ></div>
  );
}
