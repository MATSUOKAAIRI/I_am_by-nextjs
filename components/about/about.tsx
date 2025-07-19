'use client';
import AboutBottomAnimation from './AboutBottomAnimation';
import AboutContent from './AboutContent';
import AboutTopAnimation from './AboutTopAnimation';

export default function About() {
  return (
    <div className="sm:min-h-screen mb-40 sm:mb-16">
      <AboutTopAnimation />
      <AboutContent />
      <AboutBottomAnimation />
    </div>
  );
}
