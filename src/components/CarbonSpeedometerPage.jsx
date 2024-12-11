import React, { useState } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const CarbonSpeedometerPage = () => {
  const [carbonCredits, setCarbonCredits] = useState(75);
  const creditData = {
    trend: 'up',
    lastUpdate: '2 hrs ago',
    dailyChange: '+2.5%',
    weeklyAverage: 72,
    monthlyTarget: 80,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Carbon Credits Dashboard</h1>
          <p className="text-gray-400">Last updated {creditData.lastUpdate}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Speedometer Section */}
          <div className="lg:col-span-2 bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
            <div className="flex justify-center mb-8">
              <ReactSpeedometer
                value={carbonCredits}
                minValue={0}
                maxValue={100}
                needleColor="#22c55e"
                needleTransitionDuration={4000}
                needleTransition="easeElastic"
                currentValueText="${value} Credits"
                customSegmentLabels={[
                  { text: "Critical", position: "INSIDE", color: "#fff" },
                  { text: "Low", position: "INSIDE", color: "#fff" },
                  { text: "Average", position: "INSIDE", color: "#fff" },
                  { text: "Good", position: "INSIDE", color: "#fff" },
                  { text: "Excellent", position: "INSIDE", color: "#fff" }
                ]}
                ringWidth={30}
                width={500}
                height={300}
                segments={5}
                segmentColors={["#ef4444", "#f97316", "#eab308", "#22c55e", "#15803d"]}
                textColor="#fff"
              />
            </div>
            
            {/* Performance Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-900 rounded-xl p-4">
                <h3 className="text-gray-400 text-sm mb-1">Daily Change</h3>
                <p className="text-green-500 text-2xl font-bold">{creditData.dailyChange}</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-4">
                <h3 className="text-gray-400 text-sm mb-1">Weekly Average</h3>
                <p className="text-blue-500 text-2xl font-bold">{creditData.weeklyAverage}</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-4">
                <h3 className="text-gray-400 text-sm mb-1">Monthly Target</h3>
                <p className="text-purple-500 text-2xl font-bold">{creditData.monthlyTarget}</p>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="lg:col-span-1 space-y-8">
            {/* Status Card */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4">Current Status</h2>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 mb-1">Performance Level</p>
                  <p className={`text-2xl font-bold ${
                    carbonCredits >= 75 ? 'text-green-500' : 
                    carbonCredits >= 50 ? 'text-yellow-500' : 
                    'text-red-500'
                  }`}>
                    {carbonCredits >= 75 ? 'Excellent' : 
                     carbonCredits >= 50 ? 'Good' : 
                     'Needs Improvement'}
                  </p>
                </div>
                <div className={`text-4xl font-bold ${
                  carbonCredits >= 75 ? 'text-green-500' : 
                  carbonCredits >= 50 ? 'text-yellow-500' : 
                  'text-red-500'
                }`}>
                  {carbonCredits}
                </div>
              </div>
            </div>

            {/* Recommendations Card */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-4">Recommendations</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Optimize Energy Usage</p>
                    <p className="text-gray-400 text-sm">Implement smart monitoring systems to reduce energy consumption</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Regular Maintenance</p>
                    <p className="text-gray-400 text-sm">Schedule equipment maintenance to maintain optimal performance</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonSpeedometerPage;
