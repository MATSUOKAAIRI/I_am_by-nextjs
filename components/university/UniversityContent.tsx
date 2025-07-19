export default function UniversityContent() {
  return (
    <div className="flex items-center justify-end mb-8 mt-8 right-0 sm:mb-12 px-4">
      <div className="text-white rounded-3xl p-6 sm:p-10 w-full max-w-5xl bg-zinc-900 border">
        <h1 className="md:text-7xl text-5xl font-bold mb-6 ml-6">University</h1>
        <div className="md:flex mb-4 ml-8 underline decoration-cyan-400 underline-offset-8">
          <h2 className="md:text-[40px] text-[20px]">大学:　</h2>
          <h3 className="md:text-[40px] text-center text-[20px]">
            KIT 工学部情報工学科2年
          </h3>
        </div>
        <div className="mb-4 ml-8 underline decoration-cyan-400 underline-offset-8">
          <h3 className="text-xl sm:text-2xl md:text-4xl mb-2 text-left">
            課外活動:
          </h3>
          <div className="flex flex-col w-full">
            <p className="md:text-[40px] text-[20px]">
              ・セキュリティアッププロジェクト
            </p>
            <p className="md:text-[40px] text-[20px]">
              ・フードクリエーションプロジェクトWeb班
            </p>
            <p className="md:text-[40px] text-[20px]">
              ・CirKit　2025年度学生副リーダー
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
