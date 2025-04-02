import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-blue-800 text-white">
      {/* Top bar with accessibility options and language */}
      <div className="w-full flex justify-between items-center px-4 py-2">
        {/* Logo and title section */}
        <div className="flex items-center">
        <img 
            src="/assets/logo.png" 
            alt="Maharashtra Forest Department Logo" 
            className="h-16 w-16 mr-3"
          />
          <div className="flex flex-col">
            <span className="text-sm">महाराष्ट्र वन विभाग महाराष्ट्र शासन</span>
            <span className="text-xl font-bold">MAHARASHTRA FOREST DEPARTMENT</span>
            <span className="text-sm">Government of Maharashtra</span>
          </div>
        </div>

        {/* Accessibility controls */}
        <div className="flex items-center">
          <div className="flex space-x-6 mr-6">
            <a href="#content" className="text-sm hover:underline">Skip to Main Content</a>
            <a href="#navigation" className="text-sm hover:underline">Skip to Navigation</a>
            <a href="#" className="text-sm hover:underline">Screen Reader Access</a>
          </div>
          
          {/* Font size controls */}
          <div className="flex items-center mr-4">
            <button className="text-sm px-1 text-blue-200 hover:text-white">A<sup>-</sup></button>
            <button className="text-base px-1 text-white">A</button>
            <button className="text-lg px-1 text-white hover:text-blue-200">A<sup>+</sup></button>
          </div>
          
          {/* A and A buttons with different backgrounds */}
          {/* <div className="flex mr-2">
            <button className="w-8 h-8 flex items-center justify-center bg-white text-blue-800 font-bold">A</button>
            <button className="w-8 h-8 flex items-center justify-center bg-purple-300 text-blue-800 font-bold">A</button>
          </div> */}
          
          {/* Language dropdown */}
          <div className="relative">
            <select className="appearance-none bg-yellow-500 text-gray-800 px-4 py-1 pr-8 rounded-none font-medium focus:outline-none">
              <option>English</option>
              <option>Marathi</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="w-full flex justify-between items-center px-4 py-1 border-t border-blue-700">
        <div className="flex-1"></div> {/* Empty div for spacing */}
        
        {/* Main navigation */}
        <nav className="">
          <ul className="flex justify-center space-x-8">
            <li className="relative">
              <a href="#" className="px-2 py-3 font-medium border-b-4 border-yellow-400">Home</a>
            </li>
            <li>
              <a href="#" className="px-2 py-3 font-medium hover:border-b-4 hover:border-yellow-400">About Us</a>
            </li>
            <li>
              <a href="#" className="px-2 py-3 font-medium hover:border-b-4 hover:border-yellow-400">RTS Act</a>
            </li>
            <li>
              <a href="#" className="px-2 py-3 font-medium hover:border-b-4 hover:border-yellow-400">GR</a>
            </li>
            <li>
              <a href="#" className="px-2 py-3 font-medium hover:border-b-4 hover:border-yellow-400">Subject</a>
            </li>
            <li>
              <a href="#" className="px-2 py-3 font-medium hover:border-b-4 hover:border-yellow-400">Contact Us</a>
            </li>
          </ul>
        </nav>
        
        {/* Toll number and search */}
        <div className="flex-1 flex justify-end items-center">
          <div className="flex items-center mr-4">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              Toll: 1926
            </span>
          </div>
          <button className="p-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;