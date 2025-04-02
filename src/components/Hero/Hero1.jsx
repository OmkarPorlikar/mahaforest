import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Hero1 = () => {
  return (
    <div className="relative overflow-hidden bg-green-50">
      {/* Main Hero Container */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Carousel Section - 70% width on large screens */}
          <div className="w-full lg:w-8/12 relative rounded-lg overflow-hidden shadow-lg">
            {/* Carousel Image */}
            <div className="relative h-96 bg-green-900">
              <img 
                src="/assets/r1.png" 
                alt="Forest landscape" 
                className="w-full h-full object-cover"
              />
              
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/90 to-transparent p-6">
                <h2 className="text-white text-3xl font-bold mb-2">अबाधित राखू वनांचे अस्तित्व, संवर्धनासाठी होऊ कटिबद्ध</h2>
                <p className="text-green-50">Preserving our forests for future generations</p>
              </div>
              
              {/* Carousel Controls */}
              <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
                <button className="bg-white/30 hover:bg-white/50 p-2 rounded-full text-white backdrop-blur-sm">
                  <ArrowLeft className="h-6 w-6" />
                </button>
                <button className="bg-white/30 hover:bg-white/50 p-2 rounded-full text-white backdrop-blur-sm">
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                {[0, 1, 2, 3].map((_, i) => (
                  <button key={i} className={`h-2 rounded-full ${i === 0 ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}></button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Official Info Card - 30% width on large screens */}
          <div className="w-full lg:w-4/12 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="bg-green-800 p-4 text-white text-center">
              <h3 className="text-xl font-semibold">महाराष्ट्र वनविभाग</h3>
            </div>
            
            <div className="p-6 flex flex-col items-center">
              <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-green-600">
                <img 
                  src="/assets/r2.png"  
                  alt="Forest Minister" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h4 className="text-xl font-bold text-center text-gray-800">श्री. गणेश सुभद्रा रामचंद्र नाईक</h4>
              <p className="text-center text-gray-600 mt-1">मा. मंत्री (वन)</p>
              <p className="text-center text-gray-600">महाराष्ट्र राज्य</p>
              
              <div className="mt-4 w-full pt-4 border-t border-gray-200">
                <p className="text-gray-700 flex items-center justify-center">
                  <span className="font-semibold mr-2">ईमेल:</span>
                  <a href="mailto:min.forest@maharashtra.gov" className="text-green-700 hover:underline">min.forest@maharashtra.gov</a>
                </p>
                <p className="text-gray-700 text-center mt-2">
                  <span className="font-semibold">कार्यालयीन क्रमांक:</span> 022-22027174 / 022-22029742
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
