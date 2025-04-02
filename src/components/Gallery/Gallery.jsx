  
//   // Sample data - replace with actual data
//   const photos = [
//     { id: 1, src: "https://mahaforest.gov.in/writereaddata/event_file/1706242323_event_file3.JPG", alt: "Dense forest", title: "Sacred Groves of Karnataka", description: "Ancient forest areas protected by local communities" },
//     { id: 2, src: "https://mahaforest.gov.in/writereaddata/event_file/1727942041_event_file1.jpeg", alt: "Tiger in habitat", title: "Project Tiger Reserves", description: "Wildlife conservation efforts across India" },
//     { id: 3, src: "https://mahaforest.gov.in/writereaddata/event_file/1725105278_event_file0.jpeg", alt: "Forest officers", title: "Forest Protection Force", description: "Dedicated teams safeguarding our natural heritage" },
//     { id: 4, src: "https://mahaforest.gov.in/writereaddata/event_file/1717566785_event_file0.JPG", alt: "Mangrove forests", title: "Mangrove Conservation", description: "Protecting coastal ecosystems and biodiversity" },
//     { id: 5, src: "https://mahaforest.gov.in/writereaddata/event_file/1717566785_event_file2.JPG", alt: "Community forest management", title: "Joint Forest Management", description: "Partnering with communities for sustainable forests" },
//   ];
  
//   const videos = [
//     { id: 1, thumbnail: "https://mahaforest.gov.in/writereaddata/event_file/1723691862_event_file5.JPG", title: "Vanmahotsav Celebrations", description: "Annual tree planting festival across India" },
//     { id: 2, thumbnail: "https://mahaforest.gov.in/writereaddata/event_file/1723691862_event_file0.JPG", title: "Wildlife Census Operations", description: "Monitoring and tracking forest inhabitants" },
//     { id: 3, thumbnail: "https://mahaforest.gov.in/writereaddata/event_file/1714532971_event_file1.png", title: "Forest Fire Management", description: "Prevention and control strategies in practice" },
//   ];





  import React, { useState } from 'react';

const ForestGalleryDesign5 = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Sample data - replace with actual data
  const photos = [
    { 
      id: 1, 
      src: "https://mahaforest.gov.in/writereaddata/event_file/1706242323_event_file3.JPG", 
      alt: "Forest ecosystem", 
      title: "Biodiversity Hotspots", 
      description: "India houses 4 of 36 global biodiversity hotspots, preserving rich flora and fauna.",
      location: "Western Ghats" 
    },
    { 
      id: 2, 
      src: "https://mahaforest.gov.in/writereaddata/event_file/1727942041_event_file1.jpeg", 
      alt: "Tiger in natural habitat", 
      title: "Project Tiger", 
      description: "India's flagship conservation program to protect the Bengal tiger and its habitat.",
      location: "Corbett National Park" 
    },
    { 
      id: 3, 
      src: "https://mahaforest.gov.in/writereaddata/event_file/1725105278_event_file0.jpeg", 
      alt: "Forest officers planting trees", 
      title: "Afforestation Initiatives", 
      description: "Ongoing efforts to increase forest cover across various regions of India.",
      location: "Himachal Pradesh" 
    },
    { 
      id: 4, 
      src: "https://mahaforest.gov.in/writereaddata/event_file/1717566785_event_file0.JPG", 
      alt: "Tribal communities and forests", 
      title: "Community Forest Management", 
      description: "Working with indigenous communities for sustainable forest management.",
      location: "Central India" 
    },
    { 
      id: 5, 
      src: "https://mahaforest.gov.in/writereaddata/event_file/1717566785_event_file2.JPG", 
      alt: "Mangrove forests", 
      title: "Coastal Ecosystem Protection", 
      description: "Conservation of vital mangrove ecosystems along India's coastline.",
      location: "Sundarbans" 
    },
    { 
      id: 6, 
      src: "https://mahaforest.gov.in/writereaddata/event_file/1717566785_event_file2.JPG", 
      alt: "Himalayan forests", 
      title: "Himalayan Forest Conservation", 
      description: "Preserving the fragile forest ecosystems of the Himalayan region.",
      location: "Uttarakhand" 
    }
  ];
  
  const videos = [
    { 
      id: 1, 
      thumbnail: "https://mahaforest.gov.in/writereaddata/event_file/1706242323_event_file3.JPG", 
      title: "Forest Regeneration Documentary", 
      description: "Documenting the recovery of forest ecosystems after conservation interventions.",
      duration: "12:45" 
    },
    { 
      id: 2, 
      thumbnail: "https://mahaforest.gov.in/writereaddata/event_file/1717566785_event_file0.JPG", 
      title: "Anti-Poaching Operations", 
      description: "Behind the scenes look at efforts to combat wildlife poaching.",
      duration: "08:20" 
    },
    { 
      id: 3, 
      thumbnail: "https://mahaforest.gov.in/writereaddata/event_file/1725105278_event_file0.jpeg", 
      title: "Forest Fire Management", 
      description: "Technologies and strategies used to prevent and manage forest fires.",
      duration: "15:30" 
    },
    { 
      id: 4, 
      thumbnail: "https://mahaforest.gov.in/writereaddata/event_file/1706242323_event_file3.JPG", 
      title: "Forest Department Training", 
      description: "Training initiatives for forest officers and staff across India.",
      duration: "10:15" 
    }
  ];

  // Close lightbox
  const closeLightbox = () => {
    setSelectedItem(null);
  };

  return (
    <div className=" py-16 relative">
      {/* Decorative elements */}
      {/* <div className="absolute left-0 top-0 h-64 w-64 bg-green-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div> */}
      {/* <div className="absolute right-0 bottom-0 h-96 w-96 bg-green-200 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div> */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="inline-block relative text-3xl font-bold text-green-900 mb-3">
            <span className="absolute -left-6 top-0 text-4xl text-green-300 opacity-50">"</span>
            Forest Stories
            <span className="absolute -right-6 bottom-0 text-4xl text-green-300 opacity-50">"</span>
          </h2>
          <p className="text-green-700">Experience the natural heritage of India through our curated collection of visual stories</p>
          
          {/* Leaf-inspired toggle */}
          <div className="relative inline-flex items-center mt-8 bg-white rounded-full p-1 shadow-sm border border-green-100">
            <button 
              onClick={() => setActiveTab('photos')}
              className={`relative px-6 py-2 rounded-full text-sm font-medium z-10 transition-all ${
                activeTab === 'photos' 
                  ? 'text-white' 
                  : 'text-green-700 hover:text-green-900'
              }`}
            >
              Photos
              {activeTab === 'photos' && (
                <span className="absolute inset-0 bg-green-600 rounded-full -z-10"></span>
              )}
            </button>
            <button 
              onClick={() => setActiveTab('videos')}
              className={`relative px-6 py-2 rounded-full text-sm font-medium z-10 transition-all ${
                activeTab === 'videos' 
                  ? 'text-white' 
                  : 'text-green-700 hover:text-green-900'
              }`}
            >
              Videos
              {activeTab === 'videos' && (
                <span className="absolute inset-0 bg-green-600 rounded-full -z-10"></span>
              )}
            </button>
          </div>
        </div>
        
        {/* Gallery grid with natural curves */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === 'photos' ? photos : videos).map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-md">
                {/* Image with leaf-shaped cutout effect */}
                <div className="relative">
                  <img 
                    src={item.src || item.thumbnail} 
                    alt={item.alt || item.title} 
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Play button for videos */}
                  {activeTab === 'videos' && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                  
                  {/* Duration badge for videos */}
                  {activeTab === 'videos' && item.duration && (
                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {item.duration}
                    </div>
                  )}
                </div>
                
                {/* Info overlay with leaf pattern */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-900 to-transparent p-4 transform translate-y-1/2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-medium">{item.title}</h3>
                  {item.location && (
                    <div className="flex items-center mt-1 text-green-100 text-xs">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {item.location}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View all link */}
        <div className="mt-12 text-center">
          <a href={`/gallery/${activeTab}`} className="group inline-flex items-center text-green-700 font-medium hover:text-green-800">
            <span className="relative">
              View All {activeTab === 'photos' ? 'Photos' : 'Videos'}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Lightbox modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedItem.src || selectedItem.thumbnail} 
                alt={selectedItem.alt || selectedItem.title} 
                className="w-full max-h-96 object-contain bg-black"
              />
              <button 
                className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70"
                onClick={closeLightbox}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{selectedItem.title}</h3>
              {selectedItem.location && (
                <div className="flex items-center mt-2 text-gray-600 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedItem.location}
                </div>
              )}
              <p className="mt-4 text-gray-600">{selectedItem.description}</p>
              
              <div className="mt-6 flex justify-end">
                <button 
                  className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
                  onClick={closeLightbox}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForestGalleryDesign5;