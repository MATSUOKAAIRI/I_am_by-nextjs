import style1 from './about.module.css';
import Image from 'next/image';

export default function About(){
    return( 
<div  className="flex items-center justify-center bg-green-200 mt-8 mb-16">
    <div className='bg-yellow-100 text-gray-700 rounded-3xl p-16 items-center max-w-6xl h-5/6 w-full justify-center'>
        <h1 className="text-7xl font-bold mb-6">About Me</h1>
        <div className='flex justify-center mb-4 underline decoration-red-800 underline-offset-8'>
            <img src="./アイコン.jpg" alt="hero" width={90} height={90} className="rounded-3xl items-start"/>
            <p className="text-[50px] ">名前:　</p>
            <h4 className="text-center text-[50px]">りぃ</h4>
        </div>
     


        <div className='flex justify-center mb-4 underline decoration-red-800 underline-offset-8 left-10'>
            <p className="text-[50px] mt-.5">出身:　</p>
            <h4 className="text-center text-[50px]">富山県</h4>
        </div>
           <div className='flex justify-center mb-4 underline decoration-red-800 underline-offset-8'>
            <p className="text-[50px] mt-.5 ">好きな食べ物:　</p>
            <h4 className="text-center text-[50px]">ラーメン</h4>
        </div>
        <div className='flex justify-center mb-1 underline decoration-red-800 underline-offset-8'>
            <p className="text-[50px] mt-.5">趣味:　</p>
            <h4 className="text-center text-[50px]">動画視聴、読書</h4>
        </div>
    </div>
</div>
    )
}