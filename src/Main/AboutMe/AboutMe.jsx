import React from 'react'

import HeroSection from './HeroSection/HeroSection'

const AboutMe = () => {
  return (
    <div>
             <img src='./images/HeroBG.jpg'  alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
    <div className="relative z-10">
    
        <HeroSection />
      </div>
    </div>
  )
}

export default AboutMe