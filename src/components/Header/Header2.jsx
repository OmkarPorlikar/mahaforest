import React, { useState } from 'react';

const Header2 = () => {
  const [fontSize, setFontSize] = useState(16);
  
  const changeFontSize = (newSize) => {
    setFontSize(newSize);
  };
  
  return (
    <header className="w-full bg-gradient-to-r from-green-900 to-green-700 text-white shadow-lg" style={{fontSize: `${fontSize}px`}}>
      {/* Top bar with accessibility options and language */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center px-4 py-3">
        {/* Logo and title section */}
        <div className="flex items-center mb-3 md:mb-0">
        <img 
            src="/assets/logo.png" 
            alt="Maharashtra Forest Department Logo" 
            className="h-16 w-16 mr-3"
          />
          <div className="flex flex-col">
            <span className="text-xs text-green-200">महाराष्ट्र वन विभाग महाराष्ट्र शासन</span>
            <span className="text-lg font-bold tracking-wide">MAHARASHTRA FOREST DEPARTMENT</span>
            <span className="text-xs text-green-200">Government of Maharashtra</span>
          </div>
        </div>

        {/* Accessibility controls */}
        <div className="flex flex-wrap justify-center lg:justify-end items-center gap-2">
          <div className="flex space-x-3 text-green-100 bg-green-800 bg-opacity-50 rounded px-3 py-1">
            <a href="#content" className="text-xs hover:text-yellow-200 transition-colors">Skip to Content</a>
            <span className="text-green-500">|</span>
            <a href="#navigation" className="text-xs hover:text-yellow-200 transition-colors">Skip to Navigation</a>
            <span className="text-green-500">|</span>
            <a href="#" className="text-xs hover:text-yellow-200 transition-colors">Screen Reader</a>
          </div>
          
          {/* Font size controls */}
          <div className="flex items-center bg-green-800 bg-opacity-50 rounded px-3 py-1">
            <button onClick={() => changeFontSize(14)} className="text-xs px-1 hover:text-yellow-200 transition-colors">A<sup>-</sup></button>
            <span className="text-green-500 mx-1">|</span>
            <button onClick={() => changeFontSize(16)} className="text-sm px-1 hover:text-yellow-200 transition-colors">A</button>
            <span className="text-green-500 mx-1">|</span>
            <button onClick={() => changeFontSize(18)} className="text-base px-1 hover:text-yellow-200 transition-colors">A<sup>+</sup></button>
          </div>
          
          {/* Language dropdown */}
          <div className="relative">
            <select className="appearance-none bg-yellow-600 hover:bg-yellow-500 transition-colors text-white px-4 py-1 pr-8 rounded text-sm font-medium focus:outline-none border border-yellow-400">
              <option>English</option>
              <option>Marathi</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-yellow-100">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-gradient-to-r from-green-800 to-green-700 border-t border-green-600 border-b border-green-900">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center px-4 py-1">
          {/* Main navigation */}
          <nav className="flex-grow">
            <ul className="flex flex-wrap justify-center lg:justify-start">
              <li className="relative">
                <a href="#" className="inline-block px-4 py-2 text-sm font-medium bg-green-600 border-b-2 border-yellow-400 rounded-t text-white">Home</a>
              </li>
              <li>
                <a href="#" className="inline-block px-4 py-2 text-sm font-medium hover:bg-green-600 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="inline-block px-4 py-2 text-sm font-medium hover:bg-green-600 hover:text-white transition-colors">RTS Act</a>
              </li>
              <li>
                <a href="#" className="inline-block px-4 py-2 text-sm font-medium hover:bg-green-600 hover:text-white transition-colors">GR</a>
              </li>
              <li>
                <a href="#" className="inline-block px-4 py-2 text-sm font-medium hover:bg-green-600 hover:text-white transition-colors">Subject</a>
              </li>
              <li>
                <a href="#" className="inline-block px-4 py-2 text-sm font-medium hover:bg-green-600 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </nav>
          
          {/* Toll number and search */}
          <div className="flex items-center mt-2 lg:mt-0">
            <div className="flex items-center mr-3 bg-green-600 rounded px-3 py-1">
              <svg className="w-4 h-4 mr-1 text-yellow-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span className="text-sm font-medium">Toll: 1926</span>
            </div>
            <button className="bg-yellow-600 hover:bg-yellow-500 transition-colors p-2 rounded">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;