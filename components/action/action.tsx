'use client';
import ActionBottomAnimation from './ActionBottomAnimation';
import ActionContent from './ActionContent';
import ActionTopAnimation from './ActionTopAnimation';

export default function Action() {
  return (
    <div className="sm:min-h-screen mb-40 sm:mb-16">
      <ActionTopAnimation />
      <ActionContent />
      <ActionBottomAnimation />
    </div>
  );
}
