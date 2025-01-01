import style1 from './past.module.css';

export default function Header(){
    return(<div> 
        <h2 className={style1.h2}>これまで</h2>
        <div className={style1.cozyspacewrapper}>
            <div className={style1.container}>
              <div className={style1.cozyspacemessage}>
                <h3 className={style1.h3}>小学生</h3>
                <p className={style1.p}>暇なときしていたこと</p>
                <p className={style1.p}>読書、ボール遊び</p>
              </div>
              <div className={style1.cozyspaceimg2}>
                <img src="book_hon_no_mushi_woman.png" width="400px" height="400px"/>
              </div>
            </div>
        </div>
        <div className={style1.cozyspacewrapper}>
            <div className={style1.container}>
              <div className={style1.cozyspaceimg}>
                <img src="画像3.png" width="700px" height="500px"/>
              </div>
              <div className={style1.cozyspacemessage}>
                <h3 className={style1.h3}>中学生</h3>
                <p className={style1.p}>部活動</p>
                <p className={style1.p}>ハンドボール部</p>
                <p className={style1.p}>副部長</p>
                <p className={style1.p}>ポジション:左サイド</p>
              </div>
            </div>
        </div>
        <div className={style1.cozyspacewrapper}>
            <div className={style1.container}>
              <div className={style1.cozyspacemessage}>
                <h3 className={style1.h3}>高校生</h3>
                <p className={style1.p}>部活動</p>
                <p className={style1.p}>ソフトボール部</p>
                <p className={style1.p}>部長</p>
                <p>ポジション:キャッチャー</p>
              </div>
              <div className={style1.cozyspaceimg}>
                <img src="画像5.png" width="700px" height="500px"/>
              </div>
            </div>
        </div>
    </div>)
}