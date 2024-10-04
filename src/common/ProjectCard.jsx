import React from 'react'
import { motion } from "framer-motion"

function ProjectCard({src ,link ,h3 ,p}) {
  return (
    <motion.div
    initial={{ translateY: 60 , opacity:0 }} 
    whileInView={{ translateY: 0 , opacity:1 }}
    transition={{ duration: 1 }}
    
     className=' p-4 m-4  lg:flex lg:justify-center lg:items-center flex-col '>
       <a className='flex  bg-[#7D98A1] border-[3px] border-[#1C2321] rounded-2xl items-center  flex-col gap-1 lg:w-[600px] lg:h-[400px]  justify-center overflow-hidden   ' href={link} target='_blank'>
    <img className='hover:blur-sm     bg-cover  ' src={src} alt={`${h3} logo`}/>
    
    </a>
    <h3 className='text-xl font-semibold pl-2 pt-2 ' >{h3}</h3>
    <p className='pl-2 font-medium'>{p}</p>
    </motion.div>
   
    
   
  );
}

export default ProjectCard;


  