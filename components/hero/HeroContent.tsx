import Image from 'next/image';

export default function HeroContent() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[90vw] max-w-6xl text-center text-white">
      <Image src="/feather_green.png" alt="hero" width={80} height={80} />
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
        />
      </div>
    </div>
  );
}
