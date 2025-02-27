import React, { useState } from 'react';

const CarFeatures = () => {
  const [formData, setFormData] = useState({
    name: '',
    ownerName: '',
    email: '',
    phone: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Details */}
        <div className="col-span-2">
          {/* Description Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="w-1 h-8 bg-red-600 mr-2"></span>
              Description
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a pass There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form look even by injected humour, or randomised There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable.
            </p>
          </div>

          {/* Car Overview Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="w-1 h-8 bg-red-600 mr-2"></span>
              Car Overview
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-cols-2 gap-y-4">
                <div className="text-gray-600">Condition:</div>
                <div>New</div>
                <div className="text-gray-600">Stock Number:</div>
                <div>NB990</div>
                <div className="text-gray-600">VIN Number:</div>
                <div>84HK09ZU0DC</div>
                <div className="text-gray-600">Year:</div>
                <div>2023</div>
                <div className="text-gray-600">Mileage:</div>
                <div>28,0000 Mileage</div>
                <div className="text-gray-600">Transmission:</div>
                <div>Automatic</div>
                <div className="text-gray-600">Engine Size:</div>
                <div>4.8 L</div>
                <div className="text-gray-600">Driver type:</div>
                <div>2WD</div>
              </div>
              <div className="grid grid-cols-2 gap-y-4">
                <div className="text-gray-600">Cylinders:</div>
                <div>6</div>
                <div className="text-gray-600">Fuel Type:</div>
                <div>Petrol</div>
                <div className="text-gray-600">Doors:</div>
                <div>4</div>
                <div className="text-gray-600">Colour:</div>
                <div>Black</div>
                <div className="text-gray-600">Seats:</div>
                <div>5</div>
                <div className="text-gray-600">City MPG:</div>
                <div>18</div>
                <div className="text-gray-600">Highway MPG:</div>
                <div>28</div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="w-1 h-8 bg-red-600 mr-2"></span>
              Features
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>A/C: Front</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Front fog light</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Power steering</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Central locking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Rain sensing wipe</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Vanity mirror</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Leather</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Rear Spoilers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Trunk Light</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Sports package</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Sun roof</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Navigation system</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="relative">
          <div className="sticky top-4 space-y-4">
            <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors">
              Schedule Test Drive
            </button>
            <button className="w-full border border-gray-300 text-red-600 py-3 rounded-md hover:bg-gray-50 transition-colors">
              Make An Offer Price
            </button>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-md space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-md"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="ownerName"
                placeholder="Owner of Car"
                className="w-full px-3 py-2 border rounded-md"
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 border rounded-md"
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="w-full px-3 py-2 border rounded-md"
                onChange={handleInputChange}
              />
              <textarea
                name="description"
                placeholder="Description"
                rows="4"
                className="w-full px-3 py-2 border rounded-md"
                onChange={handleInputChange}
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarFeatures;