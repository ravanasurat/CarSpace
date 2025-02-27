import React from 'react';
import Hero from '../assets/Hero.png';

const HeroBackground = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${Hero})`,
          backgroundPosition: 'center bottom',
        }}
      />
    </div>
  );
};

export default HeroBackground;