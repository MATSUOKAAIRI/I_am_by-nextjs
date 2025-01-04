import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex items-center justify-center h-screen bg-green-200">
            <div className="bg-yellow-100 text-gray-700 rounded-3xl md:p-16 p-8 text-center max-w-6xl h-5/6 w-11/12 md:mt-0 mt-6">
                <Image src="/feather_green.png" alt="hero" width={80} height={80} />
                <h1 className="md:text-7xl text-[50px] font-bold mb-4 mt-8">Welcome to My Site!!</h1>
                <p className="md:text-2xl text-[16px] mb-5">ぜひ最後まで見てください</p>
                <div className="flex justify-end w-full md:mb-7 mb-1">
                <Image src="/hane.png" alt="hero" width={80} height={80} className="rounded-3xl"/>
                </div>
            </div>
        </div>
    );
}