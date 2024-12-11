import React, { useState, useEffect } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Carbon Credits</h1>
          <p className="text-gray-400">Last updated {creditData.lastUpdate}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Speedometer Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex justify-center mb-8"
            >
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
            </motion.div>
            
            {/* Performance Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { title: "Daily Change", value: creditData.dailyChange, color: "green" },
                { title: "Weekly Average", value: creditData.weeklyAverage, color: "blue" },
                { title: "Monthly Target", value: creditData.monthlyTarget, color: "purple" }
              ].map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-gray-900 rounded-xl p-4 hover:bg-gray-800 transition-colors duration-300"
                >
                  <h3 className="text-gray-400 text-sm mb-1">{metric.title}</h3>
                  <p className={`text-${metric.color}-500 text-2xl font-bold`}>{metric.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Side Panel */}
          <div className="lg:col-span-1 space-y-8">
            {/* Status Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
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
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className={`text-4xl font-bold ${
                    carbonCredits >= 75 ? 'text-green-500' : 
                    carbonCredits >= 50 ? 'text-yellow-500' : 
                    'text-red-500'
                  }`}
                >
                  {carbonCredits}
                </motion.div>
              </div>
            </motion.div>

            {/* Recommendations Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-white mb-4">Recommendations</h2>
              <ul className="space-y-4">
                {[
                  {
                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                    title: "Optimize Energy Usage",
                    description: "Implement smart monitoring systems to reduce energy consumption",
                    color: "green"
                  },
                  {
                    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                    title: "Regular Maintenance",
                    description: "Schedule equipment maintenance to maintain optimal performance",
                    color: "yellow"
                  }
                ].map((item, index) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3 hover:bg-gray-700 p-2 rounded-lg transition-colors duration-300"
                  >
                    <div className="mt-1">
                      <svg className={`w-5 h-5 text-${item.color}-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonSpeedometerPage;
