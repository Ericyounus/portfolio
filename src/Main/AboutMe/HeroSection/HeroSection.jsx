import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <div>



        <div className="absolute top-20 left-[530px] z-10 text-9xl text-center font-serif text-white"> <h1>PORTFOLIO</h1>

          <div className="absolute left-1 top-3 w-full h-1/3 bg-gradient-to-b from-black to-transparent" />


        </div>

        <div className="absolute top-48  left-[530px] text-9xl text-center font-serif text-white overflow-hidden">
          <div className="transform  filter blur-sm">PORTFOLIO</div>  
          <div className="transform  filter blur-sm">PORTFOLIO</div>
          <div className="transform  filter blur-sm">PORTFOLIO</div>
 
        </div>
        <div className="absolute top-48  left-[530px] text-9xl text-center font-serif text-[#FAAD1B] overflow-hidden">
          <div className="transform  filter blur-sm">PORTFOLIO</div>
          <div className="transform  filter blur-sm">PORTFOLIO</div>
          <div className="transform  filter blur-sm">PORTFOLIO</div>
          
        </div>
      </div>

      <img src='./images/heroPic.png' alt="Background" className="absolute left-44 top-24 h-[550px]" />
      <div className="flex flex-col justify-between p-4 absolute text-lg text-white top-72 left-[900px] z-10 w-60 h-36 bg-[#344C36]">
        <span></span>
        <span>FB: Eric Allen</span>
        <span>IG: ericallen349</span>
        <span>Snap: ericallen6027</span>
      </div>

    </div>
  )
}

export default HeroSection