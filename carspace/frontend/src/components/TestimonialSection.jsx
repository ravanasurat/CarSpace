import React, { useState } from 'react';
// Fixed import for profile image - assuming it's an image file
import ProfileImage from "../assets/Testimonial1.png";

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      content: 'I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn\'t be happier with our new place!',
      author: 'Arjan S. Patil',
      avatar: ProfileImage,
      rating: 4
    },
    {
      id: 2,
      content: 'Working with this team made car buying a breeze. They listened to what I wanted and found the perfect match within my budget.',
      author: 'Sarah Johnson',
      avatar: ProfileImage,
      rating: 5
    },
    {
      id: 3,
      content: 'The entire process was smooth from start to finish. Excellent customer service and they found me exactly what I was looking for.',
      author: 'Michael Chen',
      avatar: ProfileImage,
      rating: 4
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="py-16 px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Heading and description */}
          <div>
            <div className="flex items-start mb-4">
              <div className="w-1.5 h-10 bg-red-500 mr-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Hear From Our Community
              </h2>
            </div>
            <p className="text-gray-500 mb-8">
              Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.
            </p>
            
            {/* Navigation buttons */}
            <div className="flex space-x-4">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right column - Testimonial card */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg p-8 relative z-10">
              {/* Quotation mark */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-orange-200 to-orange-100 w-12 h-12 rounded-full flex items-center justify-center z-0">
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* Testimonial content */}
              <div className="mb-6">
                <p className="text-gray-800 text-lg">
                  {testimonials[currentSlide].content}
                </p>
              </div>
              
              {/* Author info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src={testimonials[currentSlide].avatar}
                    alt={testimonials[currentSlide].author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <span className="font-medium text-gray-800">
                    {testimonials[currentSlide].author}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="flex">
                  {renderStars(testimonials[currentSlide].rating)}
                </div>
              </div>
            </div>
            
            {/* Pagination indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;