import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-200 text-blue-600 py-8 mt-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Prabhdeep Singh Hundal. All rights reserved.
        </p>
        <div className="mt-4 text-sm">
          <p className="text-black">
            Email: <a href="mailto:pshundal2000@gmail.com" className="text-blue-600 hover:underline">pshundal2000@gmail.com</a>
          </p>
          <p className="text-black">
            Phone: <a href="tel:+17059774348" className="text-blue-600 hover:underline">+1 705-977-4348</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
