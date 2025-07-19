'use client';
import { useDoAnimation } from '@/hooks/useAnimation';

export default function DoBottomAnimation() {
  const { buttombox } = useDoAnimation();

  return (
    <div
      ref={buttombox}
      className="bg-red-400 w-16 h-16 sm:w-24 sm:h-24 mx-auto mt-8"
    ></div>
  );
}
