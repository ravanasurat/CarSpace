import React from 'react';

const BlogsPage = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Blog Management</h2>
      <div className="grid gap-6">
        {[1, 2, 3].map((blog) => (
          <div key={blog} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium">Blog Post #{blog}</h3>
              <div className="flex gap-2">
                <button className="text-blue-500 hover:text-blue-700">Edit</button>
                <button className="text-red-500 hover:text-red-700">Delete</button>
              </div>
            </div>
            <p className="text-gray-600 mb-4">Blog content preview...</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Published: Feb 24, 2024</span>
              <span>Author: Admin</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BlogsPage;