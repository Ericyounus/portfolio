import React, { useState, useEffect } from 'react';
import AboutMe from './AboutMe/AboutMe';
import Work from './Work/Work';
import Resume from './Resume/Resume';

const Main = () => {
  const [activeTab, setActiveTab] = useState('aboutMe');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'aboutMe') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (tab === 'Resume') {
      window.scrollTo({
        top: 700,
        behavior: 'smooth'
      });
    } else if (tab === 'work') {
      const workSection = document.getElementById('workSection');
      if (workSection) {
        window.scrollTo({
          top: workSection.offsetTop,
          behavior: 'smooth'
        });
      }
    }
    console.log("Tab clicked. Scrolling to tab:", tab);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < 600) {
      setActiveTab('aboutMe');
    } else if (scrollPosition >= 600 && scrollPosition < 1500) {
      setActiveTab('Resume');
    } else {
      setActiveTab('work');
    }
  };

  // Effect to add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <>
      <div className='fixed top-0 h-16 left-0 w-full bg-black bg-opacity-30 text-white z-50'>
        <div className={`flex justify-between items-center p-4 ${activeTab === 'Resume' ? 'text-black' : ''}`}>
          <div className="text-4xl font-serif">
            Eric Younas
          </div>
          <div className='flex gap-12 items-center'>
            <div onClick={() => handleTabChange('aboutMe')} className={`cursor-pointer ${activeTab === 'aboutMe' ? 'bg-yellow-400' : ''}`} >About me</div>
            <div onClick={() => handleTabChange('Resume')} className={`cursor-pointer ${activeTab === 'Resume' ? 'bg-yellow-400' : ''}`} >Resume</div>
            {/* <div onClick={() => handleTabChange('work')} className={`cursor-pointer ${activeTab === 'work' ? 'bg-yellow-400' : ''}`} >Work</div> */}
            <button className="bg-yellow-400 rounded-lg p-2 text-black">Get in touch!</button>
          </div>
        </div>
      </div>
      
      {/* Conditionally render components based on activeTab state */}
      <AboutMe />
      <Resume />
      <Work />
    </>
  );
};

export default Main;
