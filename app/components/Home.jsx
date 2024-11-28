import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="container mx-auto p-8">
        {/* Enlarged Outer Box */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-10 md:p-16">
          {/* Left: Twitter Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <Image
              src="/twitter-logo.png" // Path relative to the 'public' folder
              alt="Twitter Logo"
              width={300}
              height={300}
            />
          </div>

          {/* Right: Text Section with Form */}
          <div className="w-full md:w-1/2 text-center md:text-left p-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Welcome to Our Website!
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              This is a basic Next.js website featuring a Twitter logo on the
              left and some descriptive text on the right.
            </p>
            {/* Form */}
            <form className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Enter your text"
                className="flex-1 border border-gray-300 rounded px-4 py-2"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
