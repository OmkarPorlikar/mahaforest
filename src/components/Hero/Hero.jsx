import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample carousel images (replace with actual forest images)
const carouselImages = [
  "/assets/r1.png",
  "/assets/r2.png",
  "/assets/r3.png",
  "/assets/r4.png",
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

// Design 1: Modern Split Layout
const Design1 = () => {
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
    <div className="w-full relative overflow-hidden">
      <div className="relative">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 min-h-[400px] gap-8">
          {/* Left Side: Carousel */}
          <div className="col-span-3 relative h-full flex items-center">
            <div className="w-full h-[400px] relative overflow-hidden rounded-lg shadow-xl">
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
          <div className="col-span-1 p-8 flex flex-col justify-center items-center bg-green">
            <div className="relative mb-6 border-4 border-green-600 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/api/placeholder/200/240" 
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

// Design 2: Overlay with Bottom Minister Panel
const Design2 = () => {
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
    <div className="w-full relative overflow-hidden">
      {/* Full width carousel */}
      <div className="w-full h-[80vh] relative">
        {/* Carousel images */}
        {carouselImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-700/70 mix-blend-multiply"></div>
            <img 
              src={image} 
              alt={`Forest scene ${index+1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Carousel message */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full max-w-4xl px-4">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            {forestMessages[currentIndex % forestMessages.length].title}
          </h2>
          <p className="text-white/90 text-xl md:text-2xl">
            {forestMessages[currentIndex % forestMessages.length].english}
          </p>
        </div>
        
        {/* Carousel controls */}
        <button 
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur-sm transition-all z-10"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur-sm transition-all z-10"
        >
          <ChevronRight className="text-white" size={24} />
        </button>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {carouselImages.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
      
      {/* Minister info panel - bottom strip */}
      <div className="bg-green-900/90 w-full py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-6 px-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-500">
              <img 
                src="/api/placeholder/64/64" 
                alt="Forest Minister" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white">
              <p className="font-bold">{ministerInfo.name}</p>
              <p className="text-sm text-green-200">{ministerInfo.position}, {ministerInfo.state}</p>
            </div>
          </div>
          <div className="text-green-200 text-sm">
            <p>{ministerInfo.email}</p>
            <p>{ministerInfo.office}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Design 3: Integrated Side Panel with Vertical Indicators
const Design3 = () => {
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
    <div className="w-full bg-gradient-to-r from-green-900 to-green-800 relative overflow-hidden">
      <div className="container mx-auto relative min-h-[700px]">
        {/* Background leaf pattern */}
        <div className="absolute inset-0 opacity-10">
          {/* This would be a leaf pattern SVG in a real implementation */}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 px-4 lg:px-0">
          {/* Left side - Minister info and navigation */}
          <div className="lg:col-span-3 flex flex-col justify-center items-center lg:items-start space-y-6 z-10">
            {/* Vertical carousel indicators */}
            <div className="hidden lg:flex flex-col space-y-4 absolute left-0 top-1/2 -translate-y-1/2">
              {carouselImages.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-12 rounded-full transition-all ${index === currentIndex ? 'bg-white' : 'bg-white/30'}`}
                />
              ))}
            </div>
            
            {/* Minister info */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500 mb-4">
                  <img 
                    src="/api/placeholder/128/128" 
                    alt="Forest Minister" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white text-xl font-bold">{ministerInfo.name}</h3>
                <p className="text-green-200">{ministerInfo.position}</p>
                <p className="text-green-200 text-sm">{ministerInfo.state}</p>
              </div>
              <div className="text-green-200 text-sm space-y-1">
                <p>{ministerInfo.email}</p>
                <p>{ministerInfo.office}</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Carousel */}
          <div className="lg:col-span-9 flex items-center">
            <div className="w-full relative rounded-lg overflow-hidden shadow-2xl">
              {carouselImages.map((image, index) => (
                <div 
                  key={index}
                  className={`relative transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img 
                    src={image} 
                    alt={`Forest scene ${index+1}`} 
                    className={`w-full h-[500px] object-cover transition-transform duration-1000 ${index === currentIndex ? 'scale-100' : 'scale-110'}`}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <h2 className="text-white text-4xl font-bold mb-2 drop-shadow-lg">
                      {forestMessages[index % forestMessages.length].title}
                    </h2>
                    <p className="text-white/90 text-xl max-w-2xl drop-shadow-md">
                      {forestMessages[index % forestMessages.length].english}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Mobile indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 lg:hidden">
                {carouselImages.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                  />
                ))}
              </div>
              
              {/* Navigation arrows */}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Design 4: Floating Minister Card with Ribbon
const Design4 = () => { 
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
    <div className="w-full relative">
      {/* Full-width carousel */}
      <div className="w-full h-[90vh] relative">
        {carouselImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/70"></div> */}
            <img 
              src={image} 
              alt={`Forest scene ${index+1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Main message overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="max-w-4xl text-center px-4">
            {/* <h2 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {forestMessages[currentIndex % forestMessages.length].title}
            </h2>
            <p className="text-white/90 text-xl md:text-2xl mb-12">
              {forestMessages[currentIndex % forestMessages.length].english}
            </p> */}
            
            {/* Carousel indicators */}
            {/* <div className="flex justify-center space-x-3">
              {carouselImages.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-12 h-1 rounded-full transition-all ${index === currentIndex ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div> */}
          </div>
        </div>
        
        {/* Floating minister card */}
        <div className="absolute bottom-8 right-8 md:right-12 lg:right-24 bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden max-w-xs border border-white/20 shadow-xl">
          {/* Top ribbon */}
          <div className="bg-green-700 py-1 px-4 text-white text-center text-sm">
            महाराष्ट्र वन विभाग
          </div>
          
          <div className="p-4 flex items-center space-x-4">
            <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-green-600">
              <img 
                src="/api/placeholder/80/80" 
                alt="Forest Minister" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white">
              <h3 className="font-bold text-lg">{ministerInfo.name}</h3>
              <p className="text-green-200 text-sm">{ministerInfo.position}</p>
              <p className="text-green-200 text-sm">{ministerInfo.state}</p>
            </div>
          </div>
          
          <div className="border-t border-white/10 p-3 text-green-200 text-xs space-y-1">
            <p>{ministerInfo.email}</p>
            <p>{ministerInfo.office}</p>
          </div>
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-all z-10"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-all z-10"
        >
          <ChevronRight className="text-white" size={24} />
        </button>
      </div>
    </div>
  );
};

// Design 5: Elegant Split with Animated Caption
const Design5 = () => {
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
    <div className="w-full bg-gradient-to-r from-green-900 to-green-700 relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left side: Message and minister info */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-12">
            <div>
              <h2 className="text-white text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                {forestMessages[currentIndex % forestMessages.length].title}
              </h2>
              <div className="h-1 w-24 bg-green-500 mb-6"></div>
              <p className="text-white/90 text-xl">
                {forestMessages[currentIndex % forestMessages.length].english}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-green-500">
                <img 
                  src="/api/placeholder/64/64" 
                  alt="Forest Minister" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-bold">{ministerInfo.name}</h3>
                <p className="text-green-200 text-sm">{ministerInfo.position}, {ministerInfo.state}</p>
                <p className="text-green-200 text-xs">{ministerInfo.email}</p>
              </div>
            </div>
            
            {/* Carousel indicators - vertical */}
            <div className="flex space-x-3">
              {carouselImages.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 transition-all ${index === currentIndex ? 'w-12 bg-white' : 'w-6 bg-white/40'}`}
                />
              ))}
            </div>
          </div>
          
          {/* Right side: Carousel */}
          <div className="lg:col-span-8 h-[600px] relative">
            <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl">
              {carouselImages.map((image, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img 
                    src={image} 
                    alt={`Forest scene ${index+1}`} 
                    className={`w-full h-full object-cover transition-transform duration-1000 ${index === currentIndex ? 'scale-100' : 'scale-110'}`}
                  />
                </div>
              ))}
              
              {/* Caption strip */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black/50 backdrop-blur-sm">
                <p className="text-white text-sm">{ministerInfo.office}</p>
              </div>
              
              {/* Left-right arrows */}
              <div className="absolute bottom-16 right-4 flex space-x-2">
                <button 
                  onClick={goToPrevious}
                  className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-all"
                >
                  <ChevronLeft className="text-white" size={20} />
                </button>
                
                <button 
                  onClick={goToNext}
                  className="bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-sm transition-all"
                >
                  <ChevronRight className="text-white" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component with design selection
const ForestDepartmentHero = () => {
  const [selectedDesign, setSelectedDesign] = useState(1);
  
  return (
    <div className="min-h-screen">
      {/* Design selector - would be removed in production */}
      <div className="bg-white  shadow-md flex justify-center ">
        {[1, 2, 3, 4, 5].map((designNum) => (
          <button
            key={designNum}
            onClick={() => setSelectedDesign(designNum)}
            className={`px-4 py-2 rounded ${selectedDesign === designNum ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
          >
            Design {designNum}
          </button>
        ))}
      </div>
      
      {/* Render selected design */}
      {selectedDesign === 1 && <Design1 />}
      {selectedDesign === 2 && <Design2 />}
      {selectedDesign === 3 && <Design3 />}
      {selectedDesign === 4 && <Design4 />}
      {selectedDesign === 5 && <Design5 />}
    </div>
  );
};

export default ForestDepartmentHero;