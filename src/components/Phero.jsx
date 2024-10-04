import React from 'react'
import { motion } from "framer-motion"
function Phero() {
  return (
    <motion.div
    initial={{ translateY: 60 , opacity:0 }} 
    whileInView={{ translateY: 0 , opacity:1 }}
    transition={{ duration: 1 }}
     className='h-[53vh] flex justify-center items-center flex-col'>
      <h1 className='text-4xl lg:text-6xl font-medium text-[#1C2321] '>Hey 👋🏼 I'm Nilesh </h1>
      
      
    </motion.div>
  )
}

export default Phero
