export default function Do(){
    return(
        <div className="flex items-center justify-center bg-green-200 mt-8 md:mb-12 mb-16"> 
            <div className='bg-yellow-100 text-gray-700 rounded-3xl md:p-16 items-center max-w-6xl h-11/12 w-11/12 '>
                <h1 className="md:text-7xl text-5xl font-bold mb-6">Doing</h1>
                <div className='justify-center mb-4 underline decoration-red-800 underline-offset-8'>
                <h4 className="md:text-[40px] text-[20px]">興味分野:</h4>
                <p className="md:text-[40px] text-[20px] text-center">セキュリティ、Webフロントエンド</p>
                </div>
                <div className=' justify-center mb-4 underline decoration-red-800 underline-offset-8'>
                <h4 className="md:text-[40px] text-[20px]">言語:</h4>
                <p className="md:text-[40px] text-[20px] text-center">python、Next.js、react、HTML、CSS、JavaScript</p>
                </div>
            </div>
        </div>
    )
}