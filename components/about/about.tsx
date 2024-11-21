import style1 from './about.module.css';

export default function About(){
    return( 
    <div><h3 className={style1.h3}>自己紹介</h3>
    <div className={style1.tapebox}>
    <div className={style1.tape}></div>
        <p className={style1.p}>名前</p>
        <h4 className={style1.h4}>松岡愛梨</h4>
    </div>
     
        <div className={style1.tapebox2}>
        <div className={style1.tape2}></div>
            <div><p className={style1.p}>出身</p></div>
            <h4 className={style1.h4}>富山県</h4><img src="istockphoto-842082264-612x612.jpg" alt="景色" width="150" height="150" className={style1.float}/><img src="toyama_7_kencho-mei_g.png" alt="富山地図" width="150" height="150" className={style1.imgright}/>
        </div>     
        

    <div className={style1.tapebox}>
    <div className={style1.tape}></div>
        <p className={style1.p}>趣味</p>
        <h4 className={style1.h4}>動画視聴、読書</h4>
    </div>

    <div className={style1.tapebox}>
    <div className={style1.tape}></div>
    <p className={style1.p}>やりたいこと</p>
    <h4 className={style1.h4}>バイト、旅行</h4>
    </div></div> 
    )
}