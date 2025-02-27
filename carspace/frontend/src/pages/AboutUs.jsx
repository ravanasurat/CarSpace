import React from 'react';
import Header from '../components/Header';
import HeroBackground from '../components/HeroBackground.jsx';
import OurJourney from '../components/OurJourney';
import ValuesSection from '../components/ValueSection.jsx';
import TeamSection from '../components/TeamSection.jsx';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBackground/>
      <OurJourney/>
      <ValuesSection/>
      <TeamSection/>
      <ScrollTop />
      <Footer/>
    </div>
  );
};

export default AboutUs;