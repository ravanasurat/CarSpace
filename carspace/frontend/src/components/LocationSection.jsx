import React from 'react';

const LocationSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Location Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold flex items-center">
          <span className="w-1 h-8 bg-red-600 mr-2"></span>
          Location
        </h2>
      </div>

      {/* Address */}
      <div className="mb-4">
        <p className="text-gray-700">
          4517 Washington Ave. Manchester, Kentucky 39495
        </p>
      </div>

      {/* Map Container */}
      <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
        {/* Replace the src URL with your actual Google Maps embed URL */}
        <iframe
          src="https://www.google.com/maps/embed?pb=your-embed-url-here"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* For development/placeholder purposes */}
      <div className="hidden">
        <img 
          src="/api/placeholder/1200/400" 
          alt="Map placeholder"
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  );
};

export default LocationSection;