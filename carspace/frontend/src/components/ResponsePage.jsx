import React from 'react';

const ResponsesPage = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Response Management</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid gap-4">
          {[1, 2, 3].map((response) => (
            <div key={response} className="border p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Response #{response}</h3>
                <span className="text-gray-500">2 hours ago</span>
              </div>
              <p className="text-gray-600 mb-2">Sample response content here...</p>
              <div className="flex gap-2">
                <button className="text-blue-500 hover:text-blue-700">Reply</button>
                <button className="text-red-500 hover:text-red-700">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ResponsesPage;