import React from 'react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "GNSS Receiver Demonstration",
      date: "March 25, 2025",
      description: "FSI officials being given demonstration of the GNSS receiver for accurate forest mapping.",
      image: "https://mahaforest.gov.in/writereaddata/event_file/1706242323_event_file3.JPG" ,
      featured: true
    },
    {
      id: 2,
      title: "Field Training Programme",
      date: "March 18, 2025",
      description: "Training on forest inventory methods for field staff across multiple zones.",
      image: "https://mahaforest.gov.in/writereaddata/event_file/1727942041_event_file1.jpeg",
      featured: false
    },
    {
      id: 3,
      title: "Technology Workshop",
      date: "March 10, 2025",
      description: "Workshop on implementing new technologies for forest fire monitoring and prevention.",
      image: "https://mahaforest.gov.in/writereaddata/event_file/1725105278_event_file0.jpeg",
      featured: false
    },
    {
      id: 4,
      title: "Conservation Summit",
      date: "February 28, 2025",
      description: "Annual summit discussing conservation strategies and biodiversity preservation.",
      image: "https://mahaforest.gov.in/writereaddata/event_file/1717566785_event_file0.JPG",
      featured: true
    },
    {
      id: 5,
      title: "Reforestation Initiative Launch",
      date: "February 15, 2025",
      description: "Launch of national initiative for reforestation of degraded forest lands.",
      image: "https://mahaforest.gov.in/writereaddata/event_file/1717566785_event_file2.JPG",
      featured: false
    }
  ];

  return (
    <div className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900">OUR RECENT EVENTS</h2>
          <div className="w-32 h-1  mx-auto mt-6"></div>
        </div>
        
        <div className="flex flex-wrap justify-center">
          {events.map((event) => (
            <div key={event.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="group h-64 perspective">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front - Image Side */}
                  <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden shadow-md backface-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-green-100 text-sm">{event.date}</p>
                    </div>
                  </div>
                  
                  {/* Back - Details Side */}
                  <div className="absolute inset-0 w-full h-full bg-white border-2 border-green-600 rounded-lg shadow-lg backface-hidden rotate-y-180 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-green-800 mb-3">{event.title}</h3>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <div className="mt-auto">
                      <p className="text-sm text-gray-500">
                        <span className="font-medium">Date:</span> {event.date}
                      </p>
                      <p className="text-sm text-gray-500">
                        <span className="font-medium">Location:</span> {event.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-lg inline-flex items-center transition-all duration-300 hover:shadow-lg">
            VIEW MORE EVENTS
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};




export default Events;