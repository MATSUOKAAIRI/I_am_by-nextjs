import Image from 'next/image';

export default function Footer(){
    return(<> 
<footer className="flex flex-col items-center bg-slate-800 pt-3">
        <ul className="flex items-center gap-x-12 mt-2 p-1">
            <li>
                <a href="https://twitter.com/rii_3112/">
                <Image className="w-8" src="/logo-white.png" alt="X" width={32} height={32}/></a>
            </li>
            <li>
                <a href="https://github.com/MATSUOKAAIRI"><Image className="w-8" src="/github-mark-white.png" alt="git" width={32} height={32}/></a>
            </li>
        </ul>
    <p className="m-4 text-white flex">rii_3112 @ 2025</p>
    </footer>
    </>)
}