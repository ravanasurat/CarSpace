import React from 'react';
import Blog1 from '../assets/Blog1.png';
import Blog2 from '../assets/Blog2.png';
import Blog3 from '../assets/Blog3.png';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How the maruti Invicto is a lesson in brand building......',
      image: Blog1,
      author: 'John Smith',
      date: 'Feb 15, 2025',
      slug: 'maruti-invicto-brand-building'
    },
    {
      id: 2,
      title: 'How the maruti Invicto is a lesson in brand building......',
      image: Blog2,
      author: 'Sarah Johnson',
      date: 'Feb 10, 2025',
      slug: 'maruti-invicto-marketing-strategy'
    },
    {
      id: 3,
      title: 'How the maruti Invicto is a lesson in brand building......',
      image: Blog3,
      author: 'Michael Chen',
      date: 'Feb 5, 2025',
      slug: 'maruti-invicto-market-analysis'
    }
  ];

  return (
    <section className="py-16 px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Articles from the Blog</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Frequently asked questions ordered by popularity. Remember that if the
            visitor has not committed to the call to action, they may still have
            questions (doubts) that can be answered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6 border-t">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-gray-600">
                    <span>Name</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span>Date</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 mb-4">{post.title}</h3>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-block text-gray-800 font-medium hover:text-red-500 transition-colors duration-200"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;