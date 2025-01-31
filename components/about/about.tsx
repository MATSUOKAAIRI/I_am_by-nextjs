import Image from 'next/image';

export default function About(){
    return( 
<div  className="flex items-center justify-center bg-green-200 mt-8 mb-16">
    <div className='bg-yellow-100 text-gray-700 rounded-3xl md:p-16 max-w-6xl h-5/6 w-11/12 justify-center'>
        <h1 className="md:text-7xl text-5xl font-bold mb-6 ml-6">About Me</h1>
        <div className='flex justify-center mb-4 underline decoration-red-800 underline-offset-8'>
            <Image src="/アイコン.jpg" alt="hero" width={90} height={90} className="rounded-3xl md:mb-0 md:mr-4"/>
            <p className="md:text-[40px] text-[20px]">名前:　</p>
            <h4 className="text-center md:text-[40px] text-[20px]">りぃ</h4>
        </div>
        <div className='flex justify-center mb-4 underline decoration-red-800 underline-offset-8'>
            <p className="md:text-[40px] text-[20px]">出身:　</p>
            <h4 className="text-center md:text-[40px] text-[20px]">富山県</h4>
        </div>
        <div className='flex justify-center mb-4 underline decoration-red-800 underline-offset-8'>
            <p className="md:text-[40px] text-[20px]">好きな食べ物:　</p>
            <h4 className="text-center md:text-[40px] text-[20px]">ラーメン</h4>
        </div>
        <div className='flex justify-center mb-4 underline decoration-red-800 underline-offset-8'>
            <p className="md:text-[40px] text-[20px]">趣味:　</p>
            <h4 className="text-center md:text-[40px] text-[20px]">動画視聴、読書</h4>
        </div>
    </div>
</div>
    )
}