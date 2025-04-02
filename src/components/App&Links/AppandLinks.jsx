import React from 'react';

const AppandLink = () => {
  const applications = [
    { name: 'Intranet Portal', icon: 'M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 100-2 1 1 0 000 2zm0 8a1 1 0 100-2 1 1 0 000 2z' },
    { name: 'GIS', icon: 'M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' },
    { name: 'Asset Manager', icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0' },
    { name: 'Account Management', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { name: 'HR Management', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { name: 'Safari Booking', icon: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z' }
  ];

  const links = [
    { name: 'Field Offices', icon: 'M4 6h16M4 12h16m-7 6h7' },
    { name: 'Maharashtra Zoo Authority', icon: 'M3 12l2-2m0 0l2 2m-2-2v6m6-6l2-2m0 0l2 2m-2-2v6' },
    { name: 'Green Tube Channel', icon: 'M5 3a2 2 0 012-2h10a2 2 0 012 2v18l-7-3-7 3V3z' },
    { name: 'Maharashtra State Biodiversity Board', icon: 'M12 2a10 10 0 100 20 10 10 0 000-20z' },
    { name: 'Forest Development Corporation Of Maharashtra', icon: 'M12 2l6 6H6l6-6z' },
    { name: 'Carbon Estimator', icon: 'M4 8h16M4 16h16' },
    { name: 'Maha e-Auction', icon: 'M6 3h12M6 8h12M9 12h6M9 16h6' },
  ];

  return (
    <div className="w-full p-6 bg-gray-50">
      <div className="grid grid-cols-4 gap-8">
        {/* Applications Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden col-span-2">
          <div className="bg-green-700 p-4">
            <h2 className="text-xl font-bold text-white">Applications</h2>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow transition-all hover:border-green-300 cursor-pointer flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={app.icon} />
                    </svg>
                  </div>
                  <span className="text-center font-medium text-gray-700">{app.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Links Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden col-span-2">
          <div className="bg-green-700 p-4">
            <h2 className="text-xl font-bold text-white">Important Links</h2>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-2 gap-4">
              {links.map((link, index) => (
                <div key={index} className="p-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow transition-all hover:border-green-300 cursor-pointer flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={link.icon} />
                  </svg>
                  <span className="font-medium text-gray-700">{link.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppandLink;
