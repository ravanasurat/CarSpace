import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Building2, Users } from "lucide-react";

const AdminPage = () => {
  const monthlyData = [
    { month: 'J', value: 80 },
    { month: 'F', value: 90 },
    { month: 'M', value: 100 },
    { month: 'A', value: 85 },
    { month: 'M', value: 40 },
    { month: 'J', value: 45 },
    { month: 'J', value: 60 },
    { month: 'A', value: 80 }
  ];

  const responseData = [
    { month: 'Jan', value: 80 },
    { month: 'Feb', value: 85 },
    { month: 'Mar', value: 35 },
    { month: 'Apr', value: 35 },
    { month: 'May', value: 45 },
    { month: 'Jun', value: 30 },
    { month: 'Jul', value: 35 },
    { month: 'Aug', value: 80 },
    { month: 'Sept', value: 85 },
    { month: 'Oct', value: 35 }
  ];

  const recentBookings = [
    { id: 1, name: 'Amelia Tuner', time: '10h ago' },
    { id: 2, name: 'Amelia Tuner', time: '15h ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white p-4 shadow-lg">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-red-600">Carspace</h1>
        </div>
        <nav className="space-y-2">
          <div className="flex items-center space-x-2 rounded-lg bg-blue-500 p-3 text-white">
            <span>🏠</span>
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-2 p-3 text-gray-600 hover:bg-gray-100">
            <span>👥</span>
            <span>Users</span>
          </div>
          <div className="flex items-center space-x-2 p-3 text-gray-600 hover:bg-gray-100">
            <span>📝</span>
            <span>Responses</span>
          </div>
          <div className="flex items-center space-x-2 p-3 text-gray-600 hover:bg-gray-100">
            <span>🚗</span>
            <span>Manage listing</span>
          </div>
          <div className="flex items-center space-x-2 p-3 text-gray-600 hover:bg-gray-100">
            <span>📅</span>
            <span>Bookings</span>
          </div>
          <div className="flex items-center space-x-2 p-3 text-gray-600 hover:bg-gray-100">
            <span>❓</span>
            <span>FAQs</span>
          </div>
          <div className="flex items-center space-x-2 p-3 text-gray-600 hover:bg-gray-100">
            <span>📰</span>
            <span>Blogs</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <p className="text-gray-600">Welcome Carspace Admin!</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Total Cars Card */}
          <div className="rounded-lg bg-blue-500 p-6 text-white">
            <div className="flex items-center gap-4">
              <Building2 size={24} />
              <div>
                <p className="text-sm">Total Cars</p>
                <h3 className="text-2xl font-bold">4,098</h3>
                <p className="text-sm">43 more to break last month record</p>
              </div>
            </div>
          </div>

          {/* Total Users Card */}
          <div className="rounded-lg bg-blue-500 p-6 text-white">
            <div className="flex items-center gap-4">
              <Users size={24} />
              <div>
                <p className="text-sm">Total Users</p>
                <h3 className="text-2xl font-bold">1,098</h3>
                <p className="text-sm">45 more to break last month record</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Total Bookings Chart */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-semibold">Total Bookings</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#60A5FA" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Overview Responses Chart */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-semibold">Overview (Responses)</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={responseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#8B5CF6" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-semibold">Recent Bookings</h3>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <span className="font-medium">{booking.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{booking.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;