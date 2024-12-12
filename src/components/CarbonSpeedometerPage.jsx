import React, { useState } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiAward, FiInfo } from 'react-icons/fi';

const CarbonSpeedometerPage = () => {
  const [carbonCredits, setCarbonCredits] = useState(821);
  const [showTooltip, setShowTooltip] = useState(null);
  
  const creditData = {
    trend: 'up',
    lastUpdate: '2 hrs ago',
    monthlyChange: '+5.7%',
    yearlyAverage: 750,
    totalSaved: '821',
    nextMilestone: '900'
  };

  const tooltips = {
    monthlyChange: "Change in carbon credits from coal mine operations over the last month",
    yearlyAverage: "Average carbon credits from coal mine efficiency over the past year",
    totalSaved: "Total carbon emissions reduced from coal mining operations in tons",
    nextMilestone: "Next achievement milestone for coal mine carbon reduction"
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
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Coal Mine Carbon Credits</h1>
              <p className="text-gray-400">Last updated {creditData.lastUpdate}</p>
            </div>
            
          </div>
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
                minValue={300}
                maxValue={900}
                needleColor="#2563eb"
                needleTransitionDuration={4000}
                needleTransition="easeElastic"
                currentValueText="${value} Credits"
                customSegmentLabels={[
                  { text: "300", position: "INSIDE", color: "#fff" },
                  { text: "450", position: "INSIDE", color: "#fff" },
                  { text: "600", position: "INSIDE", color: "#fff" },
                  { text: "750", position: "INSIDE", color: "#fff" },
                  { text: "900", position: "INSIDE", color: "#fff" }
                ]}
                ringWidth={40}
                width={500}
                height={300}
                segments={5}
                segmentColors={["#ef4444", "#f97316", "#eab308", "#22c55e", "#15803d"]}
                textColor="#fff"
                valueTextFontSize="32px"
                maxSegmentLabels={5}
                customSegmentStops={[300, 450, 600, 750, 900]}
                forceRender={true}
              />
            </motion.div>
            
            {/* Performance Metrics */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { title: "Monthly Change", value: creditData.monthlyChange, color: "green", icon: <FiTrendingUp />, tooltip: tooltips.monthlyChange },
                { title: "Yearly Average", value: creditData.yearlyAverage, color: "blue", icon: <FiTrendingUp />, tooltip: tooltips.yearlyAverage }
              ].map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-gray-900 rounded-xl p-4 hover:bg-gray-800 transition-colors duration-300 relative group"
                  onMouseEnter={() => setShowTooltip(metric.title)}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-${metric.color}-500`}>{metric.icon}</span>
                      <h3 className="text-gray-400 text-sm">{metric.title}</h3>
                    </div>
                    <FiInfo className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className={`text-${metric.color}-500 text-2xl font-bold group-hover:scale-105 transition-transform`}>
                    {metric.value}
                  </p>
                  {showTooltip === metric.title && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm py-2 px-3 rounded shadow-lg z-10 w-48 text-center">
                      {metric.tooltip}
                    </div>
                  )}
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
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <FiAward className="text-yellow-500" />
                Mine Performance Status
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-400">Current Level</p>
                    <p className={`text-2xl font-bold ${
                      carbonCredits >= 800 ? 'text-green-500' : 
                      carbonCredits >= 600 ? 'text-yellow-500' : 
                      'text-red-500'
                    }`}>
                      {carbonCredits >= 800 ? 'Excellent' : 
                       carbonCredits >= 600 ? 'Good' : 
                       'Needs Improvement'}
                    </p>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(carbonCredits / 900) * 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 mb-1">Next Milestone</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xl text-blue-500">{creditData.nextMilestone} Credits</p>
                    <p className="text-gray-400">
                      {creditData.nextMilestone - carbonCredits} credits to go
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tips Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-white mb-4">Mining Optimization Tips</h2>
              <ul className="space-y-4">
                {[
                  {
                    title: "Methane Capture",
                    description: "Implement methane capture systems",
                    color: "green"
                  },
                  {
                    title: "Equipment Efficiency",
                    description: "Use energy-efficient mining equipment",
                    color: "blue"
                  },
                  {
                    title: "Ventilation Control",
                    description: "Optimize mine ventilation systems",
                    color: "purple"
                  }
                ].map((tip, index) => (
                  <motion.li
                    key={tip.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
                  >
                    <p className={`text-${tip.color}-500 font-medium mb-1`}>{tip.title}</p>
                    <p className="text-gray-400 text-sm">{tip.description}</p>
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
