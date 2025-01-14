import React from 'react';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100 px-10">
      <div className="text-center p-2 w-full h-full bg-white/80 shadow-md rounded-lg backdrop-blur-lg">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm Prabhdeep Singh Hundal
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-4">
          I am a Front-End Developer
        </p>
        <p className="text-lg sm:text-xl text-gray-600">
          I'm currently open to work and looking for exciting opportunities!
        </p>
      </div>
    </div>
  );
}

export default Home;
