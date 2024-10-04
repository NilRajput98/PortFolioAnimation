import React from 'react'
import { motion } from "framer-motion"

function Chero() {
  return (
    <motion.div 
    initial={{ translateY: 60 , opacity:0 }} 
    whileInView={{ translateY: 0 , opacity:1 }}
    transition={{ duration: 1 }} className='flex flex-col justify-center items-center h-[90vh]'>
      <h1 className='text-4xl lg:text-6xl'>Let's work together</h1>
      <a
        href="mailto:rajputn1i1l1@gmail.com"
        className=" text-[#888888c1] hover:text-[#c2c0c0] text-4xl lg:text-5xl  py-2 px-4 rounded"
      >
       Get in touch.
      </a>
    </motion.div>
  )
}

export default Chero
