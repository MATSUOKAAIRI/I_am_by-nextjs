import Link from "next/link";

export default function  Work(){
    return(
<div  className="flex items-center justify-center bg-green-200 mt-8 mb-16">
    <div className='bg-yellow-100 text-gray-700 rounded-3xl md:p-16 max-w-6xl h-5/6 w-11/12 justify-center'>
        <div className="flex ml-6">
            <h1 className="md:text-7xl text-5xl font-bold mb-6">Works</h1>
            <h1 className="md:text-6xl text-4xl font-bold mb-6">(開発物)</h1>
        </div>
        <div className='flex flex-col justify-center mb-4 underline decoration-red-800 underline-offset-8'>
            <p className="md:text-[40px] text-[20px]">個人:　</p>            
            <Link href="https://emergencyfood.vercel.app/"><p className="md:text-[40px] text-[20px]">非常食アプリ</p></Link>
            <p className="md:text-[40px] text-[20px]">時間割アプリ</p>
            <p className="md:text-[40px] text-[20px]"></p>
            <p className="md:text-[40px] text-[20px]"></p>
        </div>
        <div className='flex flex-col justify-center mb-4 underline decoration-red-800 underline-offset-8'>
            <p className="md:text-[40px] text-[20px]">チーム開発:　</p>
            <p className="md:text-[40px] text-[20px]">カラーアクセシビリティチェッカー</p>
        </div>
    </div>
</div>
    )
}