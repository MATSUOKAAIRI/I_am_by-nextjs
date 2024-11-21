import style1 from './continue.module.css';

export default function Continue(){
    return(<> 
        <h2 className={style1.h2}>現在</h2>
        <h3 className={style1.h3}>金沢工業大学在学</h3>
        <h4 className={style1.h4}>持っている資格</h4>
        <p className={style1.p}>なし</p>
        <h3 className={style1.h3}>所属プロジェクト</h3>
        <li className={style1.li}>セキュリティプロジェクト</li>
        <li>フードクリエーション</li>

    </>)
}