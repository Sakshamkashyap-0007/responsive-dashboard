'use client'; // Add this directive at the top of the file

import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 flex flex-col items-center justify-center space-y-1 bg-white p-2 rounded-md shadow-md"
      >
        <div
          className={`w-8 h-1 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <div
          className={`w-8 h-1 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
        />
        <div
          className={`w-8 h-1 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-6 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '250px', zIndex: 40 }}
      >
        {/* Sidebar links */}
        <ul className="mt-16"> {/* Added margin-top to move links below the hamburger */}
          <li className="mb-4">
            <Link href="/" className="block text-black font-bold bg-white hover:bg-gray-200 p-2 rounded-md">
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/profile" className="block text-black font-bold bg-white hover:bg-gray-200 p-2 rounded-md">
              Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/settings" className="block text-black font-bold bg-white hover:bg-gray-200 p-2 rounded-md">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
