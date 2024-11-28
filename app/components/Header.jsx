import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold">
          <Link href="/" className="hover:text-gray-400">MyWebsite</Link>
        </div>
        <nav className="flex space-x-4 items-center">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/chetan/about" className="hover:text-gray-400">About</Link>
          <Link href="/chetan/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
