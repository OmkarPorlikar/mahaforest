// Design 1: Modern Split Layout

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


// Sample carousel images (replace with actual forest images)
const carouselImages = [
    "https://mahaforest.gov.in/writereaddata/banner/1712144139_BANNER.jpg",
    "https://mahaforest.gov.in/writereaddata/banner/1712144121_BANNER.jpg",
    "https://mahaforest.gov.in/writereaddata/banner/1742453911_BANNER.jpg",
    "https://mahaforest.gov.in/writereaddata/banner/1742536114_BANNER.png",
  ];
  
  const forestMessages = [
    {
      title: "अबाधित राखू वनांचे अस्तित्व, संवर्धनासाठी होऊ कटिबध्द",
      english: "Let's preserve the existence of forests, committed to conservation"
    },
    {
      title: "वने लावा, वने जगवा",
      english: "Plant forests, nurture forests"
    },
    {
      title: "हरित महाराष्ट्र, समृद्ध महाराष्ट्र",
      english: "Green Maharashtra, Prosperous Maharashtra"
    },
    {
      title: "वन संरक्षण, जीवन संरक्षण",
      english: "Forest protection, life protection"
    }
  ];
  
  // Information from the image
  const ministerInfo = {
    name: "श्री. गणेश सुभद्रा रामचंद्र नाईक",
    position: "मा. मंत्री (वन)",
    state: "महाराष्ट्र राज्य",
    email: "min.forest@maharashtra.gov",
    office: "कार्यालयीन क्रमांक :- 022 - 22027174/ 022 - 22029742"
  };

const Hero1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full relative overflow-hidden mb-[2rem]">
      <div className="relative">
        <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 min-h-[400px] gap-8">
          {/* Left Side: Carousel */}
          <div className="col-span-3 relative h-full flex items-center">
            <div className="w-full h-[500px] relative overflow-hidden rounded-lg shadow-xl">
              {carouselImages.map((image, index) => (
                <div 
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img 
                    src={image} 
                    alt={`Forest scene ${index+1}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h2 className="text-white text-3xl font-bold mb-2">{forestMessages[index % forestMessages.length].title}</h2>
                    <p className="text-white/80">{forestMessages[index % forestMessages.length].english}</p>
                  </div>
                </div>
              ))}
              
              <button 
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronLeft className="text-white" />
              </button>
              
              <button 
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronRight className="text-white" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side: Minister Info */}
          <div className="col-span-1 p-8 flex flex-col justify-center items-center bg-green bg-gradient-to-r from-green-900 to-green-800 h-[500px]">
            <div className="relative mb-6 border-4 border-green-600 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://mahaforest.gov.in/assets/images/minister.png" 
                alt="Forest Minister" 
                className="w-48 h-auto"
              />
            </div>
            
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-1">{ministerInfo.name}</h3>
              <p className="text-green-100 font-medium mb-4">{ministerInfo.position}</p>
              <p className="text-green-200 mb-1">{ministerInfo.state}</p>
              <p className="text-green-200 mb-1">{ministerInfo.email}</p>
              <p className="text-green-200 text-sm">{ministerInfo.office}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;