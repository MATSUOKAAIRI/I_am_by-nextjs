export default function University(){
    return(
        <div className="flex items-center justify-center bg-green-200 mb-16 mt-8"> 
            <div className='bg-yellow-100 text-gray-700 rounded-3xl p-16 items-center max-w-6xl h-5/6 w-full justify-center'>

                <h1 className="text-7xl font-bold mb-6">University</h1>
                <div className="flex  justify-center mb-4 underline decoration-red-800 underline-offset-8">
            <h2 className="text-[50px]">大学:　</h2>
            <h3 className="text-[50px] text-center">金沢工業大学工学部情報工学科1年</h3>
        </div>
        <div className='justify-center mb-4 underline decoration-red-800 underline-offset-8'>
            <h3 className="text-[50px] text-left">課外活動:</h3>
            <div className="flex flex-col items-center text-start w-full ">
            <p className="text-[50px] "> セキュリティ・アッププロジェクト</p>
            <p className="text-[50px] ">フードクリエーションWeb班(運営チーム)</p>
            <p className="text-[50px] ">CirKit</p>
        </div>
        </div>
            </div>
        </div>
    )
}