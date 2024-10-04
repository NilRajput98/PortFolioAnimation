import React from 'react'
import { motion } from "framer-motion"

function GetInTouch() {
  return (
    <motion.div
    initial={{ translateY: 60 , opacity:0 }} 
    whileInView={{ translateY: 0 , opacity:1 }}
    transition={{ duration: 0.8 }}
    
    className='flex justify-center flex-col items-center h-[40vh] lg:h-[60vh] p-5 gap-4 ' >

      <h1  className='text-3xl lg:text-5xl text-[#1C2321] underline'>Lets work together </h1>
      <motion.h1 whileHover={{ scale: 1.2 }} className='text-2xl lg:text-3xl text-gray-500 hover:text-[#1C2321]' ><a href="">Get in touch</a> </motion.h1>
      
    </motion.div>
  )
}

export default GetInTouch
