import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WelcomeSection from '../components/WelcomeSection';
import ExploreCarsSection from '../components/ExploreCarsSection';
import FeaturedListing from '../components/FeaturedListing';
import PromotionCard from '../components/PromotionCard';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';
import FAQAccordion from '../components/FAQAccordion';
import BlogSection from '../components/BlogSection';
import ScrollTop from '../components/ScrollTop';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <ExploreCarsSection />
      <FeaturedListing />
      <PromotionCard />
      <TestimonialSection/>
      <ContactSection/>
      <FAQAccordion/>
      <BlogSection/>
      <ScrollTop />
      <Footer/>
    </div>
  );
};

export default HomePage;