import style1 from './do.module.css';

export default function Do(){
    return(
        <div className="flex items-center justify-center bg-green-200 mb-16 mt-8"> 
            <div className='bg-yellow-100 text-gray-700 rounded-3xl p-16 items-center max-w-6xl h-5/6 w-full justify-center'>

                <h1 className="text-7xl font-bold mb-6">Doing</h1>
                <div className=' justify-center mb-4 underline decoration-red-800 underline-offset-8'>
                <h4 className="text-[50px] ">興味分野:</h4>
                <p className="text-[50px] text-center">セキュリティ、Webフロントエンド</p>
                </div>
                <div className=' justify-center mb-4 underline decoration-red-800 underline-offset-8'>
                <h4 className="text-[50px] ">言語:</h4>
                <p className="text-[50px] text-center">python、Next.js、react、HTML、CSS、JavaScript</p>
                </div>
            </div>
        </div>
    )
}