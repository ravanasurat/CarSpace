import React from 'react';

const BookingsPage = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Bookings Management</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Booking ID</th>
              <th className="text-left p-2">Customer</th>
              <th className="text-left p-2">Car</th>
              <th className="text-left p-2">Date</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">B001</td>
              <td className="p-2">Jane Smith</td>
              <td className="p-2">Toyota Camry</td>
              <td className="p-2">2024-02-24</td>
              <td className="p-2">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Pending</span>
              </td>
              <td className="p-2">
                <button className="text-green-500 hover:text-green-700 mr-2">Approve</button>
                <button className="text-red-500 hover:text-red-700">Reject</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default BookingsPage;