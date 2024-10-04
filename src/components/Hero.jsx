import React from 'react'
import { motion } from "framer-motion"

function Hero() {
  return (
    <motion.div  initial={{ translateY: 60 , opacity:0 }} 
    whileInView={{ translateY: 0 , opacity:1 }}
    transition={{ duration: 1 }}
   
    className='flex justify-center items-center h-[50vh] p-5 lg:px-28 lg:h-[60vh] w-full'>
      <h1 className='text-3xl lg:text-7xl   text-center font-medium w-[90%] text-[#1C2321] ' > Developer focused on building fresh, effective web solutions and make a real impact. </h1>

      
     
    </motion.div>
  )
}

export default Hero
