import React from 'react';

const ManageListingPage = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Manage Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((listing) => (
          <div key={listing} className="bg-white rounded-lg shadow p-4">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <h3 className="font-medium mb-2">Car Listing #{listing}</h3>
            <p className="text-gray-600 mb-4">Brief description of the car...</p>
            <div className="flex justify-between items-center">
              <span className="font-bold">$299/day</span>
              <div className="flex gap-2">
                <button className="text-blue-500 hover:text-blue-700">Edit</button>
                <button className="text-red-500 hover:text-red-700">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ManageListingPage;