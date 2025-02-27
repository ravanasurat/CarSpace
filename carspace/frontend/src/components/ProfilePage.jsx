// ProfilePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Stats Card Component
const StatsCard = ({ title, count }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-32 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
      <div className="p-4">
        <h3 className="text-gray-600 font-medium mb-1">{title}</h3>
        <p className="text-gray-800 font-semibold">{count}</p>
      </div>
    </div>
  );
};

// Sidebar Navigation Item Component
const NavItem = ({ href, isActive, children }) => {
  return (
    <a 
      href={href}
      className={`block px-4 py-2 rounded mb-2 transition-colors ${
        isActive 
          ? 'text-blue-500 bg-blue-100' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {children}
    </a>
  );
};

const ProfilePage = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('currentUser') || '{}');

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          {/* Logo */}
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-blue-500">Car</span>
            <span className="text-red-500">space</span>
          </h2>

          {/* User Profile Section */}
          <div className="mb-8 text-center">
            <img 
              src={userData.profileImage || "https://randomuser.me/api/portraits/men/1.jpg"}
              alt="Profile"
              className="w-20 h-20 rounded-full mx-auto mb-3"
            />
            <h3 className="font-medium text-gray-800">{userData.name || "John Doe"}</h3>
            <p className="text-sm text-gray-500">{userData.email || "john.doe@example.com"}</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <NavItem href="/dashboard" isActive={true}>Dashboard</NavItem>
            <NavItem href="/my-cars">My Cars</NavItem>
            <NavItem href="/test-drives">My test drives</NavItem>
            <NavItem href="/contact">Contact Details</NavItem>
          </nav>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="mt-8 w-full px-4 py-2 text-sm text-red-500 border border-red-500 rounded hover:bg-red-50 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-red-500">My carspace</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">{userData.mobile}</span>
              <button 
                onClick={() => navigate('/settings')}
                className="p-2 text-gray-600 hover:text-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard title="Viewed" count="0 Cars" />
            <StatsCard title="Favourited" count="0 Cars" />
            <StatsCard title="Test drives" count="0 Cars" />
            <StatsCard title="Bookings" count="0 Cars" />
          </div>

          {/* Recent Activity Section */}
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-500 text-center py-8">No recent activity to show</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;