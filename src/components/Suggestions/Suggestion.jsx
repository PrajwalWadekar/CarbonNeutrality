import React, { useState, useEffect } from 'react';
import PersonalizedSuggestions from './PersonalizedSuggestions';
import useSuggestionStore from '../../store/suggestionStore';

const Suggestions = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState('personalized');
  const [filters, setFilters] = useState({
    category: 'all',
    priority: 'all',
    timeframe: 'all',
    status: 'all'
  });
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  
  // Get store methods
  const suggestions = useSuggestionStore(state => state.suggestions);

  const filterOptions = {
    category: ['all', 'Carbon Emissions', 'Water Usage', 'Energy Efficiency', 'Waste Management'],
    priority: ['all', 'High', 'Medium', 'Low'],
    timeframe: ['all', 'Short-term', 'Medium-term', 'Long-term'],
    status: ['all', 'pending', 'in-progress', 'completed']
  };

  const filterIcons = {
    category: {
      'all': '🏷️',
      'Carbon Emissions': '🏭',
      'Water Usage': '💧',
      'Energy Efficiency': '⚡',
      'Waste Management': '♻️'
    },
    priority: {
      'all': '⭐',
      'High': '🔴',
      'Medium': '🟡',
      'Low': '🟢'
    },
    timeframe: {
      'all': '⏰',
      'Short-term': '⚡',
      'Medium-term': '📅',
      'Long-term': '🗓️'
    },
    status: {
      'all': '📊',
      'pending': '⏳',
      'in-progress': '🔄',
      'completed': '✅'
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    setActiveFilter(null);
  };

  const tabs = [
    { id: 'personalized', label: 'AI Suggestions', icon: '🤖' }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <div className="flex items-center space-x-4 mb-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                selectedTab === tab.id
                  ? 'bg-blue-100 text-blue-600'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedTab(tab.id)}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(filterOptions).map(([filterType, options]) => (
            <div key={filterType} className="relative">
              <button
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeFilter === filterType
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setActiveFilter(activeFilter === filterType ? null : filterType)}
              >
                {filterIcons[filterType][filters[filterType]]} {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </button>
              
              {activeFilter === filterType && (
                <div className="absolute z-10 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200">
                  {options.map(option => (
                    <button
                      key={option}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-2 ${
                        filters[filterType] === option ? 'text-blue-600' : ''
                      }`}
                      onClick={() => handleFilterChange(filterType, option)}
                    >
                      <span>{filterIcons[filterType][option]}</span>
                      <span>{option === 'all' ? 'All' : option}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {selectedTab === 'personalized' && (
          <PersonalizedSuggestions filters={filters} />
        )}
      </div>
    </div>
  );
};

export default Suggestions;
