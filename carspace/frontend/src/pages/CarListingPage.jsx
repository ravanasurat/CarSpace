import React from 'react';
import Header from '../components/Header';
import HeroBackground from '../components/HeroBackground';
import CarList from '../components/CarList';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';


const CarListingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBackground/>
      <CarList/>
      <ScrollTop />
      <Footer/>
    </div>
  );
};

export default CarListingPage;