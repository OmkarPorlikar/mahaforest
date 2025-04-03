import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, ExternalLink } from 'lucide-react';

const AppandLink = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setExpandedSection(null);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const applications = [
    { name: 'Intranet Portal', icon: 'M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 100-2 1 1 0 000 2zm0 8a1 1 0 100-2 1 1 0 000 2z' },
    { name: 'GIS', icon: 'M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' },
    { name: 'Asset Manager', icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0' },
    { name: 'Account Management', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { name: 'HR Management', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { name: 'Safari Booking', icon: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z' }
  ];

  const links = [
    { name: 'Field Offices', icon: 'M4 6h16M4 12h16m-7 6h7' },
    { name: 'Maharashtra Zoo Authority', icon: 'M3 12l2-2m0 0l2 2m-2-2v6m6-6l2-2m0 0l2 2m-2-2v6' },
    { name: 'Green Tube Channel', icon: 'M5 3a2 2 0 012-2h10a2 2 0 012 2v18l-7-3-7 3V3z' },
    { name: 'Maharashtra State Biodiversity Board', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20z' },
    { name: 'Forest Development Corporation Of Maharashtra', icon: 'M12 2l6 6H6l6-6z' },
    { name: 'Carbon Estimator', icon: 'M4 8h16M4 16h16' },
    { name: 'Maha e-Auction', icon: 'M6 3h12M6 8h12M9 12h6M9 16h6' },
  ];

  return (
    <div className="w-full p-2 sm:p-4 md:p-6 lg:p-8 bg-teal-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {/* Applications Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div 
            className={`bg-teal-700 p-4 flex justify-between items-center cursor-pointer ${isSmallScreen ? 'sticky top-0 z-10' : ''}`}
            onClick={() => isSmallScreen && toggleSection('applications')}
          >
            <h2 className="text-xl font-bold text-white">Applications</h2>
            {isSmallScreen && (
              expandedSection === 'applications' ? <ChevronDown className="text-white" /> : <ChevronRight className="text-white" />
            )}
          </div>
          
          <div className={`transition-all duration-300 overflow-hidden ${isSmallScreen && expandedSection !== 'applications' ? 'max-h-0' : 'max-h-screen p-3 sm:p-4 md:p-5'}`}>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {applications.map((app, index) => (
                <div 
                  key={index} 
                  className={`p-3 sm:p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow transition-all cursor-pointer flex flex-row sm:flex-col items-center ${
                    hoveredItem === `app-${index}` ? 'border-teal-500 bg-teal-50 transform scale-105' : 'hover:border-green-300'
                  }`}
                  onMouseEnter={() => setHoveredItem(`app-${index}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-teal-100 flex items-center justify-center mb-0 sm:mb-3 mr-3 sm:mr-0 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-teal-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={app.icon} />
                    </svg>
                  </div>
                  <div className={`flex items-center transition-all duration-300 ${
                    hoveredItem === `app-${index}` ? 'sm:flex sm:items-center sm:mt-2' : 'sm:block sm:text-center'
                  }`}>
                    <span className="font-medium text-gray-700 text-sm sm:text-base">{app.name}</span>
                    {hoveredItem === `app-${index}` && (
                      <ExternalLink className="ml-2 h-4 w-4 text-teal-600 hidden sm:block" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Links Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div 
            className={`bg-teal-700 p-4 flex justify-between items-center cursor-pointer ${isSmallScreen ? 'sticky top-0 z-10' : ''}`}
            onClick={() => isSmallScreen && toggleSection('links')}
          >
            <h2 className="text-xl font-bold text-white">Important Links</h2>
            {isSmallScreen && (
              expandedSection === 'links' ? <ChevronDown className="text-white" /> : <ChevronRight className="text-white" />
            )}
          </div>
          
          <div className={`transition-all duration-300 overflow-hidden ${isSmallScreen && expandedSection !== 'links' ? 'max-h-0' : 'max-h-screen p-3 sm:p-4 md:p-5'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {links.map((link, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow transition-all cursor-pointer flex items-center gap-3 ${
                    hoveredItem === `link-${index}` ? 'border-teal-500 bg-teal-50 transform scale-105' : 'hover:border-green-300'
                  }`}
                  onMouseEnter={() => setHoveredItem(`link-${index}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    hoveredItem === `link-${index}` ? 'bg-teal-500' : 'bg-teal-100'
                  } transition-colors duration-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${
                      hoveredItem === `link-${index}` ? 'text-white' : 'text-green-700'
                    }`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={link.icon} />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700 text-sm sm:text-base flex-1">{link.name}</span>
                  {hoveredItem === `link-${index}` && (
                    <ExternalLink className="h-4 w-4 text-teal-600 ml-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppandLink;
