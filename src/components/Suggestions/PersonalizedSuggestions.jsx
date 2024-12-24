import React from 'react';

const PersonalizedSuggestions = ({ miningData = {
  fuelEfficiency: 65,
  transportEmissions: 75,
  electricVehicleUsage: 25,
  conveyorEfficiency: 60,
  coalProduction: 1000,
  methaneCapture: 40,
  renewableEnergyUsage: 30,
  waterUsageEfficiency: 55
} }) => {
  const generateDynamicSuggestions = () => {
    let suggestions = [];

    // Fuel Management Suggestion
    if (miningData.fuelEfficiency < 75) {
      const improvement = Math.round((75 - miningData.fuelEfficiency) * 1.2);
      const urgency = miningData.fuelEfficiency < 50 ? 'Critical' : 
                     miningData.fuelEfficiency < 65 ? 'High' : 'Medium';
      const timeframe = miningData.fuelEfficiency < 50 ? 'Immediate' :
                       miningData.fuelEfficiency < 65 ? 'Short-term' : 'Medium-term';
      
      suggestions.push({
        id: 'fuel-optimization',
        title: `${urgency === 'Critical' ? 'Urgent: ' : ''}Fuel Management System`,
        description: `${urgency === 'Critical' ? 'Critical efficiency issues detected' : 
                      'Optimization analysis indicates potential improvements'}:\n` +
          `• Current efficiency: ${miningData.fuelEfficiency}%\n` +
          `• Target: ${Math.min(95, miningData.fuelEfficiency + 20)}%\n` +
          `• Action: ${urgency === 'Critical' ? 'Immediate system overhaul required' : 
                      'Deploy automated fuel monitoring system'}`,
        category: 'Energy Efficiency',
        impact: urgency,
        timeframe: timeframe,
        priority: urgency === 'Critical' ? 'High' : 'Medium',
        metrics: {
          potentialSavings: `${Math.round((75 - miningData.fuelEfficiency) * 500)} liters/month`,
          emissionReduction: `${Math.round((75 - miningData.fuelEfficiency) * 2.5)} tons CO2e/month`
        }
      });
    }

    // Transport Optimization Suggestion
    if (miningData.transportEmissions > 60) {
      const isHighCoalProduction = miningData.coalProduction > (miningData.transportEmissions * 2);
      const lowEVUsage = miningData.electricVehicleUsage < 40;
      
      suggestions.push({
        id: 'transport-optimization',
        title: isHighCoalProduction ? 'Conveyor System Enhancement Required' : 'Electric Vehicle Integration',
        description: isHighCoalProduction
          ? `Coal production exceeds current transport capacity:\n` +
            `• Coal Production: ${miningData.coalProduction} units\n` +
            `• Transport Capacity: ${miningData.transportEmissions} units\n` +
            `• Conveyor Efficiency: ${miningData.conveyorEfficiency}%\n` +
            `• Action: Upgrade conveyor systems to match production capacity`
          : lowEVUsage
            ? `Low electric vehicle utilization detected:\n` +
              `• Current EV usage: ${miningData.electricVehicleUsage}%\n` +
              `• Target: ${Math.min(90, miningData.electricVehicleUsage + 40)}%\n` +
              `• Action: Transition to electric vehicle fleet for reduced emissions`
            : 'Transport emissions need optimization',
        category: 'Carbon Emissions',
        impact: isHighCoalProduction ? 'Critical' : lowEVUsage ? 'High' : 'Medium',
        timeframe: isHighCoalProduction ? 'Immediate' : 'Medium-term',
        priority: isHighCoalProduction ? 'High' : lowEVUsage ? 'High' : 'Medium',
        metrics: isHighCoalProduction ? {
          capacityGap: `${Math.round(miningData.coalProduction - miningData.transportEmissions)} units`,
          potentialImprovement: `${Math.round((90 - miningData.conveyorEfficiency) * 1.2)}% efficiency gain`,
          costReduction: `₹${Math.round((90 - miningData.conveyorEfficiency) * 1000 * 83)}/month`
        } : {
          emissionReduction: `${Math.round((90 - miningData.electricVehicleUsage) * 0.5)} tons CO2e/month`,
          costSavings: `₹${Math.round((90 - miningData.electricVehicleUsage) * 800 * 83)}/month`
        }
      });
    }

    // Methane Capture Suggestion
    if (miningData.methaneCapture < 60) {
      const risk = miningData.methaneCapture < 30 ? 'High Risk' :
                  miningData.methaneCapture < 45 ? 'Moderate Risk' : 'Low Risk';
      
      suggestions.push({
        id: 'methane-optimization',
        title: `${risk === 'High Risk' ? 'Urgent: ' : ''}Methane Capture Enhancement`,
        description: `${risk === 'High Risk' ? 'Critical methane levels detected' :
                      'Current methane capture system needs improvement'}:\n` +
          `• Current capture rate: ${miningData.methaneCapture}%\n` +
          `• Target rate: ${Math.min(90, miningData.methaneCapture + 30)}%\n` +
          `• Action: ${risk === 'High Risk' ? 'Immediate system upgrade required' :
                      'Upgrade drainage systems with monitoring'}`,
        category: 'Carbon Emissions',
        impact: risk === 'High Risk' ? 'Critical' : 'High',
        timeframe: risk === 'High Risk' ? 'Immediate' : 'Short-term',
        priority: risk === 'High Risk' ? 'High' : 'Medium',
        metrics: {
          additionalCapture: `${Math.round((90 - miningData.methaneCapture) * 100)} m³/day`,
          carbonCredits: `${Math.round((90 - miningData.methaneCapture) * 5)} credits/month`
        }
      });
    }

    // Renewable Energy Suggestion
    if (miningData.renewableEnergyUsage < 50) {
      const opportunity = miningData.renewableEnergyUsage < 20 ? 'Major' :
                         miningData.renewableEnergyUsage < 35 ? 'Significant' : 'Moderate';
      
      suggestions.push({
        id: 'renewable-energy',
        title: `${opportunity === 'Major' ? 'Priority: ' : ''}Renewable Energy Integration`,
        description: `${opportunity === 'Major' ? 'Significant opportunity identified' :
                      'Opportunity to increase renewable energy usage'}:\n` +
          `• Current renewable mix: ${miningData.renewableEnergyUsage}%\n` +
          `• Recommended target: ${Math.min(80, miningData.renewableEnergyUsage + 35)}%\n` +
          `• Action: ${opportunity === 'Major' ? 'Comprehensive renewable integration required' :
                      'Install solar and wind power systems'}`,
        category: 'Energy Efficiency',
        impact: opportunity === 'Major' ? 'High' : 'Medium',
        timeframe: 'Long-term',
        priority: opportunity === 'Major' ? 'High' : 'Medium',
        metrics: {
          emissionReduction: `${Math.round((80 - miningData.renewableEnergyUsage) * 3)} tons CO2e/month`,
          costSavings: `₹${Math.round((80 - miningData.renewableEnergyUsage) * 2000 * 83)}/month`
        }
      });
    }

    return suggestions.sort((a, b) => {
      const priorityOrder = { High: 3, Medium: 2, Low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  };

  const suggestions = generateDynamicSuggestions();

  return (
    <div className="space-y-6">
      {suggestions.map(suggestion => (
        <div
          key={suggestion.id}
          className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{suggestion.title}</h3>
              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  suggestion.priority === 'High' ? 'bg-red-100 text-red-800' :
                  suggestion.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {suggestion.priority} Priority
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {suggestion.timeframe}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  {suggestion.category}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-700 whitespace-pre-line">{suggestion.description}</p>
          </div>

          {suggestion.metrics && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(suggestion.metrics).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <p className="text-lg font-semibold text-gray-900">{value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PersonalizedSuggestions;
