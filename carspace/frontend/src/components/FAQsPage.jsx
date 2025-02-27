import React from 'react';

const FAQsPage = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">FAQ Management</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          {[1, 2, 3].map((faq) => (
            <div key={faq} className="border p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Question #{faq}</h3>
                <div className="flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">Edit</button>
                  <button className="text-red-500 hover:text-red-700">Delete</button>
                </div>
              </div>
              <p className="text-gray-600">Sample answer here...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FAQsPage;