import React, { useState } from 'react';

const Header1 = () => {
  const [fontSize, setFontSize] = useState('normal');
  
  const changeFontSize = (size) => {
    setFontSize(size);
  };
  
  return (
    <header className={`w-full bg-green-800 text-white font-${fontSize}`}>
      {/* Top bar with accessibility options and language */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-3">
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
        <div className="flex flex-wrap items-center justify-center md:justify-end">
          <div className="flex space-x-4 mr-4 text-green-200">
            <a href="#content" className="text-xs hover:text-white hover:underline transition-colors">Skip to Content</a>
            <a href="#navigation" className="text-xs hover:text-white hover:underline transition-colors">Skip to Navigation</a>
            <a href="#" className="text-xs hover:text-white hover:underline transition-colors">Screen Reader</a>
          </div>
          
          {/* Font size controls */}
          <div className="flex items-center mr-4 bg-green-900 rounded-full px-2 py-1">
            <button onClick={() => changeFontSize('small')} className="text-xs px-2 hover:text-white transition-colors">A<sup>-</sup></button>
            <button onClick={() => changeFontSize('normal')} className="text-sm px-2 hover:text-white transition-colors">A</button>
            <button onClick={() => changeFontSize('large')} className="text-base px-2 hover:text-white transition-colors">A<sup>+</sup></button>
          </div>
          
          {/* Language dropdown */}
          <div className="relative">
            <select className="appearance-none bg-yellow-500 hover:bg-yellow-400 transition-colors text-green-900 px-3 py-1 pr-8 rounded-full text-sm font-medium focus:outline-none">
              <option>English</option>
              <option>Marathi</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-900">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-green-700">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-1">
          {/* Main navigation */}
          <nav className="flex-grow">
            <ul className="flex flex-wrap justify-center md:justify-start space-x-1 md:space-x-4">
              <li className="relative">
                <a href="#" className="inline-block px-3 py-2 text-sm font-medium border-b-2 border-yellow-400">Home</a>
              </li>
              <li>
                <a href="#" className="inline-block px-3 py-2 text-sm font-medium hover:border-b-2 hover:border-yellow-400 transition-all">About Us</a>
              </li>
              <li>
                <a href="#" className="inline-block px-3 py-2 text-sm font-medium hover:border-b-2 hover:border-yellow-400 transition-all">RTS Act</a>
              </li>
              <li>
                <a href="#" className="inline-block px-3 py-2 text-sm font-medium hover:border-b-2 hover:border-yellow-400 transition-all">GR</a>
              </li>
              <li>
                <a href="#" className="inline-block px-3 py-2 text-sm font-medium hover:border-b-2 hover:border-yellow-400 transition-all">Subject</a>
              </li>
              <li>
                <a href="#" className="inline-block px-3 py-2 text-sm font-medium hover:border-b-2 hover:border-yellow-400 transition-all">Contact</a>
              </li>
            </ul>
          </nav>
          
          {/* Toll number and search */}
          <div className="flex items-center mt-2 md:mt-0">
            <div className="flex items-center mr-3 bg-green-800 px-2 py-1 rounded-full">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span className="text-sm">Toll: 1926</span>
            </div>
            <button className="bg-green-600 hover:bg-green-500 transition-colors p-2 rounded-full">
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

export default Header1;