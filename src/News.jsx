import React, { useState } from 'react';

const News = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const newsItems = [
    {
      id: 1,
      date: "28/03/2025",
      title: "Advertisement regarding Honorary Wildlife Warden",
      description: "Advertisement regarding the appointment of Honorary Wildlife Warden Chandrapur Circle Chandrapur.",
      author: "by circle(Chandrapur)",
      isNew: false,
      category: "announcement"
    },
    {
      id: 2,
      date: "02/04/2025",
      title: "Tender Document Divisional Forest Office Washim",
      description: "Tender Document Divisional Forest Office Washim",
      author: "by headoffice",
      isNew: true,
      category: "tender"
    },
    {
      id: 3,
      date: "30/03/2025",
      title: "Forest Fire Prevention Guidelines Updated",
      description: "New guidelines for forest fire prevention measures during summer season.",
      author: "by Fire Prevention Cell",
      isNew: true,
      category: "notification"
    },
    {
      id: 4,
      date: "25/03/2025",
      title: "Wildlife Census Announcement",
      description: "Annual wildlife census to commence from May 15th across all sanctuaries.",
      author: "by Wildlife Wing",
      isNew: false,
      category: "announcement"
    }
  ];
  
  const filteredNews = activeTab === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeTab);
  
  return (
    <div className='bg-teal-50 p-2 lg:p-4 '> 
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 max-w-[100%] h-[500px] p-4 mx-auto my-[1rem]">
      {/* Header with forest background */}
      <div className="bg-green-700 text-white relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/api/placeholder/800/200')" }}></div>
        <div className="relative p-3 md:p-4 flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9" />
            </svg>
            News & Updates
          </h2>
          <button className="bg-teal-400 bg-opacity-20 hover:bg-opacity-30 rounded-full p-1 transition-all" aria-label="Refresh">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
        
        {/* Tabs - Horizontal scroll on mobile, normal on desktop */}
        <div className="flex p-2 space-x-1 overflow-x-auto scrollbar-hide">
          <TabButton 
            label="All Updates" 
            active={activeTab === 'all'} 
            onClick={() => setActiveTab('all')}
          />
          <TabButton 
            label="Announcements" 
            active={activeTab === 'announcement'} 
            onClick={() => setActiveTab('announcement')}
          />
          <TabButton 
            label="Tenders" 
            active={activeTab === 'tender'} 
            onClick={() => setActiveTab('tender')}
          />
          <TabButton 
            label="Notifications" 
            active={activeTab === 'notification'} 
            onClick={() => setActiveTab('notification')}
          />
        </div>
      </div>

      {/* News Content with optimized layout for mobile */}
      <div className="max-h-80 overflow-y-auto">
        {filteredNews.length === 0 ? (
          <div className="p-6 md:p-8 text-center text-gray-500">No news items in this category</div>
        ) : (
          filteredNews.map((item) => (
            <div key={item.id} className="border-b border-gray-200 last:border-b-0">
              <div className="p-3 md:p-4 hover:bg-green-50 transition-colors duration-200">
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-medium">
                        {item.date}
                      </span>
                      {item.isNew && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse flex items-center">
                          <span className="w-1 h-1 bg-white rounded-full mr-1"></span>
                          NEW
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-800 hover:text-green-700 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    <div className="text-gray-500 text-xs italic mt-2">{item.author}</div>
                  </div>
                  <button className="bg-green-100 hover:bg-green-200 text-green-800 p-2 rounded-full transition-colors duration-200 mt-3 md:mt-0 md:ml-4 flex-shrink-0 self-start md:self-center" aria-label="Read more">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="bg-white p-3 border-t border-gray-200">
        <a href="#" className="text-green-600 hover:text-green-800 font-medium flex items-center justify-center transition-colors duration-200">
          View All News & Updates
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
    </div>
  );
};

// Extracted tab button component for reusability
const TabButton = ({ label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`px-3 py-2 md:px-4 text-xs md:text-sm font-medium rounded-full transition-colors duration-200 whitespace-nowrap ${
      active 
        ? 'bg-white text-green-700' 
        : 'bg-green-600 hover:bg-green-500 text-white'
    }`}
  >
    {label}
  </button>
);

export default News;
