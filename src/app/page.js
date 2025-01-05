'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import GitActions from './pages/api/GitActions';
import { calculatePayout, storePayoutData } from './utils/payoutCalculator';

const Home = () => {
  const [ratePerArticle, setRatePerArticle] = useState(0);
  const [totalPayout, setTotalPayout] = useState(0);

  const handleCalculatePayout = () => {
    const payout = calculatePayout([], ratePerArticle);
    setTotalPayout(payout);
    storePayoutData(ratePerArticle, payout);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <Navbar />
        <main className="bg-white p-8 rounded-lg shadow-md mx-auto mt-10 max-w-4xl animate-fade-in">
          <h1 className="text-4xl font-bold text-center text-gray-800">Welcome to the Dashboard</h1>
          <p className="text-lg text-gray-600 mt-4 text-center">Explore your data insights and tools with a professional interface.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div
              className="bg-gray-800 text-white p-6 rounded-md shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => alert('Analytics clicked!')}
            >
              <h2 className="text-2xl font-semibold">Analytics</h2>
              <p className="mt-2">Get insights into your data with detailed analytics.</p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-md shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <h2 className="text-2xl font-semibold">Reports</h2>
              <p className="mt-2">Export detailed reports in various formats.</p>
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-md shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <h2 className="text-2xl font-semibold">Settings</h2>
              <p className="mt-2">Configure and manage your preferences easily.</p>
            </div>
          </div>

          <div className="mt-10 p-6 bg-gray-100 rounded-md shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Payout Calculator</h2>
            <div className="flex flex-col items-center space-y-4">
              <label className="text-lg font-semibold text-gray-700 w-full">
                Rate per Article:
                <input
                  type="number"
                  value={ratePerArticle}
                  onChange={(e) => setRatePerArticle(Number(e.target.value))}
                  placeholder="Enter Rate per Article"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </label>
              <button
                onClick={handleCalculatePayout}
                className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
              >
                Calculate Payout
              </button>
              <div className="mt-4 text-center">
                <p className="text-lg font-bold text-gray-700">Total Payout:</p>
                <p className="text-xl font-extrabold text-green-600 mt-1">{totalPayout}</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <GitActions />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
