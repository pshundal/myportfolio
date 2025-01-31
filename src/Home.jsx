import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaTrain, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiGreensock, SiRedux, SiFramer } from 'react-icons/si';

function Home() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-red-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-bounce" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-bounce" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-pulse" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-pulse" /> },
    { name: 'React', icon: <FaReact className="text-blue-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-spin" /> },
    { name: 'GSAP', icon: <SiGreensock className="text-green-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-pulse" /> },
    { name: 'Locomotive Scroll', icon: <FaTrain className="text-purple-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-bounce" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-700 text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-spin" /> },
    { name: 'Framer Motion', icon: <SiFramer className="text-pink-500 text-5xl sm:text-6xl md:text-7xl lg:text-8xl animate-pulse" /> },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100 px-6 sm:px-10">
      <div className="text-center p-2 w-full h-full bg-white/80 shadow-md rounded-lg backdrop-blur-lg">
        
        {/* Animated Title */}
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I'm Prabhdeep Singh Hundal
        </motion.h1>

        {/* Animated Paragraphs */}
        <motion.p 
          className="text-xl sm:text-2xl text-gray-700 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          I am a Front-End Developer
        </motion.p>

        <motion.p 
          className="text-lg sm:text-xl text-gray-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          I'm currently open to work and looking for exciting opportunities!
        </motion.p>

        {/* Skills Section */}
        <div className="mt-10 p-20">
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
