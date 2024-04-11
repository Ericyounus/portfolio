import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between font-serif p-4 items-center text-white'>
      <div className="text-4xl font-serif">
Eric Younas
         </div>
      <div className='flex justify-between gap-12 items-center'>
        <div>About me</div>
        <div>Resume</div>
        <div>Work</div>
        <button className="bg-yellow-400 rounded-lg p-2 text-black">Get in touch!</button>
      </div>
    </div>
  )
}

export default Navbar