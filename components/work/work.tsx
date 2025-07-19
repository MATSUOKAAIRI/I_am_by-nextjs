'use client';
import { useWorkAnimation } from '@/hooks/useAnimation';
import WorkBottomAnimation from './WorkBottomAnimation';
import WorkContent from './WorkContent';
import WorkTopAnimation from './WorkTopAnimation';

export default function Work() {
  const { boxRefs } = useWorkAnimation();

  return (
    <div className="sm:min-h-screen mb-40 sm:mb-16">
      <WorkTopAnimation />
      <WorkContent boxRefs={boxRefs} />
      <WorkBottomAnimation />
    </div>
  );
}
