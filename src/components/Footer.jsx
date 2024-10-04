import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='logo flex justify-center items-center flex-col lg:flex-row lg:justify-between py-4 px-40 bg-[#5E6572] h-32 border-[3px] border-[#1C2321]' >
      <div className='' >


    
     
       
      <p className='text-sm text-[#EEF1EF]' >© Nilesh Rajput {currentYear}</p>
      </div>
     
      <div className='flex gap-4 mt-5 lg:mt-0'>
       <a className='hover:text-[#A9B4C2] flex justify-center items-center text-[#EEF1EF] border-2 border-[#1C2321] hover:border-[#EEF1EF] font-semibold  p-2 rounded-lg bg-[#1C2321] ' href=""><FaLinkedin /> Linkedin</a>
       <a className='hover:text-[#A9B4C2] flex justify-center items-center text-[#EEF1EF] border-2 border-[#1C2321] hover:border-[#EEF1EF]  p-2 rounded-lg bg-[#1C2321] font-semibold  ' href=""><IoMdMail />Mail</a>
       
      </div>
    </div>
  )
}

export default Footer
