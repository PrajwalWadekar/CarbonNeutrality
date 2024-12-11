import React, { useState } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const CarbonCredit = () => {
  const [showSpeedometer, setShowSpeedometer] = useState(false);
  
  // Sample data - replace with actual data
  const creditData = {
    carbonCredit: 75,
    trend: 'up',
    lastUpdate: '2 hrs ago'
  };

  return (
    <>
      <div
        onClick={() => setShowSpeedometer(true)}
        className="bg-gray-800 rounded-lg px-6 py-3 cursor-pointer hover:bg-gray-700 transition-all duration-200 border border-gray-700 group"
      >
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-400">Carbon Credits</span>
              <div className={`w-2 h-2 rounded-full ${creditData.trend === 'up' ? 'bg-green-500' : 'bg-red-500'}`}></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-500">{creditData.carbonCredit}</span>
              {creditData.trend === 'up' ? (
                <svg className="w-5 h-5 text-green-500 transform transition-transform group-hover:translate-y-[-2px]" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-500 transform transition-transform group-hover:translate-y-[2px]" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"/>
                </svg>
              )}
            </div>
            <span className="text-xs text-gray-500">{creditData.lastUpdate}</span>
          </div>
          <div className="border-l border-gray-700 pl-3 flex items-center">
            <svg className="w-5 h-5 text-gray-500 group-hover:text-green-500 transition-colors" 
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Enhanced Speedometer Modal */}
      {showSpeedometer && (
        <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={(e) => e.target === e.currentTarget && setShowSpeedometer(false)}>
          <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 w-[400px] transform transition-all duration-300 scale-100">
            <div className="p-6 border-b border-gray-800">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                    Carbon Credits
                    <div className={`w-2 h-2 rounded-full ${creditData.trend === 'up' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">Last updated {creditData.lastUpdate}</p>
                </div>
                <button
                  onClick={() => setShowSpeedometer(false)}
                  className="text-gray-500 hover:text-gray-300 transition-colors p-1 hover:bg-gray-800 rounded-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <ReactSpeedometer
                maxValue={100}
                value={creditData.carbonCredit}
                needleColor="#22c55e"
                needleTransitionDuration={4000}
                needleTransition="easeElastic"
                currentValueText="${value} Credits"
                customSegmentLabels={[
                  { text: "Low", position: "INSIDE", color: "#fff" },
                  { text: "Medium", position: "INSIDE", color: "#fff" },
                  { text: "High", position: "INSIDE", color: "#fff" }
                ]}
                ringWidth={25}
                width={320}
                height={180}
                segments={3}
                segmentColors={["#ef4444", "#eab308", "#22c55e"]}
                textColor="#fff"
              />
              <div className="mt-6 bg-gray-800 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-400">Performance Level</p>
                    <p className={`text-lg font-semibold ${
                      creditData.carbonCredit >= 75 ? 'text-green-500' : 
                      creditData.carbonCredit >= 50 ? 'text-yellow-500' : 
                      'text-red-500'
                    }`}>
                      {creditData.carbonCredit >= 75 ? 'Excellent' : 
                       creditData.carbonCredit >= 50 ? 'Good' : 
                       'Needs Improvement'}
                    </p>
                  </div>
                  <div className={`text-3xl font-bold ${
                    creditData.carbonCredit >= 75 ? 'text-green-500' : 
                    creditData.carbonCredit >= 50 ? 'text-yellow-500' : 
                    'text-red-500'
                  }`}>
                    {creditData.carbonCredit}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarbonCredit;
