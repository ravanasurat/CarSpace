import React, { useState } from 'react';

// Default user details
const defaultUser = {
  name: "Jane cooper",
  email: "janecooper@gmail.com",
  mobile: "406555-012012",
  pincode: "411047",
  city: "Pune"
};

function ContactDetailsPage() {
  const [user, setUser] = useState(defaultUser);
  
  const handleSave = () => {
    console.log("Saving user details:", user);
    // Here you would typically send the data to your backend
    alert("Contact details saved successfully!");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-56 bg-white shadow-sm p-4">
        <div className="space-y-2">
          <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
            Dashboard
          </button>
          <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
            My Cars
          </button>
          <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
            My test drives
          </button>
          <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded">
            Contact Details
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-sm p-6 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-red-600">Contact Details</h1>
            <button className="bg-red-600 text-white px-4 py-1 text-sm rounded">
              Edit Data
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input
                type="text"
                value={user.name}
                disabled
                className="w-full p-2 bg-gray-100 rounded"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email ID</label>
              <input
                type="email"
                value={user.email}
                disabled
                className="w-full p-2 bg-gray-100 rounded"
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-600 mb-1">Mobile Number</label>
              <div className="flex">
                <div className="bg-gray-100 p-2 rounded-l flex items-center gap-1">
                  <span>+91</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <input
                  type="tel"
                  value={user.mobile}
                  disabled
                  className="flex-1 p-2 bg-gray-100 rounded-r"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm text-gray-600 mb-1">Pincode</label>
                <input
                  type="text"
                  value={user.pincode}
                  disabled
                  className="w-full p-2 bg-gray-100 rounded"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm text-gray-600 mb-1">City</label>
                <input
                  type="text"
                  value={user.city}
                  disabled
                  className="w-full p-2 bg-gray-100 rounded"
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSave}
              className="bg-red-600 text-white px-6 py-2 rounded">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetailsPage;