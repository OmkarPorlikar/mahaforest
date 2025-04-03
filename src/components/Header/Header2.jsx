import React, { useState } from 'react';

const Header6 = () => {
  // Color combinations array with 10 different options
  const colorCombinations = [
    {
      id: 1,
      name: "Mint & Forest",
      headerBg: "bg-green-50",
      textColor: "text-green-800",
      buttonBg: "bg-orange-400",
      buttonText: "text-white",
      hoverColor: "hover:text-teal-600"
    },
    {
      id: 2,
      name: "Cream & Teal",
      headerBg: "bg-amber-50",
      textColor: "text-teal-700",
      buttonBg: "bg-teal-500",
      buttonText: "text-white",
      hoverColor: "hover:text-orange-500"
    },
    {
      id: 3,
      name: "Sky & Navy",
      headerBg: "bg-sky-50",
      textColor: "text-sky-900",
      buttonBg: "bg-orange-500",
      buttonText: "text-white",
      hoverColor: "hover:text-green-600"
    },
    {
      id: 4,
      name: "Beige & Green",
      headerBg: "bg-stone-100",
      textColor: "text-green-700",
      buttonBg: "bg-green-600",
      buttonText: "text-white",
      hoverColor: "hover:text-orange-600"
    },
    {
      id: 5,
      name: "Lavender & Purple",
      headerBg: "bg-purple-50",
      textColor: "text-purple-800",
      buttonBg: "bg-orange-400",
      buttonText: "text-white",
      hoverColor: "hover:text-teal-700"
    },
    {
      id: 6,
      name: "Ivory & Olive",
      headerBg: "bg-yellow-50",
      textColor: "text-olive-800",
      buttonBg: "bg-green-600",
      buttonText: "text-white",
      hoverColor: "hover:text-black"
    },
    {
      id: 7,
      name: "Frost & Teal",
      headerBg: "bg-blue-50",
      textColor: "text-teal-800",
      buttonBg: "bg-teal-600",
      buttonText: "text-white",
      hoverColor: "hover:text-orange-600"
    },
    {
      id: 8,
      name: "Peach & Brown",
      headerBg: "bg-orange-50",
      textColor: "text-amber-900",
      buttonBg: "bg-amber-600",
      buttonText: "text-white",
      hoverColor: "hover:text-green-700"
    },
    {
      id: 9,
      name: "Snow & Green",
      headerBg: "bg-gray-50",
      textColor: "text-green-800",
      buttonBg: "bg-orange-500",
      buttonText: "text-white",
      hoverColor: "hover:text-teal-600"
    },
    {
      id: 10,
      name: "Light Teal & Black",
      headerBg: "bg-teal-50",
      textColor: "text-gray-900",
      buttonBg: "bg-black",
      buttonText: "text-white",
      hoverColor: "hover:text-orange-500"
    }
  ];

  // State to track current color combination
  const [currentCombo, setCurrentCombo] = useState(colorCombinations[0]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with dynamic styling based on current color combination */}
      <header className={`${currentCombo.headerBg} ${currentCombo.textColor} p-4 shadow-sm`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Your Brand</div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className={`font-medium ${currentCombo.hoverColor} transition-colors`}>Home</a>
            <a href="#" className={`font-medium ${currentCombo.hoverColor} transition-colors`}>About</a>
            <a href="#" className={`font-medium ${currentCombo.hoverColor} transition-colors`}>Services</a>
            <a href="#" className={`font-medium ${currentCombo.hoverColor} transition-colors`}>Portfolio</a>
            <a href="#" className={`font-medium ${currentCombo.hoverColor} transition-colors`}>Contact</a>
          </nav>
          
          <button className={`${currentCombo.buttonBg} ${currentCombo.buttonText} px-4 py-2 rounded-md hover:opacity-90 transition-opacity`}>
            Get Started
          </button>
        </div>
      </header>

      {/* Color switcher section */}
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-xl font-bold text-center mb-6">Select a Color Combination</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {colorCombinations.map((combo) => (
            <button
              key={combo.id}
              onClick={() => setCurrentCombo(combo)}
              className={`p-3 rounded-lg ${
                currentCombo.id === combo.id ? 'ring-2 ring-blue-500' : ''
              } ${combo.headerBg} ${combo.textColor} transition-all hover:scale-105`}
            >
              <div className="text-center font-medium text-sm">{combo.name}</div>
              <div className="flex justify-center mt-2">
                <div className={`w-6 h-6 rounded-full ${combo.headerBg} border border-gray-300`}></div>
                <div className={`w-6 h-6 rounded-full -ml-1 ${combo.buttonBg} border border-gray-300`}></div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header6;
