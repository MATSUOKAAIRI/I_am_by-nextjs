import style from './header.module.css';

export default function Header(){
    return(<> 
        <header className="bg-green-200 text-[40px] z-10 border-b-2 border-white  mx-auto md:max-w-3xl p-4">
            <ul className={`${style.gnavi} flex flex-col md:flex-row justify-center items-center`}>
                <li className="mb-2 md:mb-0 md:mr-4"><a href="#top" className="no-underline text-yellow-400">Top</a></li>
                <li className="mb-2 md:mb-0 md:mr-4"><a href="#about" className="no-underline text-blue-400">About</a></li>
                <li className="mb-2 md:mb-0 md:mr-4"><a href="#university"  className="no-underline text-green-400">University</a></li>
                <li className="mb-2 md:mb-0 "><a href="#doing"  className="no-underline text-red-400">Doing</a></li>
                <li className="mb-2 md:mb-0 md:ml-4"><a href="#action"  className="no-underline text-purple-400">Action</a></li>
            </ul>
        </header>
    </>)
}