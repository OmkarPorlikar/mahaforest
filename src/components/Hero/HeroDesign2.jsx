import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroDesign2 = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Hero Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar with Ministry Info */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-green-100">
              <div className="bg-green-700 py-3 text-center">
                <img 
                  src="/assets/r1.png" 
                  alt="Maharashtra Forest Department Logo"
                  className="h-16 w-16 mx-auto object-contain"
                />
                <h3 className="text-white font-medium mt-2">महाराष्ट्र वनविभाग</h3>
              </div>
              
              <div className="p-4 flex flex-col items-center">
                <div className="relative w-28 h-28 mb-3">
                  <div className="absolute inset-0 bg-green-600 rounded-full opacity-20"></div>
                  <img 
                    src="/assets/r2.png"  
                    alt="Forest Minister" 
                    className="w-full h-full object-cover rounded-full border-2 border-green-600 p-1"
                  />
                </div>
                
                <h4 className="text-lg font-bold text-center text-gray-800">श्री. गणेश सुभद्रा रामचंद्र नाईक</h4>
                <p className="text-center text-gray-600 text-sm mt-1">मा. मंत्री (वन)</p>
                <p className="text-center text-gray-600 text-sm">महाराष्ट्र राज्य</p>
                
                <div className="mt-4 w-full space-y-2 text-sm">
                  <div className="flex items-center text-gray-700">
                    <span className="w-20 flex-shrink-0 font-medium">ईमेल:</span>
                    <a href="mailto:min.forest@maharashtra.gov" className="text-green-700 hover:underline truncate">min.forest@maharashtra.gov</a>
                  </div>
                  <div className="flex flex-col text-gray-700">
                    <span className="font-medium">कार्यालयीन क्रमांक:</span>
                    <span className="text-gray-600">022-22027174</span>
                    <span className="text-gray-600">022-22029742</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Carousel Area */}
          <div className="lg:col-span-9 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-green-900">
              {/* Main Carousel Image */}
              <div className="h-96">
                <img 
                  src="/assets/r3.png" 
                  alt="Forest conservation" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Text Overlay with Forest Department Mission */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent flex flex-col justify-end p-8">
                <h2 className="text-white text-4xl font-bold max-w-2xl">
                  अबाधित राखू वनांचे अस्तित्व, संवर्धनासाठी होऊ कटिबद्ध
                </h2>
                <p className="text-green-50 max-w-xl mt-3 text-lg">
                  Preserving forest existence, committed to conservation
                </p>
                
                <div className="mt-6 flex space-x-4">
                  <button className="bg-white text-green-800 px-6 py-2 rounded-full font-medium hover:bg-green-50 transition">
                    कार्यक्रम
                  </button>
                  <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white/10 transition">
                    अधिक माहिती
                  </button>
                </div>
              </div>
              
              {/* Carousel Controls */}
              <div className="absolute top-1/2 left-4 right-4 flex justify-between -translate-y-1/2">
                <button className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-white backdrop-blur-sm">
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button className="bg-white/20 hover:bg-white/40 p-2 rounded-full text-white backdrop-blur-sm">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-4 right-8 flex space-x-2">
                {[0, 1, 2].map((_, i) => (
                  <button key={i} 
                    className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/40'} hover:bg-white/80 transition`}>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDesign2;