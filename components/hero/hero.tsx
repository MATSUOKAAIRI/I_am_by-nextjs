import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex items-center justify-center h-screen bg-green-200">
            <div className="bg-yellow-100 text-gray-700 rounded-3xl p-16 text-center max-w-6xl h-4/5 w-full justify-center">
                <img src="./feather_green.png" alt="hero" width={80} height={80} />
                <h1 className="text-7xl font-bold mb-4 mt-8">Welcome to My Site!!</h1>
                <p className="text-2xl mb-5">ぜひ最後まで見てください</p>
                <div className="flex justify-end w-full mb-7">
                <img src="./hane.png" alt="hero" width={80} height={80} className="rounded-3xl"/>
                </div>
            </div>
        </div>
    );
}