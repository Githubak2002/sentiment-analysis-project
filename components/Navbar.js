import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-dark-blue bg-opacity-90 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-teal-300">
            AI Sentiment
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-teal-300">Home
          </Link>
          <Link href="#features" className="hover:text-teal-300">Features
          </Link>
          {/* <<Link href="#how-it-works" className="hover:text-teal-300">How It Works
          </Link>
          Link href="#pricing" className="hover:text-teal-300">Pricing
          </Link> */}
          <Link href="/emotion" className="hover:text-teal-300">Content Analysis
          </Link>
          <Link href="/social" className="hover:text-teal-300">Post Analysis
          </Link>
        </div>

        {/* Sign In Button */}
        <div>
          <Link href="/signin" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="sticky top-0 z-10 bg-dark-blue bg-opacity-90 backdrop-blur-sm border-b border-gray-700">
//       <div className="container mx-auto px-4 py-6 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-xl font-bold">
//           AI Sentiment
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex space-x-6">
//           <a href="#" className="hover:text-teal-300">Home</a>
//           <a href="#" className="hover:text-teal-300">Features</a>
//           <a href="#" className="hover:text-teal-300">How It Works</a>
//           <a href="#" className="hover:text-teal-300">Pricing</a>
//         </div>

//         {/* Sign In Button */}
//         <div>
//           <a href="#" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//             Sign In
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
