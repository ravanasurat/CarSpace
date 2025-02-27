// ValueSection.jsx
import React from 'react';

const ValuesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 bg-red-500"></div>
          <h2 className="text-4xl font-bold">Our Values</h2>
        </div>
        
        <div className="flex flex-col md:flex-row mb-8">
          <div className="md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First column of values */}
            <div>
              {/* Trust */}
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-blue-100 flex items-center justify-center text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Trust</h3>
                  <p className="text-gray-600 text-sm">
                    Trust is the cornerstone of every successful real estate transaction.
                  </p>
                </div>
              </div>
              
              {/* Client-Centric */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-blue-100 flex items-center justify-center text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Client-Centric</h3>
                  <p className="text-gray-600 text-sm">
                    Your dreams and needs are at the center of our universe. We listen, understand.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Second column of values with divider */}
            <div className="border-l-0 md:border-l border-gray-200 pl-0 md:pl-8">
              {/* Excellence */}
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-blue-100 flex items-center justify-center text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Excellence</h3>
                  <p className="text-gray-600 text-sm">
                    We set the bar high for ourselves. From the properties we list to the services we provide.
                  </p>
                </div>
              </div>
              
              {/* Our Commitment */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-blue-100 flex items-center justify-center text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Commitment</h3>
                  <p className="text-gray-600 text-sm">
                    We are dedicated to providing you with the highest level of service, professionalism.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;