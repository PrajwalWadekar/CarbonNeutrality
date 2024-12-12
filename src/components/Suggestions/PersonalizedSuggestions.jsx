import React, { useState, useCallback, useMemo } from 'react';
import useSuggestionStore from '../../store/suggestionStore';
import ProgressModal from './ProgressModal/ProgressModal';

const PersonalizedSuggestions = ({ filters }) => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const getSuggestion = useSuggestionStore(state => state.getSuggestion);

  const handleSuggestionClick = useCallback((suggestion) => {
    setSelectedSuggestion(suggestion);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedSuggestion(null);
  }, []);

  const suggestions = [
    {
      id: 'p1',
      title: "Methane Drainage System",
      description: "Implementation of pre-mine methane drainage system to capture and utilize methane for power generation.",
      icon: "/icons/smart-meter.svg",
      category: "Technology",
      relevance: "High",
      roi: "Medium",
      complexity: "Medium",
      status: "in-progress",
      progress: {
        percentage: 65,
        status: "in-progress",
        milestones: [
          { title: "Site Assessment", completed: true },
          { title: "Equipment Installation", completed: true },
          { title: "System Testing", completed: false },
          { title: "Full Operation", completed: false }
        ]
      },
      impactMetrics: {
        carbonReduced: "2,500 tons CO2/year",
        methaneCaptureRate: "40% capture efficiency",
        energyEfficiency: "15% improvement in ventilation",
        carbonCreditsGenerated: "2,000 credits/year",
        implementationTime: "6-8 months"
      }
    },
    {
      id: 'p2',
      title: "Underground Lighting Upgrade",
      description: "Replace traditional lighting with energy-efficient LED systems in underground operations.",
      icon: "/icons/process-optimization.svg",
      category: "Operations",
      relevance: "Medium",
      roi: "High",
      complexity: "Low",
      status: "pending",
      progress: {
        percentage: 30,
        status: "in-progress",
        milestones: [
          { title: "Lighting Audit", completed: true },
          { title: "Procurement", completed: false },
          { title: "Installation", completed: false },
          { title: "Testing", completed: false }
        ]
      },
      impactMetrics: {
        carbonReduced: "800 tons CO2/year",
        methaneCaptureRate: "Not Applicable",
        energyEfficiency: "60% reduction in lighting energy",
        carbonCreditsGenerated: "700 credits/year",
        implementationTime: "3-4 months"
      }
    },
    {
      id: 'p3',
      title: "Ventilation Optimization",
      description: "Smart ventilation control system with air quality sensors.",
      icon: "/icons/training.svg",
      category: "Technology",
      relevance: "High",
      roi: "Medium",
      complexity: "Medium",
      status: "completed",
      progress: {
        percentage: 100,
        status: "completed",
        milestones: [
          { title: "System Design", completed: true },
          { title: "Sensor Installation", completed: true },
          { title: "Software Integration", completed: true },
          { title: "Performance Testing", completed: true }
        ]
      },
      impactMetrics: {
        carbonReduced: "1,200 tons CO2/year",
        methaneCaptureRate: "15% improved detection",
        energyEfficiency: "20% reduction in fan power",
        carbonCreditsGenerated: "1,000 credits/year",
        implementationTime: "4-5 months"
      }
    },
    {
      id: 'p4',
      title: "Water Pumping Efficiency",
      description: "Variable frequency drives for mine dewatering pumps.",
      icon: "/icons/water.svg",
      category: "Environmental",
      relevance: "Medium",
      roi: "Medium",
      complexity: "Medium",
      status: "in-progress",
      progress: {
        percentage: 45,
        status: "in-progress",
        milestones: [
          { title: "Pump Audit", completed: true },
          { title: "VFD Installation", completed: true },
          { title: "Control System", completed: false },
          { title: "Testing", completed: false }
        ]
      },
      impactMetrics: {
        carbonReduced: "600 tons CO2/year",
        methaneCaptureRate: "Not Applicable",
        energyEfficiency: "25% reduction in pump energy",
        carbonCreditsGenerated: "500 credits/year",
        implementationTime: "3-4 months"
      }
    },
    {
      id: 'p5',
      title: "Conveyor Belt Optimization",
      description: "Smart conveyor belt system with variable speed control.",
      icon: "/icons/heat.svg",
      category: "Energy",
      relevance: "Medium",
      roi: "High",
      complexity: "Medium",
      status: "pending",
      progress: {
        percentage: 15,
        status: "pending",
        milestones: [
          { title: "System Analysis", completed: true },
          { title: "Motor Upgrade", completed: false },
          { title: "Control Install", completed: false },
          { title: "Testing", completed: false }
        ]
      },
      impactMetrics: {
        carbonReduced: "900 tons CO2/year",
        methaneCaptureRate: "Not Applicable",
        energyEfficiency: "30% energy reduction",
        carbonCreditsGenerated: "800 credits/year",
        implementationTime: "4-5 months"
      }
    }
  ];

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'technology':
        return 'bg-purple-100 text-purple-800';
      case 'operations':
        return 'bg-blue-100 text-blue-800';
      case 'training':
        return 'bg-green-100 text-green-800';
      case 'energy':
        return 'bg-yellow-100 text-yellow-800';
      case 'supply chain':
        return 'bg-orange-100 text-orange-800';
      case 'environmental':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRelevanceColor = (relevance) => {
    switch (relevance.toLowerCase()) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-orange-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  const getRoiColor = (roi) => {
    switch (roi.toLowerCase()) {
      case 'high':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-blue-100 text-blue-800';
      case 'low':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getComplexityColor = (complexity) => {
    switch (complexity.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const sortedAndFilteredSuggestions = useMemo(() => {
    let filtered = suggestions.filter(suggestion => {
      if (!filters) return true;
      const categoryMatch = !filters.category || filters.category === 'all' || suggestion.category === filters.category;
      return categoryMatch;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'relevance':
          const relevanceOrder = { high: 3, medium: 2, low: 1 };
          return relevanceOrder[b.relevance.toLowerCase()] - relevanceOrder[a.relevance.toLowerCase()];
        case 'roi':
          const roiOrder = { high: 3, medium: 2, low: 1 };
          return roiOrder[b.roi.toLowerCase()] - roiOrder[a.roi.toLowerCase()];
        case 'complexity':
          const complexityOrder = { low: 3, medium: 2, high: 1 };
          return complexityOrder[a.complexity.toLowerCase()] - complexityOrder[b.complexity.toLowerCase()];
        case 'savings':
          const getSavings = str => parseInt(str.replace(/[^0-9]/g, ''));
          return getSavings(b.impactMetrics.carbonReduced.replace(/[^0-9]/g, '')) - getSavings(a.impactMetrics.carbonReduced.replace(/[^0-9]/g, ''));
        default:
          return 0;
      }
    });
  }, [filters, sortBy]);

  const renderGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedAndFilteredSuggestions.map((suggestion) => {
        const savedData = getSuggestion(suggestion.id);
        const progress = savedData?.status === 'pending' ? 0 : 
                        savedData?.status === 'completed' ? 100 : 
                        savedData?.progress || suggestion.progress?.percentage || 0;
        const status = savedData?.status || suggestion.progress?.status || 'pending';

        const getProgressColor = (status) => {
          switch (status) {
            case 'completed':
              return 'bg-green-500';
            case 'in-progress':
              return 'bg-blue-500';
            case 'pending':
              return 'bg-yellow-500';
            default:
              return 'bg-gray-200';
          }
        };

        return (
          <div
            key={suggestion.id}
            onClick={() => handleSuggestionClick(suggestion)}
            className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
          >
            {/* Priority Indicator */}
            <div className={`absolute top-0 right-0 w-16 h-16 ${getRelevanceColor(suggestion.relevance)}`}>
              <div className="absolute transform rotate-45 bg-current text-white text-xs font-bold py-1 right-[-35px] top-[32px] w-[170px] text-center">
                {suggestion.relevance} Relevance
              </div>
            </div>

            <div className="p-6">
              {/* Header */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <img src={suggestion.icon} alt="" className="w-8 h-8" onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/icons/default-suggestion.svg';
                  }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 truncate group-hover:text-black">
                    {suggestion.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(suggestion.category)}`}>
                      {suggestion.category}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoiColor(suggestion.roi)}`}>
                      ROI: {suggestion.roi}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-gray-600 line-clamp-2">
                {suggestion.description}
              </p>

              {/* Progress Preview */}
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Implementation Progress</span>
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      status === 'completed' ? 'bg-green-100 text-green-800' :
                      status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
                    <span className="text-sm font-medium text-gray-900">{progress}%</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 rounded-full ${getProgressColor(status)}`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Estimated Savings */}
              <div className="mt-4 text-right">
                <span className="text-sm font-medium text-green-600">
                  Est. Carbon Reduction: {suggestion.impactMetrics.carbonReduced}
                </span>
              </div>

              {/* Last Updated */}
              {savedData?.lastUpdated && (
                <div className="mt-2 text-xs text-gray-500 text-right">
                  Updated: {new Date(savedData.lastUpdated).toLocaleDateString()}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {sortedAndFilteredSuggestions.map((suggestion) => {
        const savedData = getSuggestion(suggestion.id);
        const progress = savedData?.status === 'pending' ? 0 : 
                        savedData?.status === 'completed' ? 100 : 
                        savedData?.progress || suggestion.progress?.percentage || 0;
        const status = savedData?.status || suggestion.progress?.status || 'pending';

        return (
          <div
            key={suggestion.id}
            onClick={() => handleSuggestionClick(suggestion)}
            className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100"
          >
            <div className="p-4 flex items-center space-x-4">
              {/* Icon and Title */}
              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <img src={suggestion.icon} alt="" className="w-6 h-6" onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/icons/default-suggestion.svg';
                }} />
              </div>
              
              {/* Main Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-black">
                    {suggestion.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRelevanceColor(suggestion.relevance)} bg-opacity-10`}>
                      {suggestion.relevance}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      status === 'completed' ? 'bg-green-100 text-green-800' :
                      status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-2 flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 rounded-full ${
                          status === 'completed' ? 'bg-green-500' :
                          status === 'in-progress' ? 'bg-blue-500' :
                          'bg-yellow-500'
                        }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{progress}%</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Controls */}
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              viewMode === 'grid' 
                ? 'bg-gray-900 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              viewMode === 'list' 
                ? 'bg-gray-900 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            List View
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border-gray-200 rounded-lg focus:ring-black focus:border-black"
          >
            <option value="relevance">Relevance</option>
            <option value="roi">ROI</option>
            <option value="savings">Carbon Reduction</option>
            <option value="progress">Progress</option>
          </select>
        </div>
      </div>

      {/* Content */}
      {viewMode === 'grid' ? renderGridView() : renderListView()}

      {/* Progress Modal */}
      {selectedSuggestion && (
        <ProgressModal
          suggestion={selectedSuggestion}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default PersonalizedSuggestions;
