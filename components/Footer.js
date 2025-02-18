import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <a href="#" className="text-gray-400 hover:text-white px-2">Home</a>
          <a href="#" className="text-gray-400 hover:text-white px-2">Features</a>
          <a href="#" className="text-gray-400 hover:text-white px-2">About</a>
          <a href="#" className="text-gray-400 hover:text-white px-2">Contact</a>
        </div>
        <div className="mb-4">
          {/* Social Media Icons */}
          <a href="#" className="text-gray-400 hover:text-white px-2">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white px-2">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white px-2">GitHub</a>
        </div>
        <p className="text-gray-500">© {new Date().getFullYear()} AI Sentiment. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
