import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-blue to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Understand the Sentiment Behind Social Media</h1>
        <h2 className="text-2xl mb-8">AI-powered insights to analyze emotions in social media posts for personal growth & professional branding.</h2>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-teal-500 to-purple-500 hover:from-teal-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full">
            <Link href='/emotion'>
              Try Now
            </Link>
          </button>
          <button className="border border-white hover:border-teal-300 text-white font-bold py-3 px-8 rounded-full">
            Sign In
          </button>
        </div>
        {/* Illustration/Animation */}
        <div className="mt-12">
          {/* Replace with actual animation or image */}
          <p className="text-gray-400">Minimalistic animation of text being analyzed or real-time graph generation.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
