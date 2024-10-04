import { motion } from "framer-motion"

function SkillList({src,skill}) {
  return (
    <motion.span   initial={{ translateY: 60 , opacity:0 }} 
    whileInView={{ translateY: 0 , opacity:1 }}
    transition={{ duration: 1 }} className="flex justify-center items-center lg:mx-16 gap-2  mt-4 ">
    <img className="w-10 lg:w-16 " src={src} alt='Checkmark icon' />
    <p className="lg:text-2xl" >{skill}</p>
    </motion.span>
  )
}

export default SkillList