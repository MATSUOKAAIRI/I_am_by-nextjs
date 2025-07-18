'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function Action() {
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
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-purple-400"
      ></div>
      <div className="flex items-center justify-end mb-8 mt-8 right-0 sm:mb-12 px-4">
        <div className=" text-white rounded-3xl p-6 sm:p-10 w-full max-w-5xl bg-zinc-900 border">
          <div className="flex">
            <h1 className="md:text-7xl text-4xl font-bold mb-6">Action</h1>
            <h1 className="md:text-6xl text-3xl font-bold mb-6">
              (参加イベント)
            </h1>
          </div>
          <div className="mb-4 underline decoration-cyan-400 underline-offset-8">
            <h3 className="md:text-[40px] text-[20px]">2024年度:　</h3>
            <div className="flex flex-col w-full ml-8">
              <p className="md:text-[40px] text-[20px]">
                ・ミニセキュリティキャンプin石川
              </p>
              <p className="md:text-[40px] text-[20px]">・BuriKaigi2025</p>
              <p className="md:text-[40px] text-[20px]">
                ・P3NFEST 2025 Winter
              </p>
              <p className="md:text-[40px] text-[20px]">・技育祭 2025 春</p>
            </div>
          </div>
          <div className="mb-4 underline decoration-cyan-400 underline-offset-8">
            <h3 className="md:text-[40px] text-[20px]">2025年度:　</h3>
            <div className="flex flex-col w-full ml-8">
              <p className="md:text-[40px] text-[20px]">
                ・技育ハッカソン Vol.2
              </p>
              <p className="md:text-[40px] text-[20px]">
                ・技育キャラバン in 金沢
              </p>
              <p className="md:text-[40px] text-[20px]">・Diver CTF</p>
              <p className="md:text-[40px] text-[20px]">・技育博 Vol.3</p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={buttombox}
        className=" bg-purple-400 absolute right-0 w-16 h-16 ms:w-24 ms:h-24"
      ></div>
    </div>
  );
}
