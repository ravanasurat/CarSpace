import React, { useState } from 'react';
import { Heart, Share2, Printer } from 'lucide-react';

// Import images directly - this is the recommended approach for React
import view1Image from '../assets/view1.png';
import view2Image from '../assets/view2.png';
import view3Image from '../assets/view3.png';
import view4Image from '../assets/view4.png';
import view5Image from '../assets/view5.png';

const CarDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const carDetails = {
    name: 'Mercedes-Benz C class',
    year: '2023',
    category: 'Mercedes',
    class: 'C Class',
    condition: 'Used',
    price: '₹659999',
    originalPrice: '₹859999',
  };

  // Use the imported images directly
  const images = [
    view1Image,
    view2Image,
    view3Image,
    view4Image,
    view5Image,
  ];
  
  const breadcrumbs = [
    { label: carDetails.year, href: '#' },
    { label: carDetails.category, href: '#' },
    { label: carDetails.class, href: '#' },
    { label: carDetails.condition, href: '#' },
    { label: 'Used', href: '#' },
  ];
  
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 border-l-4 border-red-600 pl-3">
            {carDetails.name}
          </h1>
          <div className="flex gap-2 mt-2">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                  {item.label}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <span className="text-2xl font-bold">{carDetails.price}</span>
            <span className="text-xl text-gray-400 line-through">
              {carDetails.originalPrice}
            </span>
          </div>
          <div className="flex gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Heart className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Share2 className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Printer className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Image Gallery */}
      <div className="mb-8">
        <div className="w-full h-[400px] overflow-hidden rounded-lg mb-4">
          <img
            src={images[selectedImage]}
            alt={`Mercedes-Benz C class view ${selectedImage + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error(`Failed to load main image ${selectedImage + 1}`);
              e.target.src = '../assets/fallback-car.png'; // Fallback image
            }}
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer overflow-hidden rounded-lg h-24 ${
                selectedImage === index ? 'ring-2 ring-red-600' : ''
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image}
                alt={`Mercedes-Benz C class thumbnail ${index + 1}`}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                onError={(e) => {
                  console.error(`Failed to load thumbnail image ${index + 1}`);
                  e.target.src = '../assets/fallback-car.png'; // Fallback image
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarDetails;