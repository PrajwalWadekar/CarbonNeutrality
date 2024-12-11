import React from 'react';
import { useNavigate } from 'react-router-dom';

const CarbonCredit = () => {
  const navigate = useNavigate();
  const creditData = {
    carbonCredit: 75,
    trend: 'up',
    lastUpdate: '2 hrs ago'
  };

  return (
    <div
      onClick={() => navigate('/dashboard/carbon-speedometer')}
      className="bg-gray-800 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-700 transition duration-200 border border-gray-700 shadow-md hover:shadow-lg"
    >
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-300">Carbon Credits</span>
            <div className={`w-2 h-2 rounded-full ${creditData.trend === 'up' ? 'bg-green-500' : 'bg-red-500'}`}></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-green-500">{creditData.carbonCredit}</span>
            {creditData.trend === 'up' ? (
              <svg 
                className="w-5 h-5 text-green-500 transform transition-transform group-hover:translate-y-[-2px]"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            ) : (
              <svg 
                className="w-5 h-5 text-red-500 transform transition-transform group-hover:translate-y-[2px]"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"/>
              </svg>
            )}
          </div>
          <span className="text-xs text-gray-500">{creditData.lastUpdate}</span>
        </div>
      </div>
    </div>
  );
};

export default CarbonCredit;