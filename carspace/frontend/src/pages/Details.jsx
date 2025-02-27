import React from 'react';
import Header from '../components/Header';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';

const UserProfile = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ScrollTop />
      <Footer/>
    </div>
  );
};

export default UserProfile;