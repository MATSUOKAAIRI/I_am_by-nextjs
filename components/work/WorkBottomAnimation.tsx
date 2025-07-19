'use client';
import { useWorkAnimation } from '@/hooks/useAnimation';

export default function WorkBottomAnimation() {
  const { buttombox } = useWorkAnimation();

  return (
    <div
      ref={buttombox}
      className="bg-yellow-400 w-16 h-16 sm:w-24 sm:h-24 mx-auto mt-8"
    />
  );
}
