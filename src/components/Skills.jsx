import React from 'react'
import SkillList from '../common/SkillList'
import Html from '../assets/SkillsLogo/html.png'
import Css from '../assets/SkillsLogo/css.png'
import Js from '../assets/SkillsLogo/js.png'
import Ts from '../assets/SkillsLogo/ts.png'
import Reactl from '../assets/SkillsLogo/react.png' 
import Node from '../assets/SkillsLogo/nodejs.png'
import Webpack from '../assets/SkillsLogo/webpack.png'
import Jira from '../assets/SkillsLogo/jira.png'
import Framer from '../assets/SkillsLogo/framerm.png'
import Trello from '../assets/SkillsLogo/trello.png'
import Gsap from '../assets/SkillsLogo/gsap.png'
import Gulp from '../assets/SkillsLogo/gulp.png'

function Skills() {
  return (
    <div className='flex justify-center items-center flex-col'>

      <h1 className=' bg-slate-200 p-1 rounded-full px-3 mb-5 lg:text-2xl lg:mb-20'> Skills</h1>
      <div className='flex flex-wrap gap-5 py-5 justify-center items-center'>

      <SkillList src={Html} skill="HTML" />
      <SkillList src={Css} skill="CSS" />
      <SkillList src={Js} skill="JavaScript" />
      <SkillList src={Ts} skill="TypeScript" />
       <SkillList src={Reactl} skill="React" />
      <SkillList src={Node} skill="Node" />
      <SkillList src={Webpack} skill="Webpack" />
      <SkillList src={Jira} skill="Jira" />
     

      <SkillList src={Framer} skill="Framer" />
      <SkillList src={Gsap} skill="GSAP" />
      <SkillList src={Trello} skill="Trello" />
      <SkillList src={Gulp} skill="Gulp" />
      </div>
      
      

      
    </div>
  )
}

export default Skills
