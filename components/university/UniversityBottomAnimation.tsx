'use client';
import { useUniversityAnimation } from '@/hooks/useAnimation';

export default function UniversityBottomAnimation() {
  const { buttombox } = useUniversityAnimation();

  return (
    <div
      ref={buttombox}
      className="bg-green-400 w-16 h-16 sm:w-24 sm:h-24 mx-auto mt-8"
    ></div>
  );
}
