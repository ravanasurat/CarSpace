// TeamSection.jsx
import React from 'react';
// Import images properly
import personImage1 from '../assets/Person1.png';
import personImage2 from '../assets/Person2.png';
import personImage3 from '../assets/Person3.png';
import personImage4 from '../assets/Person4.png';

const TeamMember = ({ name, title, imageSrc }) => {
  return (
    <div className="border rounded-lg p-6 flex flex-col items-center">
      <div className="mb-4 w-full">
        <img 
          src={imageSrc} 
          alt={`${name} - ${title}`} 
          className="w-full h-40 object-cover rounded-md"
        />
      </div>
      <h3 className="text-xl font-medium text-center">{name}</h3>
      <p className="text-gray-500 text-center">{title}</p>
    </div>
  );
};

const TeamSection = () => {
  // Use the imported image for all team members
  const teamMembers = [
    {
      name: "Max Mitchell",
      title: "Founder",
      imageSrc: personImage1
    },
    {
      name: "Sarah Johnson",
      title: "Chief Real Estate Officer",
      imageSrc: personImage2
    },
    {
      name: "David Brown",
      title: "Head of Property Management",
      imageSrc: personImage3
    },
    {
      name: "Michael Turner",
      title: "Legal Counsel",
      imageSrc: personImage4
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 bg-red-500"></div>
          <h2 className="text-4xl font-bold">Meet Our Team</h2>
        </div>
        
        <p className="text-gray-600 mb-12 max-w-3xl">
          At Homyfyd, our success is driven by the dedication and expertise of our team. 
          Get to know the people behind our mission to make your real estate dreams a reality.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;