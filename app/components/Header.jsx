import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-6">
        <Image
          src="/twitter-logo.png" // Replace with your logo image
          alt="Deliveroo Logo"
          className="w-10"
          width={150}
          height={25}
        />
        <nav className="flex items-center space-x-6">
          {/* Correctly use the `href` attribute */}
          <Link href="/">
            <span className="text-black font-semibold hover:underline">home</span>
          </Link>
          <Link href="/sentiment">
            <span className="text-black font-semibold hover:underline">sentiment</span>
          </Link>
          <Link href="/chetan">
            <span className="text-black font-semibold hover:underline">chetan</span>
          </Link>
        </nav>
      </header>
  );
};

export default Header;



