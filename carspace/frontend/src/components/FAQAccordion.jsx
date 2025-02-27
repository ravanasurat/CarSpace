import React, { useState } from 'react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'How flexible are Carspace membership plans?',
      answer: 'Our membership plans offer great flexibility with monthly, quarterly, and annual options. All plans include access to our complete network of locations, premium amenities, and community events. You can upgrade, downgrade, or cancel your membership with 30 days notice.'
    },
    {
      question: 'What kind of events and networking opportunities does Carspace provide?',
      answer: 'Carspace regularly hosts automotive showcases, tech talks, networking mixers, and industry panels. Our events calendar includes both virtual and in-person opportunities to connect with fellow enthusiasts, industry professionals, and potential business partners.'
    },
    {
      question: 'Can I tour the Carspace before committing to a membership?',
      answer: 'Absolutely! We encourage prospective members to schedule a tour of our facilities. During your visit, youll get to see our space, amenities, and meet some of our community managers. You can book a tour through our website or by calling our membership team.'
    },
    {
      question: 'Is Carspace suitable for remote teams and distributed workforces?',
      answer: 'Yes, Carspace is ideal for distributed teams. Our locations feature high-speed internet, private meeting rooms, and video conferencing equipment. Many of our members are remote teams who use Carspace as their occasional gathering point for collaboration and team building.'
    },
    {
      question: 'What measures does Carspace take for environmental sustainability?',
      answer: 'Sustainability is a core value at Carspace. Our facilities feature energy-efficient lighting, recycling programs, EV charging stations, and we partner with local environmental initiatives. Were committed to reducing our carbon footprint and supporting green transportation options.'
    },
    {
      question: 'Still has questions?',
      answer: 'Our team is always available to help! Contact us directly at support@carspace.com or call us at (555) 123-4567. Our support hours are Monday through Friday, 9 AM to 6 PM EST.'
    }
  ];

  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Heading */}
          <div>
            <div className="flex items-start mb-8">
              <div className="w-1.5 h-16 bg-red-500 mr-4"></div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 leading-tight">
                Your Roadmap to Carspace Clarity
              </h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              Frequently asked questions ordered by popularity.
              Remember that if the visitor has not committed to the call
              to action, they may still have questions (doubts) that can
              be answered.
            </p>
          </div>
          
          {/* Right column - Accordion */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left py-4"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                  <span className="ml-6 flex-shrink-0">
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="mt-2 pr-12">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;