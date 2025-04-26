export default function Action(){
return( 
<div  className="flex items-center justify-center bg-green-200 mt-8 mb-16">
    <div className='bg-yellow-100 text-gray-700 rounded-3xl md:p-16 max-w-6xl h-5/6 w-11/12 justify-center'>
        <div className="flex ml-6">
            <h1 className="md:text-7xl text-5xl font-bold mb-6">Action</h1>
            <h1 className="md:text-6xl text-4xl font-bold mb-6">(参加イベント)</h1>
        </div>
        <div className='flex flex-col justify-center mb-4 underline decoration-red-800 underline-offset-8'>
            <p className="md:text-[40px] text-[20px]">2024年度:　</p>            
            <p className="md:text-[40px] text-[20px]">・ミニセキュリティキャンプin石川</p>
            <p className="md:text-[40px] text-[20px]">・BuriKaigi2025</p>
            <p className="md:text-[40px] text-[20px]">・P3NFEST 2025 Winter</p>
            <p className="md:text-[40px] text-[20px]">・技育祭 2025 春</p>
        </div>
        <div className='flex justify-center mb-4 underline decoration-red-800 underline-offset-8'>
            <p className="md:text-[40px] text-[20px]">2025年度:　</p>
            <p className="md:text-[40px] text-[20px]">技育ハッカソン Vol.2</p>
            <p className="md:text-[40px] text-[20px]">技育キャラバン in 金沢</p>
        </div>
    </div>
</div>
)
};