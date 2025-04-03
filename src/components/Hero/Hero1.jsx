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
    <div className="w-full relative overflow-hidden mb-4 md:mb-8">
      <div className="relative w-full">
        {/* Removed container class to allow full width */}
        <div className="w-full px-2 py-2 md:px-4 md:py-4">
          {/* Grid layout with four columns for better proportion */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Carousel - Full width on mobile, 2/4 on desktop */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] relative overflow-hidden rounded-lg shadow-xl">
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
                    <div className="absolute bottom-0 left-0 w-full p-3 sm:p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">{forestMessages[index % forestMessages.length].title}</h2>
                      <p className="text-white/80 text-xs sm:text-sm md:text-base">{forestMessages[index % forestMessages.length].english}</p>
                    </div>
                  </div>
                ))}
                
                <button 
                  onClick={goToPrevious}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-1 md:p-2 rounded-full backdrop-blur-sm transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="text-white w-4 h-4 md:w-6 md:h-6" />
                </button>
                
                <button 
                  onClick={goToNext}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-1 md:p-2 rounded-full backdrop-blur-sm transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="text-white w-4 h-4 md:w-6 md:h-6" />
                </button>
                
                <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Minister Info - Above carousel on mobile, right side on desktop with MORE space */}
            <div className="lg:col-span-1 order-1 lg:order-1 mb-4 lg:mb-0">
              <div className="p-4 md:p-6 lg:p-8 bg-gradient-to-r from-green-900 to-green-800 rounded-lg h-auto lg:h-[500px] grid grid-cols-2 lg:grid-cols-1 gap-4 items-center">
                <div className="relative lg:mx-auto border-2 md:border-4 border-green-600 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://mahaforest.gov.in/assets/images/minister.png" 
                    alt="Forest Minister" 
                    className="w-40 sm:w-48 md:w-56 lg:w-42 h-auto"
                  />
                </div>
                
                <div className="text-left lg:text-center text-white">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-0 lg:mb-2">{ministerInfo.name}</h3>
                  <p className="text-green-100 text-sm md:text-base font-medium mb-1 lg:mb-4">{ministerInfo.position}</p>
                  <p className="text-green-200 text-xs md:text-sm mb-0 lg:mb-2">{ministerInfo.state}</p>
                  <p className="text-green-200 text-xs md:text-sm mb-0 lg:mb-2">{ministerInfo.email}</p>
                  <p className="text-green-200 text-xs md:text-sm">{ministerInfo.office}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
