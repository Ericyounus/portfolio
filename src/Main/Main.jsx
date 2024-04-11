import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'

const Main = () => {
  return (
    <div>
      <img src='./images/HeroBG.jpg'  alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />
    <div className="relative z-10">
        <Navbar />
        <HeroSection />
      </div>

    </div>
  )
}

export default Main