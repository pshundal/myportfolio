import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaTrain } from 'react-icons/fa';
import { SiTailwindcss, SiGreensock, SiRedux, SiFramer } from 'react-icons/si';

function Home() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-red-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl" /> },
    { name: 'GSAP', icon: <SiGreensock className="text-green-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl" /> },
    { name: 'Locomotive Scroll', icon: <FaTrain className="text-purple-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-700 text-5xl sm:text-6xl md:text-7xl lg:text-8xl" /> },
    { name: 'Framer Motion', icon: <SiFramer className="text-pink-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl" /> },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100 px-6 sm:px-10">
      <div className="text-center p-2 w-full h-full bg-white/80 shadow-md rounded-lg backdrop-blur-lg">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm Prabhdeep Singh Hundal
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-4">
          I am a Front-End Developer
        </p>
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          I'm currently open to work and looking for exciting opportunities!
        </p>
        
        {/* Add margin-bottom to create space between text and icons */}
        <div className="mt-10 p-20"> {/* 10 units of margin */}
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center text-gray-700">
                <div className="mb-2">
                  {skill.icon}
                </div>
                <span className="text-lg font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
