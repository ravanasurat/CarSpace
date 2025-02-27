import React from 'react';
import { Heart, ChevronRight, Fuel, GitFork, Settings } from 'lucide-react';

// Import images directly
import rel1Image from '../assets/Rel1.png';
import rel2Image from '../assets/Rel2.png';
import rel3Image from '../assets/Rel3.png';
// Import a fallback image
import fallbackCarImage from '../assets/Hero.png';

const RelatedListings = () => {
  const carListings = [
    {
      id: 1,
      title: "Mini cooper 3",
      model: "Chevrolet suburban 2021",
      price: "27,000",
      image: rel1Image, // Using imported image
      specs: {
        fuelType: "Petrol",
        mileage: "90 km",
        transmission: "Auto"
      },
      isNew: true
    },
    {
      id: 2,
      title: "Mini cooper 3",
      model: "Chevrolet suburban 2021",
      price: "27,000",
      image: rel2Image, // Using imported image
      specs: {
        fuelType: "Petrol",
        mileage: "90 km",
        transmission: "Auto"
      },
      isNew: true
    },
    {
      id: 3,
      title: "Mini cooper 3",
      model: "Chevrolet suburban 2021",
      price: "27,000",
      image: rel3Image, // Using imported image
      specs: {
        fuelType: "Petrol",
        mileage: "90 km",
        transmission: "Auto"
      },
      isNew: true
    }
  ];

  const CarCard = ({ car }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Card Image */}
      <div className="relative h-48">
        <img
          src={car.image}
          alt={car.model}
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error(`Failed to load image for ${car.model}`);
            e.target.src = fallbackCarImage; // Use fallback image
          }}
        />
        {car.isNew && (
          <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-sm rounded">
            New
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <p className="text-sm text-red-600">{car.title}</p>
        <h3 className="text-lg font-semibold mb-2">{car.model}</h3>
        <p className="text-red-600 font-bold mb-4">₹ {car.price}</p>

        {/* Specifications */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">
              {car.specs.fuelType}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">
              {car.specs.mileage}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Settings className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-600">
              {car.specs.transmission}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center">
          <button className="text-gray-700 flex items-center gap-1 hover:text-red-600 transition-colors">
            View details
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Section Header */}
      <h2 className="text-2xl font-bold text-center mb-8">
        Related Listing
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {carListings.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default RelatedListings;