'use client';
import DoBottomAnimation from './DoBottomAnimation';
import DoContent from './DoContent';
import DoTopAnimation from './DoTopAnimation';

export default function Doing() {
  return (
    <div className="sm:min-h-screen mb-40 sm:mb-16">
      <DoTopAnimation />
      <DoContent />
      <DoBottomAnimation />
    </div>
  );
}
