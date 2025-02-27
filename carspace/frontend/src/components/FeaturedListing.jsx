import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import carImage1 from '../assets/Feature1.png';
import carImage2 from '../assets/Feature2.png';
import carImage3 from '../assets/Feature3.png';
import carImage4 from '../assets/Feature4.png';
import carImage5 from '../assets/Feature5.png';
import carImage6 from '../assets/Feature6.png';

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-48 object-cover"
          onError={(e) => {
            console.error(`Failed to load image for ${car.name}`);
            e.target.src = '/assets/fallback-car.png'; // Fallback image
          }}
        />
        <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-sm rounded">
          Featured
        </span>
      </div>
      
      <div className="p-4">
        <p className="text-red-500 text-sm mb-1">{car.miniCooper}</p>
        <h3 className="font-bold text-lg mb-1">{car.name} {car.year}</h3>
        <p className="text-red-500 font-medium mb-4">₹ {car.price.toLocaleString()}</p>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex items-center">
            <div className="mr-2">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z"></path>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-600">Fuel type</p>
              <p className="text-xs font-medium">{car.fuelType}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="mr-2">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"></path>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-600">Mileage</p>
              <p className="text-xs font-medium">{car.mileage} km</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="mr-2">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-600">Transmission</p>
              <p className="text-xs font-medium">{car.transmission}</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Link to={`/car/${car.id}`} className="text-gray-700 text-sm flex items-center">
            View details 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
          
          <button className="border border-gray-300 rounded-full p-2 hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedListings = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Use the imported car image instead of string path
  const cars = [
    {
      id: 1,
      miniCooper: 'Mini cooper 3',
      name: 'Chevrolet suburban',
      year: 2021,
      price: 27000,
      fuelType: 'Petrol',
      mileage: 20,
      transmission: 'Auto',
      image: carImage1 // Using imported image
    },
    {
      id: 2,
      miniCooper: 'Mini cooper 3',
      name: 'Chevrolet suburban',
      year: 2021,
      price: 27000,
      fuelType: 'Petrol',
      mileage: 90,
      transmission: 'Auto',
      image: carImage2 // Using imported image
    },
    {
      id: 3,
      miniCooper: 'Mini cooper 3',
      name: 'Chevrolet suburban',
      year: 2021,
      price: 27000,
      fuelType: 'Petrol',
      mileage: 90,
      transmission: 'Auto',
      image: carImage3 // Using imported image
    },
    {
      id: 4,
      miniCooper: 'Mini cooper 3',
      name: 'Chevrolet suburban',
      year: 2021,
      price: 27000,
      fuelType: 'Petrol',
      mileage: 90,
      transmission: 'Auto',
      image: carImage4 // Using imported image
    },
    {
      id: 5,
      miniCooper: 'Mini cooper 3',
      name: 'Chevrolet suburban',
      year: 2021,
      price: 27000,
      fuelType: 'Petrol',
      mileage: 90,
      transmission: 'Auto',
      image: carImage5 // Using imported image
    },
    {
      id: 6,
      miniCooper: 'Mini cooper 3',
      name: 'Chevrolet suburban',
      year: 2021,
      price: 27000,
      fuelType: 'Petrol',
      mileage: 90,
      transmission: 'Auto',
      image: carImage6 // Using imported image
    }
  ];

  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">
            <span className="inline-block w-1.5 h-10 bg-red-500 mr-3"></span>
            Feature listing
          </h2>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'all' 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveFilter('new')}
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'new' 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              New cars
            </button>
            <button 
              onClick={() => setActiveFilter('used')}
              className={`px-4 py-2 rounded-md ${
                activeFilter === 'used' 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              Used cars
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md">
            Load more
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;