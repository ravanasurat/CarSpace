import React from 'react';
import { Link } from 'react-router-dom';

// Import images directly - this is the recommended approach for React
// Note: You'll need to replace these paths with your actual image paths
import sedanImage from '../assets/Sedan.png';
import campersImage from '../assets/Campers.png';
import cabrioletImage from '../assets/Cabriolet.png';
import pickupImage from '../assets/Pickup.png';
import supercarImage from '../assets/Supercar.png';
import minivansImage from '../assets/Minivans.png';

const CarCategory = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 p-4 rounded-lg mb-3 w-full h-32 flex items-center justify-center">
        <img 
          src={image} 
          alt={title} 
          className="max-h-full object-contain"
          onError={(e) => {
            console.error(`Failed to load image for ${title}`);
            e.target.src = '/assets/fallback-car.png'; // Fallback image
          }} 
        />
      </div>
      <span className="font-medium">{title}</span>
    </div>
  );
};

const ExploreCarsSection = () => {
  const carCategories = [
    { id: 1, title: 'Sedan', image: sedanImage },
    { id: 2, title: 'Campers', image: campersImage },
    { id: 3, title: 'Cabriolet', image: cabrioletImage },
    { id: 4, title: 'Pickup', image: pickupImage },
    { id: 5, title: 'Supercar', image: supercarImage },
    { id: 6, title: 'Minivans', image: minivansImage },
  ];

  return (
    <section className="px-8 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">
            <span className="inline-block w-1.5 h-10 bg-red-500 mr-4"></span>
            Explore Our Cars
          </h2>
          <Link to="/cars" className="text-gray-600 hover:text-gray-900">
            View more
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {carCategories.map((category) => (
            <Link to={`/category/${category.title.toLowerCase()}`} key={category.id}>
              <CarCategory image={category.image} title={category.title} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCarsSection;