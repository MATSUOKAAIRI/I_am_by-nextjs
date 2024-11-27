import style1 from './header.module.css';

export default function Header(){
    return(<> 
        <nav className={style1.d}>
            <ul className={style1.gnavi}>
                <li><a href="top.html" className="no-underline text-yellow-200">top</a></li>
                <li><a href="about.html" className="no-underline text-blue-200">about</a></li>
                <li><a href="past.html" className="no-underline text-green-200">past</a></li>
                <li><a href="continue.html"  className="no-underline text-red-300">continue</a></li>
            </ul>
        </nav>
    </>)
}