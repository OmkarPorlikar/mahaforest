import React from 'react';
import { ChevronRight, Mail, Phone } from 'lucide-react';

const HeroDesign4 = () => {
  return (
    <div className="bg-gray-50">
      {/* Main Hero Container with Bottom Offset Design */}
      <div className="container mx-auto px-4 pt-6 pb-16">
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Top Ribbon with Department Name */}
          <div className="bg-green-800 py-2 px-6 text-white flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/assets/r1.png"
                alt="Forest department emblem" 
                className="h-8 w-8 mr-3"
              />
              <h3 className="font-medium">महाराष्ट्र वनविभाग | Maharashtra Forest Department</h3>
            </div>
            <div className="text-sm hidden md:block">
              Government of Maharashtra
            </div>
          </div>
          
          {/* Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Main Carousel Area - Takes 4 columns on large screens */}
            <div className="lg:col-span-4 relative">
              {/* Carousel */}
              <div className="relative h-96 lg:h-[500px]">
                <img 
                  src="/assets/r2.png"
                  alt="Forest landscape" 
                  className="w-full h-full object-cover"
                />
                
                {/* Semi-transparent overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-800/40 to-transparent"></div>
              </div>
              
              {/* Text Content Overlay */}
              <div className="absolute top-0 left-0 p-8 w-full h-full flex flex-col justify-center">
                <div className="max-w-2xl">
                  <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                    प्रकृतीसाठी प्रतिबद्ध • Committed to Nature
                  </div>
                  
                  <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
                    अबाधित राखू वनांचे अस्तित्व, संवर्धनासाठी होऊ कटिबद्ध
                  </h1>
                  
                  <p className="text-white/90 mt-4 text-lg max-w-xl">
                    Preserving our forests, securing biodiversity and ensuring a sustainable future for generations to come.
                  </p>
                  
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition flex items-center">
                      वन संरक्षण
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                    <button className="bg-white text-green-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                      अभयारण्ये भेट द्या
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Carousel Indicators - Vertical on the right */}
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
                {[0, 1, 2, 3].map((_, i) => (
                  <button key={i} 
                    className={`w-2 h-${i === 0 ? '8' : '4'} rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'} transition-all duration-300`}>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Minister Information Panel - Takes 1 column on large screens */}
            <div className="lg:col-span-1 bg-white p-6 flex flex-col items-center border-t lg:border-t-0 lg:border-l border-gray-200">
              <div className="font-medium text-green-800 text-center text-sm mb-4">महाराष्ट्र राज्य वनमंत्री</div>
              
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-green-100">
                <img 
                  src="/assets/r3.png" 
                  alt="Forest Minister" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h4 className="text-gray-800 font-bold text-center text-lg">श्री. गणेश सुभद्रा रामचंद्र नाईक</h4>
              <p className="text-gray-600 text-center text-sm">मा. मंत्री (वन)</p>
              <p className="text-gray-600 text-center text-sm mb-4">महाराष्ट्र राज्य</p>
              
              <div className="border-t border-gray-200 pt-4 w-full">
                <div className="flex items-center text-gray-700 mb-2">
                  <Mail className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  <a href="mailto:min.forest@maharashtra.gov" className="text-gray-600 text-sm hover:text-green-700 truncate hover:underline">
                    min.forest@maharashtra.gov
                  </a>
                </div>
                
                <div className="flex items-start text-gray-700">
                  <Phone className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <div className="text-gray-600 text-sm">
                    <div>022-22027174</div>
                    <div>022-22029742</div>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 w-full py-2 px-4 border border-green-600 text-green-600 rounded hover:bg-green-50 text-sm font-medium transition">
                संपर्क करा
              </button>
            </div>
          </div>
          
          {/* Quick Info Strip - Highlighted Forest Programs */}
          <div className="bg-green-50 py-4 px-6 border-t border-green-100 hidden lg:block">
            <div className="flex justify-between items-center">
              <div className="font-medium text-green-800">प्रमुख कार्यक्रम</div>
              
              <div className="flex space-x-6">
                {[
                  "वन विकास कार्यक्रम",
                  "वन्यजीव संरक्षण",
                  "सामाजिक वनीकरण",
                  "जैवविविधता संवर्धन"
                ].map((program, idx) => (
                  <a key={idx} href="#" className="text-green-700 hover:text-green-900 text-sm font-medium hover:underline flex items-center">
                    {program}
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDesign4;