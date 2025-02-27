import React, { useState } from 'react';
// Import the image properly
import contactImage from '../assets/Contact.png'; // Adjust this import path based on your project structure

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      description: ''
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Form Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">
              <span className="border-l-4 border-red-500 pl-3">Get in Touch</span>
            </h1>
            <p className="text-gray-600 leading-relaxed">
              We're here to help! Whether you're interested in booking a tour, learning
              more about our memberships, or have general inquiries, feel free to reach
              out. We'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
                required
              />
            </div>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition"
              required
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition duration-300 inline-block"
            >
              Send My Inquiry
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden md:block">
          {/* Option 1: For Next.js with Image component */}
          {/* <Image
            src={contactImage}
            alt="Contact support"
            className="w-full h-auto rounded-lg shadow-lg"
          /> */}
          
          {/* Option 2: For standard React projects */}
          <img
            src={contactImage} // Use the imported image variable
            alt="Contact support"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;