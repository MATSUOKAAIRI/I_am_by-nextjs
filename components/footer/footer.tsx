import style1 from './footer.module.css';

export default function Footer(){
    return(<> 
 <footer className="footer-2">
        
        <nav>
            <ul className="footer-2__list">
                <li>
                    <a href="https://twitter.com/rii_3112/"><img className="x" src="logo-black.png" alt="X"/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/rii.01311117?gsh=MWJwcXQydnNsaW51bg%3D%3D&utm_source=qr">
                      <img className="instagram" src="Instagram_Glyph_Gradient.png" alt="instagram"/>
                    </a>
                </li>
            <li>
                <a href="https://github.com/MATSUOKAAIRI"><img className="git" src="github-mark-white.png" alt="X"/></a>
            </li>
            </ul>
        </nav>
        <p className="footer-2__copyright">@ 2024</p>
    </footer>
    </>)
}