import React from 'react';

const Forest = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left: Image */}
        <div className="w-full md:w-2/5 relative">
          <img 
            src= "https://mahaforest.gov.in/assets/images/welcomeimg.jpg" 
            alt="Tigers on forest road" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute top-0 left-0 w-full h-1 bg-green-700"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-green-700"></div>
        </div>
        
        {/* Right: Content */}
        <div className="w-full md:w-3/5 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-8 bg-green-700 mr-3 inline-block"></span>
            Maharashtra Forest
          </h2>
          <p className="text-gray-700 mb-4">
            Globally as well as nationally, Forest Conservation is increasingly being viewed as a 
            powerful instrument in sequestering carbon and thereby offset adverse climate change.
          </p>
          <p className="text-gray-700 mb-6">
            Maharashtra Forest Department, being custodian of the State's rich and diverse 
            bio-diversity, is committed to a conservation-centric management and protection strategy...
          </p>
          <a 
            href="#" 
            className="text-green-800 font-semibold border-b-2 border-green-700 pb-1 hover:text-green-700 transition"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Forest;
