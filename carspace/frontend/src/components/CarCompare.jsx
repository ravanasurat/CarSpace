import React, { useState } from 'react';
import { FaMapMarkerAlt, FaHeart, FaGasPump, FaRoad, FaCar, FaCalendarAlt, FaTrash } from 'react-icons/fa';
import carImage from '../assets/Rel1.png'; 

const CarSpecItem = ({ label, value }) => (
  <div className="py-3">
    <div className="font-medium text-gray-700 mb-1">{label}</div>
    <div>{value}</div>
  </div>
);

const CarItem = ({ car, onFavorite, onSchedule, onCall, onRemove }) => (
  <div className="flex flex-col">
    <div className="relative mb-3">
      <img 
        src={car.image || carImage} // Use the car image or fallback to the imported image
        alt={car.name}
        className="w-full h-48 object-cover rounded-lg"
        onError={(e) => {
          // Fallback if image fails to load
          e.target.src = 'https://via.placeholder.com/400x300?text=Car+Image';
          e.target.onerror = null;
        }}
      />
      <div className="absolute top-2 right-2 flex gap-2">
        <button 
          onClick={() => onFavorite(car.id)}
          className="bg-white rounded-full p-1"
        >
          <FaHeart className="w-4 h-4 text-red-500" />
        </button>
        <button 
          onClick={() => onRemove(car.id)}
          className="bg-white rounded-full p-1"
        >
          <FaTrash className="w-4 h-4 text-red-500" />
        </button>
      </div>
    </div>
    
    <h3 className="font-bold text-lg">{car.name}</h3>
    <div className="flex items-center mt-1 mb-5">
      <FaMapMarkerAlt className="text-red-500 mr-1" />
      <span className="text-sm text-red-500">{car.location}</span>
    </div>
    
    <div className="flex gap-2 mb-6">
      <button 
        onClick={() => onSchedule(car.id)}
        className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-2 rounded text-sm transition duration-300"
      >
        Schedule Test Drive
      </button>
      <button 
        onClick={() => onCall(car.id)}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded text-sm transition duration-300"
      >
        Call Now
      </button>
    </div>

    <CarSpecItem label="Owner Name" value={car.ownerName} />
    <CarSpecItem label="Budget" value={car.budget} />
    <CarSpecItem label="Year" value={car.year} />
    <CarSpecItem label="Engine Size" value={car.engineSize} />
    <CarSpecItem label="Mileage" value={car.mileage} />
    <CarSpecItem label="Driver type" value={car.driverType} />
    <CarSpecItem label="Cylinders" value={car.cylinders} />
    <CarSpecItem label="Fuel Type" value={car.fuelType} />
    <CarSpecItem label="Doors" value={car.doors} />
    <CarSpecItem label="Colour" value={car.colour} />
    <CarSpecItem label="Seats" value={car.seats} />
    <CarSpecItem label="City MPG" value={car.cityMPG} />
    <CarSpecItem label="Highway MPG" value={car.highwayMPG} />
  </div>
);

const CarCompare = () => {
  const [cars, setCars] = useState([
    { 
      id: 1, 
      name: 'Black Sedan', 
      location: 'Bangalore',
      image: carImage, // Use the imported image
      ownerName: 'Rustomjee',
      budget: '$48L - $90L',
      year: '2023',
      engineSize: '4.8 L',
      mileage: '28,000 Mileage',
      driverType: '2WD',
      cylinders: '6',
      fuelType: 'Petrol',
      doors: '4',
      colour: 'Black',
      seats: '5',
      cityMPG: '5',
      highwayMPG: '5'
    },
    { 
      id: 2, 
      name: 'Black Luxury Sedan', 
      location: 'Mumbai',
      image: carImage, // Use the imported image
      ownerName: 'Rustomjee',
      budget: '$48L - $90L',
      year: '2023',
      engineSize: '4.8 L',
      mileage: '28,000 Mileage',
      driverType: '2WD',
      cylinders: '6',
      fuelType: 'Petrol',
      doors: '4',
      colour: 'Black',
      seats: '5',
      cityMPG: '5',
      highwayMPG: '5'
    }
  ]);
  
  const handleAddCar = () => {
    // Default new car with same specs
    const newCar = { 
      id: cars.length + 1, 
      name: 'New Car', 
      location: 'Delhi',
      image: carImage, // Use the imported image
      ownerName: 'Rustomjee',
      budget: '$48L - $90L',
      year: '2023',
      engineSize: '4.8 L',
      mileage: '28,000 Mileage',
      driverType: '2WD',
      cylinders: '6',
      fuelType: 'Petrol',
      doors: '4',
      colour: 'Black',
      seats: '5',
      cityMPG: '5',
      highwayMPG: '5'
    };
    setCars([...cars, newCar]);
  };

  const handleRemoveCar = (id) => {
    // Remove car with the specified id
    setCars(cars.filter(car => car.id !== id));
  };
  
  const handleFavorite = (id) => {
    console.log(`Marked car ${id} as favorite`);
    // Implementation would toggle favorite status
  };
  
  const handleSchedule = (id) => {
    console.log(`Scheduling test drive for car ${id}`);
    // Implementation would open scheduling modal/page
  };
  
  const handleCall = (id) => {
    console.log(`Initiating call for car ${id}`);
    // Implementation would trigger call functionality
  };

  return (
    <section className="py-10 bg-gray-50 items-center">
      <div className="container mx-auto px-4 items-center">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-red-500"></div>
            <h2 className="text-4xl font-bold">Compare Cars</h2>
          </div>
          
          <button 
            onClick={handleAddCar}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center gap-2"
            disabled={cars.length >= 3}
          >
            <span>{cars.length >= 3 ? 'Maximum Cars Added' : 'Add Car'}</span>
          </button>
        </div>
        
        <p className="text-gray-600 mb-8 max-w-4xl">
          Compare multiple vehicles side-by-side to make an informed decision. Our detailed comparison highlights key specifications, performance metrics, and features to help you find your perfect car.
        </p>
        
        <div className="bg-white rounded-lg shadow p-6">
          {/* Car comparison grid with vertical layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map(car => (
              <CarItem 
                key={car.id}
                car={car} 
                onFavorite={handleFavorite}
                onSchedule={handleSchedule}
                onCall={handleCall}
                onRemove={handleRemoveCar}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarCompare;