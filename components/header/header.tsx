import style1 from './header.module.css';

export default function Header(){
    return(<> 
        <nav className={style1.d}>
            <ul className={style1.gnavi}>
                <li><a href="top.html" className={style1.a}>top</a></li>
                <li><a href="about.html" className={style1.a}>about</a></li>
                <li><a href="past.html" className={style1.a}>past</a></li>
                <li><a href="continue.html"  className={style1.a}>continue</a></li>
            </ul>
        </nav>
    </>)
}