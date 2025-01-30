export default function Action(){
return( 
<div  className="flex items-center justify-center bg-green-200 mt-8 mb-16">
    <div className='bg-yellow-100 text-gray-700 rounded-3xl md:p-16 max-w-6xl h-5/6 w-11/12 justify-center'>
        <h1 className="md:text-7xl text-5xl font-bold mb-6">Action(参加イベント)</h1>
        <h1></h1>
        <div className='flex justify-center mb-4 underline decoration-red-800 underline-offset-8'>
            <p className="md:text-[40px] text-[20px]">2024年度:　</p>            
            <p className="md:text-[40px] text-[20px]">ミニセキュリティキャンプin石川</p>
        </div>
        <div className='flex justify-center mb-4 underline decoration-red-800 underline-offset-8'>
            <p className="md:text-[40px] text-[20px]">2025年度　</p>
        </div>
    </div>
</div>
)
}