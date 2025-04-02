import React from 'react';
import { ArrowLeft, ArrowRight, Mail, Phone } from 'lucide-react';

const HeroDesign3 = () => {
  return (
    <div className="bg-white pt-4 pb-12">
      <div className="container mx-auto px-4">
        {/* Main Hero Container with Overlap Layout */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative rounded-lg overflow-hidden shadow-xl h-96 md:h-[500px]">
            {/* Carousel Image */}
            <img 
              src="/assets/r1.png"  
              alt="Maharashtra forest landscape" 
              className="w-full h-full object-cover"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/40 to-transparent"></div>
            
            {/* Text Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
              {/* Department Emblem with Title */}
              <div className="flex items-center mb-6">
                <div className="bg-white rounded-full p-2 mr-4">
                  <img 
                    src="/assets/r2.png" 
                    alt="Department logo" 
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white text-xl font-medium">महाराष्ट्र वनविभाग</h3>
                  <p className="text-green-100 text-sm">Maharashtra Forest Department</p>
                </div>
              </div>
              
              {/* Main Tagline */}
              <h2 className="text-white text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
                अबाधित राखू वनांचे अस्तित्व, संवर्धनासाठी होऊ कटिबद्ध
              </h2>
              <p className="text-green-50 mt-3 max-w-xl text-lg">
                Committed to preserving our forests for future generations
              </p>
              
              {/* Statistics Row */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { number: "54,000", label: "हेक्टर संरक्षित वन" },
                  { number: "250+", label: "वन्य जीव प्रजाती" },
                  { number: "46", label: "संरक्षित क्षेत्रे" },
                  { number: "1,500+", label: "वनकर्मचारी" }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-white font-bold text-xl">{stat.number}</div>
                    <div className="text-green-50 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 flex justify-between">
              <button className="bg-green-800/50 hover:bg-green-800/70 p-2 rounded-full text-white backdrop-blur-sm">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button className="bg-green-800/50 hover:bg-green-800/70 p-2 rounded-full text-white backdrop-blur-sm">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 right-6 flex space-x-1">
              {[0, 1, 2, 3, 4].map((_, i) => (
                <button key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === 0 ? 'w-8 bg-white' : 'w-4 bg-white/50'}`}></button>
              ))}
            </div>
          </div>
          
          {/* Minister Info Card - Overlapping Position */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:absolute md:right-8 md:top-8 md:w-72 lg:w-80">
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-green-100 shadow-inner mb-4">
                <img 
                  src="/assets/r3.png"
                  alt="Forest Minister" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h4 className="text-lg font-bold text-gray-800 text-center">श्री. गणेश सुभद्रा रामचंद्र नाईक</h4>
              <p className="text-gray-600 text-center mt-1">मा. मंत्री (वन)</p>
              <p className="text-gray-600 text-center">महाराष्ट्र राज्य</p>
              
              <div className="mt-4 w-full space-y-3">
                <div className="flex items-center text-gray-700">
                  <Mail className="h-4 w-4 text-green-700 mr-2" />
                  <a href="mailto:min.forest@maharashtra.gov" className="text-gray-600 hover:text-green-700 text-sm hover:underline">
                    min.forest@maharashtra.gov
                  </a>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="h-4 w-4 text-green-700 mr-2" />
                  <div className="text-sm text-gray-600">
                    <div>022-22027174</div>
                    <div>022-22029742</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDesign3;