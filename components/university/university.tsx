'use client';
import UniversityBottomAnimation from './UniversityBottomAnimation';
import UniversityContent from './UniversityContent';
import UniversityTopAnimation from './UniversityTopAnimation';

export default function University() {
  return (
    <div className="md:min-h-screen mb-40 sm:mb-16">
      <UniversityTopAnimation />
      <UniversityContent />
      <UniversityBottomAnimation />
    </div>
  );
}
