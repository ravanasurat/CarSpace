import React from 'react';
import Header from '../components/Header';
import HeroBackground from '../components/HeroBackground';
import CarDetails from '../components/CarDetails';
import CarFeatures from '../components/CarFeatures';
import LocationSection from '../components/LocationSection';
import LoanCalculator from '../components/LoanCalculator';
import RelatedListings from '../components/RelatedListings';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';


const Certified = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBackground />
      <CarDetails/>
      <CarFeatures/>
      <LoanCalculator/>
      <LocationSection/>
      <RelatedListings/>
      <ScrollTop />
      <Footer/>
    </div>
  );
};

export default Certified;