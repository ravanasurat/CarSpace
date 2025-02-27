import React from 'react';
import Header from '../components/Header';
import HeroBackground from '../components/HeroBackground';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';
import CarCompare from '../components/CarCompare';


const CarComparePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBackground />
      <CarCompare/>
      <ScrollTop />
      <Footer/>
    </div>
  );
};

export default CarComparePage;