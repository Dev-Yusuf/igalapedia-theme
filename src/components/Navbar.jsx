import { Link } from "react-router-dom"
import {NAV_LINKS} from "../constants/array"


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto max-w-[1440px] bg-gray-100  py-5  px-6 lg:px-20 3xl:px-0 relative z-30 ">
   
      <Link to="/" className="navbar-brand" href="index.html">
        <img src="/igala-logo.png" alt="logo" className=" w-[74px] h-[24px]" width={74} height={29}/>
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

     
        <ul className="hidden h-full gap-12 lg:flex">
          {
           NAV_LINKS.map((link) => (
            <Link className="nav-item" to={link.href} key={link.key}>
             <span className="nav-link active text-black" aria-current="page" href="dictionary.html">{link.label}</span>
            </Link>
           )) 
          }
          <li >
           
          </li>
          
        </ul>

        <img src="menu.svg" alt="menu" className=" w-[32px] h-[32px] inline-block cursor-pointer lg:hidden" />
    
   
  </nav>

  )
}

export default Navbar
