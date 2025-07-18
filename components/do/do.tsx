'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function Doing() {
  const topbox = useRef(null);
  const buttombox = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(topbox.current, {
      scrollTrigger: {
        trigger: topbox.current,
        start: 'bottom 99%',
        end: 'top 1%',
        scrub: true,
      },
      x: '80vw',
      rotation: 1080,
      ease: 'none',
      duration: 3,
    });
    gsap.to(buttombox.current, {
      scrollTrigger: {
        trigger: topbox.current,
        start: 'bottom 99%',
        end: 'top 1%',
        scrub: true,
      },
      x: '-80vw',
      rotation: -1080,
      ease: 'none',
      duration: 3,
    });
  }, []);
  return (
    <div className="sm:min-h-screen mb-40 sm:mb-16">
      <div
        ref={topbox}
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-red-400"
      ></div>
      <div className="mt-8 mb-8 sm:mb-12 px-4">
        <div className="text-white rounded-3xl p-6 sm:p-10 w-full max-w-5xl border bg-zinc-900">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6">
            Doing
          </h1>

          <div className="mb-6 underline decoration-cyan-400 underline-offset-8">
            <h4 className="md:text-[40px] text-[20px] mb-2">興味分野:</h4>
            <p className="md:text-[40px] text-[20px]">
              セキュリティ、Webフロントエンド
            </p>
          </div>

          <div className="mb-6 underline decoration-cyan-400 underline-offset-8">
            <h4 className="md:text-[40px] text-[20px] mb-2">言語:</h4>
            <p className="md:text-[40px] text-[20px]">
              Python、React、HTML、CSS、JavaScript
            </p>
          </div>
        </div>
      </div>
      <div
        ref={buttombox}
        className="bg-red-400 absolute right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24"
      ></div>
    </div>
  );
}
