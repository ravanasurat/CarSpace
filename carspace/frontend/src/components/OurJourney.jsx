import React from 'react';
import journeyImage from '../assets/Journey.png'; // Import the image properly

const OurJourney = () => {
  const stats = [
    { number: '200+', label: 'Happy Customers' },
    { number: '10k+', label: 'Processed Car Claims' },
    { number: '16+', label: 'Years of Experience' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              <span className="border-l-4 border-red-500 pl-3">Our Journey</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gray-100 rounded-lg p-4 text-center hover:shadow-md transition duration-300"
              >
                <div className="text-2xl font-bold text-red-500">{stat.number}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={journeyImage}
            alt="Speedometer"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurJourney;