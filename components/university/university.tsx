export default function University(){
    return(
        <div className="flex items-center justify-center bg-green-200 mb-16 mt-8"> 
            <div className='bg-yellow-100 text-gray-700 rounded-3xl md:p-16 items-center max-w-6xl h-5/6 w-11/12 justify-center'>
                <h1 className="md:text-7xl text-5xl font-bold mb-6">University</h1>
                <div className="md:flex mb-4 underline decoration-red-800 underline-offset-8">
                    <h2 className="md:text-[40px] text-[20px]">大学:　</h2>
                    <h3 className=" md:text-[40px] text-center text-[20px]">金沢工業大学工学部情報工学科1年</h3>
                </div>
                <div className='mb-4 underline decoration-red-800 underline-offset-8'>
                    <h3 className="md:text-[40px] text-[20px] text-left">課外活動:</h3>
                    <div className="items-center flex flex-col text-start w-full ">
                        <p className="text-center md:text-[40px] text-[20px]">・セキュリティアッププロジェクト</p>
                        <p className="text-center md:text-[40px] text-[20px]">・フードクリエーションWeb班(運営)</p>
                        <p className="text-center md:text-[40px] text-[20px]">・CirKit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}