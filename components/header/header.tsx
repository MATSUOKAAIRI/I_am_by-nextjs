import style from './header.module.css';

export default function Header(){
    return(<> 
        <header className="justify-center bg-green-200 text-[40px] z-10 border-b-2 border-white  mx-auto max-w-3xl">
            <ul className={style.gnavi}>
                <li><a href="#Header" className="no-underline text-yellow-400">Top</a></li>
                <li><a href="#About" className="no-underline text-blue-400">About</a></li>
                <li><a href="#University"  className="no-underline text-green-400">University</a></li>
                <li><a href="#Do"  className="no-underline text-red-400">Do</a></li>
            </ul>
        </header>
    </>)
}