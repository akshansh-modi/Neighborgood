import React from "react";
import { useEffect } from "react";

import "./home.css"
const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const target = document.getElementById('main1');
      if (target) {
        const xValue = 'center';
        const parallaxFactor = 0.6; // Parallax effect factor
        const slowScrollFactor = 0.2; // Slower scrolling factor
        const parallaxYValue = scrollPosition * parallaxFactor;
        const slowScrollYValue = scrollPosition * slowScrollFactor;
        target.style.backgroundPosition = `${xValue} calc(${parallaxYValue}px - ${slowScrollYValue}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmountho
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="body">
      <div className=" flex flex-col justify-center items-center schedule">
        <h1 className=" font-semibold text-[40px] lg:text-[60px] bg-clip-text bg-gradient-to-r from-yellow-600 text-transparent  to-[#ff5200]"> Neighborgood </h1>

        <p className="lg:text-[18px]   text-[15px]"> NeighborGood offers a simple platform for neighborhood connections, using an AI agent to find activities that bring neighbors together</p>
        <button className="lg:text-18px text-[15px]"> Get Started &gt;</button>
      </div>
      <div id="main1"></div>
      <div className='lol'></div>
    </div>);
};

export default Home;
