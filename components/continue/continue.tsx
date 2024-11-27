import style1 from './continue.module.css';

export default function Continue(){
    return(<> 
        <h2 className="text-[60px] text-white text-center ">現在</h2>
        <li className={style1.li}><h2 className="text-[50px] text-center text-white">所属大学:</h2>
        <h3 className="text-[60px] text-center text-white">金沢工業大学在学</h3></li>
        <h4 className="text-[30px] text-center text-white">持っている資格</h4>
        <p className="text-[30px] text-center text-white">なし</p>
        <h3 className="text-[30px] text-center text-white">所属プロジェクト</h3>
        <li className={style1.li}>セキュリティプロジェクト</li>
        <li>フードクリエーション</li>

    </>)
}