import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Mail, Phone } from 'lucide-react';

const HeroDesign5 = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      image: "/assets/r1.png",
      title: "अबाधित राखू वनांचे अस्तित्व, संवर्धनासाठी होऊ कटिबद्ध",
      subtitle: "Preserving forests, committed to conservation",
    },
    {
      image: "/assets/r2.png",
      title: "वनसंपदा जतन करणे आमचे ध्येय",
      subtitle: "Our mission is to protect forest resources",
    },
    {
      image: "/assets/r3.png",
      title: "वन्यजीव संरक्षणासाठी एकत्र या",
      subtitle: "Join us for wildlife protection",
    },
  ];
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="bg-green-50 py-8">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Main Hero Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left Minister Info Panel */}
              <div className="md:w-64 lg:w-72 md:border-r border-gray-100 bg-gray-50 p-6">
                <div className="flex flex-col h-full">
                  {/* Department Logo */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <img 
                        src="/api/placeholder/80/80" 
                        alt="Forest department logo" 
                        className="h-14 w-14"
                      />
                    </div>
                  </div>
                  
                  {/* Minister Info */}
                  <div className="flex flex-col items-center flex-grow">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                      <img 
                        src="/api/placeholder/150/150" 
                        alt="Forest Minister" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h4 className="text-gray-800 font-bold text-center">श्री. गणेश सुभद्रा रामचंद्र नाईक</h4>
                    <p className="text-gray-600 text-center text-sm mt-1">मा. मंत्री (वन)</p>
                    <p className="text-gray-600 text-center text-sm">महाराष्ट्र राज्य</p>
                    
                    <div className="mt-4 w-full space-y-3 pt-4 border-t border-gray-200">
                      <div className="flex items-center text-gray-700">
                        <Mail className="h-4 w-4 text-green-700 mr-2 flex-shrink-0" />
                        <a href="mailto:min.forest@maharashtra.gov" className="text-gray-600 text-sm hover:text-green-700 truncate hover:underline">
                          min.forest@maharashtra.gov
                        </a>
                      </div>
                      
                      <div className="flex items-start text-gray-700">
                        <Phone className="h-4 w-4 text-green-700 mr-2 mt-1 flex-shrink-0" />
                        <div className="text-gray-600 text-sm">
                          <div>022-22027174</div>
                          <div>022-22029742</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Department Title */}
                  <div className="text-center mt-6 pt-4 border-t border-gray-200">
                    <h3 className="font-medium text-green-800">महाराष्ट्र वनविभाग</h3>
                    <p className="text-sm text-gray-600">Maharashtra Forest Department</p>
                  </div>
                </div>
              </div>
              
              {/* Right Content Area - Carousel */}
              <div className="flex-grow">
                <div className="relative h-96 md:h-[500px] overflow-hidden">
                  {/* Carousel Slides */}
                  <div className="absolute inset-0 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)`, width: `${slides.length * 100}%`, display: 'flex' }}>
                    {slides.map((slide, index) => (
                      <div key={index} className="relative w-full h-full" style={{ width: `${100 / slides.length}%` }}>
                        <img 
                          src={slide.image} 
                          alt={`Forest department slide ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Content Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent flex flex-col justify-end p-8 md:p-12">
                          <h2 className="text-white text-3xl md:text-4xl font-bold max-w-2xl leading-tight">
                            {slide.title}
                          </h2>
                          <p className="text-green-50 mt-2 max-w-xl">
                            {slide.subtitle}
                          </p>
                          
                          <div className="mt-6">
                            <button className="bg-white hover:bg-green-50 text-green-800 px-6 py-2 rounded-lg font-medium transition">
                              अधिक माहिती
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation Controls */}
                  <div className="absolute top-1/2 left-4 right-4 flex justify-between transform -translate-y-1/2 z-10">
                    <button 
                      onClick={prevSlide}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full text-white transition"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full text-white transition"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>
                  
                  {/* Slide Indicators */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                    {slides.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === activeSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'}`}
                        aria-label={`Go to slide ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Info Strip */}
            <div className="bg-green-800 text-white py-3 px-6 flex justify-between items-center text-sm">
              <div className="flex items-center">
                <span className="font-medium mr-2">ताज्या बातम्या:</span>
                <span className="truncate">वन संवर्धन सप्ताह २०२५ | नवीन वनीकरण योजना अंमलात</span>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="text-green-100 hover:text-white hover:underline">वन क्षेत्र</a>
                <a href="#" className="text-green-100 hover:text-white hover:underline">वृक्षारोपण</a>
                <a href="#" className="text-green-100 hover:text-white hover:underline">विभागाबद्दल</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDesign5;