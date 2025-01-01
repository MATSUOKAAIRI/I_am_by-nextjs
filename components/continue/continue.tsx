import style1 from './continue.module.css';

export default function Continue(){
    return(<div className={style1.body}> 
        <h2 className="text-[60px] text-white text-center ">現在</h2>
        <li className="flex justify-center"><h2 className="text-[50px] text-center text-white">所属大学:</h2>
        <h3 className="text-[60px] text-center text-white">金沢工業大学在学</h3></li>
        <h4 className="text-[30px] text-center text-white">持っている資格</h4>
        <p className="text-[30px] text-center text-white">なし</p>
        <h3 className="text-[30px] text-center text-white">所属プロジェクト</h3>
        <li className="flex justify-center">
           <p className="text-[30px] text-center text-white"> セキュリティプロジェクト</p>
            </li>
        <li className="flex justify-center">
            <p className="text-[30px] text-center text-white">フードクリエーション</p>
            </li>

    </div>)
}