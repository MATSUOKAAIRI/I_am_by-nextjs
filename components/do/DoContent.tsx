export default function DoContent() {
  return (
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
  );
}
