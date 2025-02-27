import React, { useState } from 'react';

const HeroSection = () => {
  const [priceRange, setPriceRange] = useState(1000);
  const [carCount, setCarCount] = useState(2334);
  const [selectedTab, setSelectedTab] = useState('used');

  const handleRangeChange = (e) => {
    setPriceRange(parseInt(e.target.value));
    // In a real app, this would trigger a search/filter
    setCarCount(Math.floor(Math.random() * 3000) + 1000);
  };

  return (
    <section className="relative h-screen bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-50"
        style={{ backgroundImage: 'url(/assets/Sedan.png)' }}
      />
      
      <div className="container mx-auto px-8 pt-32 flex flex-col md:flex-row items-center justify-between h-full relative z-1">
        <div className="md:w-1/2 text-white mb-12 md:mb-0">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Find Quality-Assured Cars Tailored to Your Budget and Preferences
          </h1>
          <p className="text-xl mb-8">
            Browse a Wide Range of Certified Used Cars from Trusted Dealers and Private Sellers
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium">
            Book My Car
          </button>
          
          <div className="flex items-center mt-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-3 text-white">Working with 50+ Happy members</span>
          </div>
        </div>
        
        <div className="md:w-5/12 bg-white rounded-lg p-6">
          <div className="flex border-b mb-6">
            <button 
              onClick={() => setSelectedTab('new')}
              className={`pb-2 px-4 ${selectedTab === 'new' ? 'border-b-2 border-red-500 font-medium' : 'text-gray-500'}`}
            >
              New cars
            </button>
            <button 
              onClick={() => setSelectedTab('used')}
              className={`pb-2 px-4 ${selectedTab === 'used' ? 'border-b-2 border-red-500 font-medium' : 'text-gray-500'}`}
            >
              Used cars
            </button>
          </div>
          
          <form>
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Make" 
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Models" 
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span>1000</span>
                <span>5000</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="5000" 
                value={priceRange}
                onChange={handleRangeChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
            </div>
            
            <div className="mb-6">
              <input 
                type="text" 
                placeholder="Body" 
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md font-medium"
            >
              {carCount} Cars
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;