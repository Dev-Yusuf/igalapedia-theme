import { PEOPLE_URL } from "../constants/array"

const Pioneers = () => {
  return (
    <section className="pioneer-section">
    <h1 className="pioneer-title">Pioneers 🚀</h1>
    <h2 className="related-title">Early adopters</h2>
    <div className="pioneers-container">
  
    <div className="flexCenter gap-6">
     <span className="flex -space-x-4 overflow-hidden">
     {
      PEOPLE_URL.map((url, index) => (
       <img
       className="inline-block h-10 w-10 rounded-full"
       src={url}
       key={index}
       alt="person"
       width={52}
       height={52}
       
       />
      ))
     }
     </span>
     <p className=" cursor-pointer hover:underline  text-[16px] font-[400] md:text-[20px] md:font-[400] text-black">+1000 Pioneers</p>
     </div>
     
    </div>
  </section>
  )
}

export default Pioneers;
