'use client';
import { useAboutAnimation } from '@/hooks/useAnimation';

export default function AboutBottomAnimation() {
  const { buttombox } = useAboutAnimation();

  return (
    <div
      ref={buttombox}
      className="bg-blue-400 w-16 h-16 sm:w-24 sm:h-24 mx-auto mt-8"
    ></div>
  );
}
