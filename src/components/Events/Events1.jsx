import React from 'react';

const Events1 = () => {
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
    <div className="bg-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">OUR RECENT EVENTS</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
              {/* Image with zoom effect */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Content that slides up on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-800/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <p className="text-green-200 text-sm font-medium mb-2">{event.date}</p>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-green-100">{event.description}</p>
              </div>
              
              {/* Always visible title */}
              <div className="bg-white p-4 group-hover:bg-green-800 transition-colors duration-300">
                <h3 className="font-semibold text-green-800 group-hover:text-white">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-6 rounded-md inline-flex items-center transition-all duration-300 hover:translate-x-1">
            VIEW MORE EVENTS
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414L13.586 10 9.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events1;
