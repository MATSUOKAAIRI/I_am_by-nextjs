import style1 from './footer.module.css';

export default function Footer(){
    return(<> 
 <footer className={style1.footer2}>
        
        <nav>
            <ul className={style1.footer2__list}>
                <li>
                    <a href="https://twitter.com/rii_3112/"><img className={style1.x} src="./logo-white.png" alt="X"/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/rii.01311117?gsh=MWJwcXQydnNsaW51bg%3D%3D&utm_source=qr">
                      <img className={style1.instagram} src="./Instagram_Glyph_Gradient.png" alt="instagram"/>
                    </a>
                </li>
            <li>
                <a href="https://github.com/MATSUOKAAIRI"><img className={style1.git} src="./github-mark-white.png" alt="git"/></a>
            </li>
            </ul>
        </nav>
        <p className={style1.footer2__copyright}>@ 2024</p>
    </footer>
    </>)
}