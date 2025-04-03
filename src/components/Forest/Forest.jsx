import React from 'react';

const Forest = () => {
  return (
    <div className="max-w-6xl mx-auto my-8 sm:my-12 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left: Image with overlay */}
        <div className="w-full md:w-2/5 relative">
          <img 
            src="https://mahaforest.gov.in/assets/images/welcomeimg.jpg" 
            alt="Tigers on forest road" 
            className="w-full h-64 md:h-full object-cover" 
          />
          <div className="absolute top-0 left-0 w-full h-1 bg-teal-700"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-700"></div>
          
          {/* Image overlay with stats */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 md:hidden">
            <div className="flex justify-around text-white">
              <div className="text-center">
                <p className="text-2xl font-bold">50,650</p>
                <p className="text-xs">sq. km Forest Area</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">312</p>
                <p className="text-xs">Tigers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">6</p>
                <p className="text-xs">National Parks</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right: Content */}
        <div className="w-full md:w-3/5 p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
            <span className="w-1 sm:w-2 h-6 sm:h-8 bg-teal-500 mr-2 sm:mr-3 inline-block"></span>
            WASHIM Forest Division
          </h2>
          
          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
            Globally as well as nationally, Forest Conservation is increasingly being viewed as a 
            powerful instrument in sequestering carbon and thereby offset adverse climate change.
            The Maharashtra Forest Division is committed to preserving our state's rich biodiversity.
          </p>
          
          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
            Maharashtra is home to some of India's most significant protected areas, including Tadoba-Andhari Tiger Reserve, 
            Melghat Tiger Reserve, and Sahyadri Tiger Reserve. Our forests support diverse ecosystems, 
            from the dense deciduous forests of Vidarbha to the coastal mangroves of Konkan.
          </p>
          
          <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-6">
            Our Division implements various conservation initiatives including Joint Forest Management (JFM), 
            ecotourism promotion, wildlife monitoring, habitat improvement, and community-based conservation 
            programs that benefit both forests and local communities.
          </p>
          
          {/* Key forest statistics - visible on medium screens and above */}
          <div className="hidden md:flex justify-between mb-6 text-gray-800">
            <div className="text-center bg-teal-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-green-800">50,650</p>
              <p className="text-xs">sq. km Forest Area</p>
            </div>
            <div className="text-center bg-teal-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-green-800">312</p>
              <p className="text-xs">Tigers</p>
            </div>
            <div className="text-center bg-teal-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-green-800">6</p>
              <p className="text-xs">National Parks</p>
            </div>
            <div className="text-center bg-teal-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-green-800">49</p>
              <p className="text-xs">Wildlife Sanctuaries</p>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <a 
              href="#" 
              className="text-white bg-teal-700 hover:bg-green-800 font-medium rounded-md px-4 py-2 text-center transition-colors"
            >
              Explore Wildlife
            </a>
            <a 
              href="#" 
              className="text-green-800 font-semibold border-b-2 border-green-700 pb-1 hover:text-green-700 transition inline-block"
            >
              Read More About Our Initiatives
            </a>
          </div>
        </div>
      </div>
      
      {/* Conservation highlights */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg mb-2">Biodiversity Conservation</h3>
          <p className="text-sm text-gray-600">Protecting 6 national parks, 49 wildlife sanctuaries, and 4 conservation reserves across Maharashtra.</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg mb-2">Community Involvement</h3>
          <p className="text-sm text-gray-600">Empowering over 10,500 Joint Forest Management Committees to work with local communities.</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg mb-2">Afforestation Efforts</h3>
          <p className="text-sm text-gray-600">Planted over 33 million saplings in the last five years to enhance forest cover across the state.</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-lg mb-2">Wildlife Protection</h3>
          <p className="text-sm text-gray-600">Special task forces for anti-poaching operations and wildlife crime prevention across protected areas.</p>
        </div>
      </div>
    </div>
  );
};

export default Forest;
