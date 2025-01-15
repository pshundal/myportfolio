import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to reload the page when logo is clicked
  const handleLogoClick = () => {
    window.location.reload(); // This will reload the homepage
  };

  return (
    <header className="bg-white text-blue-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        {/* Logo - Click to reload homepage */}
        <h1
          onClick={handleLogoClick} // Reload page on click
          className="text-3xl font-bold text-blue-600 cursor-pointer hover:text-blue-400"
        >
          Hello,Welcome to my site!
        </h1>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-blue-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar links (desktop view) */}
        <nav className="hidden lg:flex lg:space-x-8">
          <ul className="flex flex-row space-x-8 text-lg font-semibold">
            <li>
              
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="py-2 hover:text-blue-400 transition duration-300 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            {/* GitHub Link */}
            <li>
              <a
                href="https://github.com/pshundal" // Replace with your GitHub username
                className="py-2 px-4 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50 p-4">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-xl p-2"
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col space-y-6 text-xl font-semibold text-center text-blue-600">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-blue-400 transition duration-300 cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-blue-400 transition duration-300 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/yourusername" // Replace with your GitHub username
                className="py-2 px-4 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
