import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Simulating user state without Firebase
  
  // Simulate checking if path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Simulate profile navigation without Firebase
  const handleProfileClick = () => {
    // Mock user role check - hardcoded for demonstration
    const userRole = localStorage.getItem('userRole') || 'user';
    if (userRole === 'admin') {
      navigate('/AdminDashboard');
    } else {
      navigate('/UserProfile');
    }
  };

  // Mock login/logout functionality
  const handleLoginToggle = () => {
    if (user) {
      setUser(null);
      localStorage.removeItem('userRole');
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="w-full py-4 px-8 flex justify-between items-center bg-transparent absolute top-0 left-0 right-0 z-10">
      <div className="text-white font-bold text-2xl">
        <Link to="/">
          <span className="text-blue-500">Car</span>
          <span className="text-red-500">space</span>
        </Link>
      </div>
      
      <nav className="flex items-center space-x-6">
        <Link 
          to="/" 
          className={`text-white hover:text-gray-200 pb-1 ${
            isActive('/') ? 'border-b-2 border-red-500' : ''
          }`}
        >
          Home
        </Link>
        <Link 
          to="/AboutUs" 
          className={`text-white hover:text-gray-200 pb-1 ${
            isActive('/AboutUs') ? 'border-b-2 border-red-500' : ''
          }`}
        >
          About us
        </Link>
        <Link 
          to="/CarListingPage" 
          className={`text-white hover:text-gray-200 pb-1 ${
            isActive('/CarListingPage') ? 'border-b-2 border-red-500' : ''
          }`}
        >
          Certified Pre-Owned
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/CarComparePage">
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center">
              Compare cars
            </button>
          </Link>
          
          {user ? (
            <button 
              onClick={handleProfileClick}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
            >
              Profile
            </button>
          ) : (
            <button 
              onClick={handleLoginToggle}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;