import React from 'react'
import ProjectCard from '../common/ProjectCard'
import Nike from '../assets/Nike.png'
import Portfolio from '../assets/Portfolio.png'
import Kobodrop from '../assets/Kobodrop.png'
import Greenleaf from '../assets/greenleaf.png'
import Constuction from '../assets/Eva.png'
import Elements from '../assets/Elements.png'

function Projects() {
  return (
   <div>
 
 <h1 className='text-2xl lg:text-4xl uppercase text-center font-semibold text-[#1C2321]' >Projects</h1>

 <div   className='lg:flex flex-wrap lg:p-10 lg:mx-0 justify-center '>

     

<ProjectCard 
 src={Nike} 
 link={'https://nikedarkbynileshrajput.netlify.app/'}
 h3="Nike"
 p="Landing page with 
 React"
 
 />
<ProjectCard 
 src={Portfolio} 
 link={'https://reactportfolionileshrajput.netlify.app/'}
 h3="Portfolio"
 p="Portfolio App with 
 React"
 
 />
<ProjectCard 
 src={Kobodrop} 
 link={'https://kobodropbynileshrajput.netlify.app/'}
 h3="KoboDrop"
 p="App landing page with 
 React"
 
 />
<ProjectCard 
 src={Greenleaf} 
 link={'https://nilrajput98.github.io/Greenleaf-Website/'}
 h3="Greenleaf Groceries"
 p="ECommerce Website"
 
 />
<ProjectCard 
 src={Constuction} 
 link={'https://nilrajput98.github.io/Eva-Traders-Bootstrap-1/'}
 h3="Eva Traders"
 p="Business Site with Bootstrap"
 
 />
<ProjectCard 
 src={Elements} 
 link={'https://nilrajput98.github.io/Elements-/'}
 h3="Elements"
 p="Company Site With Bootstrap"
 
 />
      
    </div>
   </div>
  )
}

export default Projects
