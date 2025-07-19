'use client';
import HeroAnimation from './HeroAnimation';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <div className="relative">
      <HeroAnimation />
      <HeroContent />
    </div>
  );
}
