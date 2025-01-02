import style from './footer.module.css';

export default function Footer(){
    return(<> 
 <footer className="flex flex-col items-center bg-black pt-3">
        <ul className="flex items-center gap-x-12 mt-2 p-1">
            <li>
                <a href="https://twitter.com/rii_3112/"><img className="w-8" src="./logo-white.png" alt="X"/></a>
           </li>
            <li>
                <a href="https://github.com/MATSUOKAAIRI"><img className="w-8" src="./github-mark-white.png" alt="git"/></a>
            </li>
        </ul>
        <p className="m-4 text-white flex">Airi Matsuoka @ 2025</p>
    </footer>
    </>)
}