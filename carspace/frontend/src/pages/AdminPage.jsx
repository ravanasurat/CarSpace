import React from 'react';
import Header from '../components/Header';
import AdminDashboard from '../components/AdminDashboard';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';
import Login from '../components/Login';
import UserProfile from '../components/UserProfile';


const CarComparePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Login/>
      <AdminDashboard/>
      <UserProfile/>
      <ScrollTop />
      <Footer/>
    </div>
  );
};

export default CarComparePage;