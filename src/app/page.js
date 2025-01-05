// /src/app/page.tsx

'use client';  // Mark this file as a client component

import React, { useState } from 'react';  // Import React and useState
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import GitActions from './pages/api/GitActions';  // Import the GitActions component

const Home = () => {
  const [showAnalytics, setShowAnalytics] = useState(false); // State to track if analytics is shown

  const handleAnalyticsClick = () => {
    setShowAnalytics(!showAnalytics); // Toggle the visibility of analytics
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Navbar />
        <main className="bg-white p-8 rounded-lg shadow-md mx-auto mt-10 max-w-4xl animate-fade-in">
          <h1 className="text-4xl font-bold text-center text-gray-800 animate-fade-in">
            Welcome to the Dashboard
          </h1>
          <p className="text-lg text-gray-600 mt-4 text-center animate-fade-in">
            Explore your data insights and tools with a professional interface.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div
              className="bg-gray-800 text-white p-6 rounded-md shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in cursor-pointer"
              onClick={handleAnalyticsClick} // On click, toggle analytics visibility
            >
              <h2 className="text-2xl font-semibold">Analytics</h2>
              <p className="mt-2">Get insights into your data with detailed analytics.</p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-md shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in">
              <h2 className="text-2xl font-semibold">Reports</h2>
              <p className="mt-2">Export detailed reports in various formats.</p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-md shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in">
              <h2 className="text-2xl font-semibold">Settings</h2>
              <p className="mt-2">Configure and manage your preferences easily.</p>
            </div>
          </div>

          {/* GitActions Component - Add it where needed */}
          <div className="mt-10">
            <GitActions />  {/* Use the GitActions component here */}
          </div>

          {/* Dynamic Content: Show Analytics on Button Click */}
          {showAnalytics && (
            <div className="mt-8">
              <h3 className="text-3xl font-semibold text-gray-800">Analytics Overview</h3>
              <p className="text-lg text-gray-600 mt-4">
                Here you can explore your analytics data with various insights and charts.
              </p>
              {/* You can replace this section with dynamic charts or data */}
              <div className="bg-gray-200 p-6 rounded-md mt-6 shadow-md">
                <h4 className="text-2xl font-semibold">Chart 1</h4>
                <p className="mt-2">Visualization of data trends...</p>
              </div>
            </div>
          )}

          {/* Button */}
          <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-500 transition-all transform hover:scale-110 duration-300">
              Get Started
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
