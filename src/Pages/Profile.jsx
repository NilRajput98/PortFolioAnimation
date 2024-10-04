import React from 'react'

import Footer from '../components/Footer'
import Phero from '../components/Phero'
import About from '../components/About'
import Skills from '../components/Skills'
import GetInTouch from '../components/GetInTouch'

function Profile() {
  return (
    <div>
      <Phero/>
      <About/>
      <Skills/>
      <GetInTouch/>
      <Footer/>
      
    </div>
  )
}

export default Profile
