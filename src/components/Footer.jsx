import { Link } from "react-router-dom"
import { FOOTER_LINKS} from "../constants/array"
const Footer = () => {
  return (
    <footer className=' flex items-center justify-center  bg-gray-100 '>
      <div className='px-6 mt-4 lg:px-20 3xl:px-0 mx-auto max-w-[1440px]  flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center  gap-[10%] md:flex-row'>
          <Link href="/" className='mb-10'>
            <img
            src="/igala-logo.png"
            alt='logo'
            className=" w-[74px] h-[29px]"
            />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((colums) => (
              <FooterColumn key={colums.title} title={colums.title}>
                <ul className=' gap-4 text-gray-30 text-[14px] font-[400] flex-col flex'>
                 {colums.links.map((link) => (
                  <Link key={link} to={link}>
                  {link}
                  </Link>
                 ))}
                </ul>
              </FooterColumn>
            ))}

            <div>
         
            </div>

           

          </div>

        </div>
        <div className='border bg-gray-20'/>
        <p className=' regular-14 w-full text-center text-gray-30'>&copy; {new Date().getFullYear()} igalapedia project. All rights reserved.</p>
      </div>
     
    </footer>
  )
}

const FooterColumn = ({title, children}) => {
    return(
      <div className='flex flex-col gap-5'>
        <h4 className='text-[18px] font-[700] whitespace-nowrap'>{title}</h4>
        {children}
      </div>
     
    )
  }

export default Footer
