import React from 'react';
import { Link } from 'react-router-dom';

// Import images directly
// Note: Update these paths based on your project structure
import redSuvImage from '../assets/Promotion1.png';
import luxuryCarsImage from '../assets/Promotion2.png';

const PromotionCard = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buy Used Car Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-8 flex flex-col justify-between relative h-full">
            <div className="w-full max-w-xs z-10">
              <div className="uppercase text-gray-600 text-sm font-medium mb-2">CAR INVENTORY</div>
              <h3 className="text-3xl font-bold mb-4">Search Over 18000+ Used Vehicles</h3>
              <Link 
                to="/inventory" 
                className="inline-flex items-center text-gray-800 font-medium hover:text-red-500"
              >
                View Inventory
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
            
            <div className="absolute right-4 bottom-0 max-w-xs">
              <img 
                src={redSuvImage} 
                alt="Red SUV" 
                className="h-auto object-contain"
                style={{ maxHeight: '180px' }}
                onError={(e) => {
                  console.error("Failed to load Red SUV image");
                }}
              />
            </div>
          </div>

          {/* Sell Your Car Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-8 flex flex-col justify-between relative h-full">
            <div className="w-full max-w-xs z-10">
              <div className="uppercase text-gray-600 text-sm font-medium mb-2">CAR INVENTORY</div>
              <h3 className="text-3xl font-bold mb-4">Looking to sell your Used brand car?</h3>
              <Link 
                to="/sell-your-car" 
                className="inline-flex items-center text-gray-800 font-medium hover:text-red-500"
              >
                View Inventory
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
            
            <div className="absolute right-4 bottom-0 max-w-sm">
              <img 
                src={luxuryCarsImage} 
                alt="Luxury Cars" 
                className="h-auto object-contain"
                style={{ maxHeight: '150px' }}
                onError={(e) => {
                  console.error("Failed to load Luxury Cars image");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionCard;