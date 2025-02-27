import React from 'react';
import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Import car images
import car1Image from '../assets/Car1.png';
import car2Image from '../assets/Car2.png';
import car3Image from '../assets/Car3.png';
import car4Image from '../assets/Car4.png';
import car5Image from '../assets/Car5.png';
import car6Image from '../assets/Car6.png';

const CarList = () => {
  const navigate = useNavigate();
  
  const filters = [
    { label: 'Price & Payment', key: 'price' },
    { label: 'Mileage', key: 'mileage' },
    { label: 'Year', key: 'year' },
    { label: 'Online shopping options', key: 'shopping' },
    { label: 'Exterior color', key: 'exterior' },
    { label: 'Interior color', key: 'interior' },
    { label: 'Drive train', key: 'drivetrain' },
    { label: 'Transmission', key: 'transmission' },
  ];

  const cars = [
    {
      id: 1,
      model: 'Chevrolet suburban 2021',
      price: '27,000',
      image: car1Image, // Use imported image
      fuelType: 'Petrol',
      mileage: '40 km',
      transmission: 'Auto',
      featured: true,
    },
    {
      id: 2,
      model: 'Chevrolet suburban 2021',
      price: '27,000',
      image: car2Image, // Use imported image
      fuelType: 'Petrol',
      mileage: '40 km',
      transmission: 'Auto',
      featured: true,
    },
    {
      id: 3,
      model: 'Chevrolet suburban 2021',
      price: '27,000',
      image: car3Image, // Use imported image
      fuelType: 'Petrol',
      mileage: '40 km',
      transmission: 'Auto',
      featured: true,
    },
    {
      id: 4,
      model: 'Chevrolet suburban 2021',
      price: '27,000',
      image: car4Image, // Use imported image
      fuelType: 'Petrol',
      mileage: '40 km',
      transmission: 'Auto',
      featured: true,
    },
    {
      id: 5,
      model: 'Chevrolet suburban 2021',
      price: '27,000',
      image: car5Image, // Use imported image
      fuelType: 'Petrol',
      mileage: '40 km',
      transmission: 'Auto',
      featured: true,
    },
    {
      id: 6,
      model: 'Chevrolet suburban 2021',
      price: '27,000',
      image: car6Image, // Use imported image
      fuelType: 'Petrol',
      mileage: '40 km',
      transmission: 'Auto',
      featured: true,
    },
  ];

  const handleViewDetails = (carId) => {
    navigate(`/Certified_pre/${carId}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 border-l-4 border-red-500 pl-2">
        Used cars for sale nationwide
      </h1>
      
      <div className="flex gap-8">
        {/* Filters Section */}
        <div className="w-64 flex-shrink-0">
          <div className="mb-4">
            <div className="flex gap-2 mb-4">
              <button className="px-4 py-2 bg-white border rounded-md hover:bg-gray-50">
                New cars
              </button>
              <button className="px-4 py-2 bg-white border rounded-md hover:bg-gray-50">
                Used cars
              </button>
            </div>
            
            <div className="space-y-3">
              <select className="w-full p-2 border rounded-md">
                <option>Car</option>
              </select>
              <select className="w-full p-2 border rounded-md">
                <option>Body style</option>
              </select>
              <select className="w-full p-2 border rounded-md">
                <option>Make</option>
              </select>
              <select className="w-full p-2 border rounded-md">
                <option>Model</option>
              </select>
              <input 
                type="text" 
                placeholder="Zip code"
                className="w-full p-2 border rounded-md"
              />
              <button className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Search
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {filters.map((filter) => (
              <div key={filter.key} className="border rounded-md">
                <button className="w-full p-3 text-left flex justify-between items-center hover:bg-gray-50">
                  {filter.label}
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path 
                      fill="currentColor" 
                      d="M7 10l5 5 5-5z"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cars.map((car) => (
              <div key={car.id} className="border rounded-lg overflow-hidden bg-white">
                <div className="relative">
                  {car.featured && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                      Featured
                    </span>
                  )}
                  <img 
                    src={car.image} 
                    alt={car.model}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{car.model}</h3>
                  <p className="text-red-500 font-bold">₹ {car.price}</p>
                  <div className="flex gap-4 mt-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <span>Fuel type:</span>
                      <span>{car.fuelType}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>Mileage:</span>
                      <span>{car.mileage}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>Transmission:</span>
                      <span>{car.transmission}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <button 
                      onClick={() => handleViewDetails(car.id)}
                      className="text-blue-500 hover:underline"
                    >
                      View details →
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                      <svg 
                        className="w-6 h-6" 
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;