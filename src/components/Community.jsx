import React from 'react'
import { PEOPLE_URL } from '../constants/array'
const Community = () => {
  return (
    <section className="community-section">
    <h1 className="community-title">Community 🌟</h1>
    <h2 className="related-title">Contributors</h2>
    <div className="contributors-container">
   
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
     <p className=" cursor-pointer hover:underline text-[16px] font-[400] md:text-[20px] md:font-[400] text-black">+400 Contributed</p>
     </div>
     
    </div>
    <div className="community-stats">
        <div className="statistic">
            <p className="stats-digits">100</p>
            <h2>GitHub Stars</h2>
        </div>
        <div className="statistic">
          <p className="stats-digits">500+</p>
          <h2>What'sApp Community</h2>
        </div>
    </div>
</section>
  )
}

export default Community
