'use client';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const gfeather = useRef(null);
  const yfeather = useRef(null);
  const bg = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      leftRef.current,
      { y: '100%' },
      { y: '0%', duration: 1.2, ease: 'power2.inOut' }
    )
      .fromTo(
        rightRef.current,
        { y: '-100%' },
        { y: '0%', duration: 1.2, ease: 'power2.inOut' }
      )
      .to(
        leftRef.current,
        { x: '-100vw', opacity: 0, duration: 1, ease: 'power2.inOut' },
        '-=0.0'
      )
      .to(
        rightRef.current,
        { x: '100vw', opacity: 0, duration: 1, ease: 'power2.inOut' },
        '-=1.0'
      )
      .to(bg.current, {
        backgroundColor: '#18181b',
        duration: 1,
      });
  }, []);
  return (
    <div className="min-h-screen relative" ref={bg}>
      <div
        className="absolute top-0 left-0 w-full sm:w-1/2 h-screen bg-gray-200 z-40"
        ref={leftRef}
      ></div>
      <div
        className="absolute top-0 right-0 w-full sm:w-1/2 h-screen bg-gray-200 z-40"
        ref={rightRef}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[90vw] max-w-6xl text-center text-white">
        <Image
          src="/feather_green.png"
          alt="hero"
          width={80}
          height={80}
          ref={gfeather}
        />
        <h1 className="md:text-7xl text-[50px] font-bold mb-4 mt-8">
          Welcome to My Site!!
        </h1>
        <p className="md:text-2xl text-[16px] mb-5 text-center">
          ぜひ最後まで見てください
        </p>
        <div className="flex justify-end w-full md:mb-7 mb-1">
          <Image
            src="/hane.png"
            alt="hero"
            width={80}
            height={80}
            className="rounded-3xl"
            ref={yfeather}
          />
        </div>
      </div>
    </div>
  );
}
