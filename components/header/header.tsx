export default function Header(){
  return(
    <> 
      <header className="text-[35px] sm:text-[32px] md:text-[40px] z-10 p-4">
        <div className="flex flex-col md:flex-row justify-center items-center border-b-4 border-white mx-4 md:mx-10 mb-4">
          <ul className="flex flex-col md:flex-row items-center">
            <li className="mb-2 md:mb-0 md:mr-6">
              <a href="#about" className="no-underline text-blue-400">About</a>
            </li>
            <li className="mb-2 md:mb-0 md:mr-6">
              <a href="#university" className="no-underline text-green-400">University</a>
            </li>
            <li className="mb-2 md:mb-0 md:mr-6">
              <a href="#doing" className="no-underline text-red-400">Doing</a>
            </li>
            <li className="mb-2 md:mb-0 md:mr-6">
              <a href="#action" className="no-underline text-purple-400">Action</a>
            </li>
            <li className="mb-2 md:mb-0">
              <a href="#work" className="no-underline text-yellow-400">Work</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}