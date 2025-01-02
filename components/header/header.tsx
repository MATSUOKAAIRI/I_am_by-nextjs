import style from './header.module.css';

export default function Header(){
    return(<> 
        <header className="justify-center bg--black text-[40px]">
        <div className="text-white text-[80px] ">　AIRI　MATSUOKA</div>
            <ul className={style.gnavi}>
                <li><a href="#Header" className="no-underline text-yellow-200">Top</a></li>
                <li><a href="#About" className="no-underline text-blue-200">About</a></li>
                <li><a href="#Do"  className="no-underline text-red-300">Do</a></li>
            </ul>
        </header>
    </>)
}