import Image from 'next/image';

export default function AboutContent() {
  return (
    <div className="mt-8 mb-8 sm:mb-12 px-4">
      <div className="text-white rounded-3xl p-6 sm:p-10 w-full max-w-5xl border bg-zinc-900">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6">
          About Me
        </h1>
        <div className="flex mb-4 underline decoration-cyan-400 underline-offset-8">
          <Image
            src="/アイコン.jpg"
            alt="hero"
            width={90}
            height={90}
            className="rounded-3xl md:mb-0 md:mr-4"
          />
          <p className="md:text-[40px] text-[20px]">名前:　</p>
          <h4 className="text-center md:text-[40px] text-[20px]">りぃ</h4>
        </div>
        <div className="flex mb-4 underline decoration-cyan-400 underline-offset-8">
          <p className="md:text-[40px] text-[20px]">出身:　</p>
          <h4 className="text-center md:text-[40px] text-[20px]">富山県</h4>
        </div>
        <div className="flex mb-4 underline decoration-cyan-400 underline-offset-8">
          <p className="md:text-[40px] text-[20px]">好きな食べ物:　</p>
          <h4 className="text-center md:text-[40px] text-[20px]">ラーメン</h4>
        </div>
        <div className="flex mb-4 underline decoration-cyan-400 underline-offset-8">
          <p className="md:text-[40px] text-[20px]">趣味:　</p>
          <h4 className="text-center md:text-[40px] text-[20px]">
            動画視聴、読書
          </h4>
        </div>
      </div>
    </div>
  );
}
