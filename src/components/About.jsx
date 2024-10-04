import React from 'react'
import { motion } from "framer-motion"

function About() {
  return (
    <motion.div
    
      initial={{ translateY: 60 , opacity:0 }} 
      whileInView={{ translateY: 0 , opacity:1 }}
      transition={{ duration: 1 }} className='p-4'>

      <div className='img flex justify-center lg:px-80 gap-5 '> <img className='rounded-2xl bg-cover lg:h-[100%] lg:w-[65%] lg:m-auto   w-[600px] hover:cursor-pointer hover:blur-sm border-[3px] border-[#1C2321] ' src="https://images.pexels.com/photos/5474285/pexels-photo-5474285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <img className='hidden lg:block rounded-2xl bg-cover lg:h-[100%] lg:w-[65%] lg:m-auto  h-[300px] w-[600px] hover:cursor-pointer hover:blur-sm  border-[3px] border-[#1C2321] ' src="https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div>
      <div 
       className='about flex justify-center items-center flex-col p-2'>
        <h1 className=' bg-slate-200 p-1 rounded-full px-3 mt-20 lg:text-2xl text-[#1C2321] ' >About</h1>
        <p className='mt-5 text-center text-xl  font-medium mb-20 lg:text-3xl lg:mx-24 lg:my-20' >A freelance designer based in the UK. I combine my experience in product and brand to solve problems, tell stories, and create compelling experiences.</p></div>
    
      
      
    </motion.div>
  )
}

export default About
