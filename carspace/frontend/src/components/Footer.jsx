import React from 'react';

const Footer = () => {
  const overviewLinks = [
    { text: 'About Us', href: '#' },
    { text: 'Features', href: '#' },
    { text: 'Cars', href: '#' },
    { text: 'Testimonials', href: '#' },
    { text: "FAQ's", href: '#' },
  ];

  const exploreLinks = [
    { text: 'Blogs', href: '#' },
    { text: 'Press mentions', href: '#' },
    { text: 'Careers', href: '#' },
  ];

  const contactInfo = {
    address: '7th b main Btm 1st stage Bangalore Karnataka 560029',
    email: 'hello@email.com',
    phone: '+91 8310955920'
  };

  const socialLinks = [
    { platform: 'Facebook', href: '#', icon: 'facebook' },
    { platform: 'LinkedIn', href: '#', icon: 'linkedin' },
    { platform: 'Twitter', href: '#', icon: 'twitter' },
    { platform: 'YouTube', href: '#', icon: 'youtube' }
  ];

  return (
    <footer className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Do you have Something<br />
            to Sell through Us?
          </h1>
          <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors">
            Sell your car today
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Overview Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <ul className="space-y-2">
              {overviewLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="hover:underline">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Explore</h2>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="hover:underline">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="mr-2">📍</span>
                <p>{contactInfo.address}</p>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <a href={`tel:${contactInfo.phone}`} className="hover:underline">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
          
          {/* Social Media Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label={social.platform}
              >
                <span className="text-sm">
                  {social.platform === 'Facebook' && 'f'}
                  {social.platform === 'LinkedIn' && 'in'}
                  {social.platform === 'Twitter' && 't'}
                  {social.platform === 'YouTube' && 'yt'}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;