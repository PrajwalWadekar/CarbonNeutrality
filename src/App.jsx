import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DataInput from './components/DataInput/DataInput.jsx';
import Visualization from './components/Visualise/Visualise.jsx';
import Suggestions from './components/Suggestions/Suggestion.jsx';
import MyProfile from './components/UserProfile/MyProfile';
import AccountSettings from './components/UserProfile/AccountSettings';
import ChartOne from './components/Visualise/ChartOne';
import ChartTwo from './components/Visualise/ChartTwo';
import ChartThree from './components/Visualise/ChartThree';
import ExportOptions from './components/Export/ExportOptions';
import CarbonSinks from './components/CarbonSinks/CarbonSinks';
import LandingPage from './components/Landing/LandingPage';
import Login from './components/Landing/Login';
import Register from './components/Landing/Register';
import CarbonSpeedometerPage from './components/CarbonSpeedometerPage';

const App = () => {
  const [ownerData, setOwnerData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    coalMineName: "",
    about: ""
  });

  const inputData = [
    { parameter: "Daily Production (tons)", value: 1500 },
    { parameter: "Employee Count", value: 200 },
    { parameter: "Safety Incidents", value: 2 },
    { parameter: "Operational Hours", value: 24 },
  ];

  const suggestions = [
    { parameter: "Emission Reduction", value: "Implement scrubbers to reduce emissions by 15%" },
    { parameter: "Water Usage Optimization", value: "Recycle 50% of water used in operations" },
    { parameter: "Safety Improvement", value: "Conduct bi-weekly safety drills" },
  ];

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setOwnerData({
      name: "",
      email: "",
      phone: "",
      address: "",
      coalMineName: "",
      about: ""
    });
  };

  const handleRegister = async (formData) => {
    return new Promise((resolve) => {
      setIsAuthenticated(true);
      setOwnerData({
        name: formData.name,
        email: formData.email,
        phone: formData.contactNumber,
        address: formData.address,
        coalMineName: formData.coalMineName || "Coal Mine",
        about: "A coal mining operation focused on sustainable practices and environmental responsibility."
      });
      resolve();
    });
  };

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <Login onLogin={handleLogin} />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          }
        />
        <Route
          path="/register"
          element={
            !isAuthenticated ? (
              <Register onRegister={handleRegister} />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          }
        />

        {/* Protected dashboard routes */}
        <Route
          path="/dashboard/*"
          element={
            isAuthenticated ? (
              <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="flex flex-col flex-grow bg-white">
                  <Header 
                    ownerData={ownerData}
                    onProfileClick={() => { window.location.href = '/dashboard/myProfile' }} 
                    onAccountSettingsClick={() => { window.location.href = '/dashboard/accountSettings' }} 
                    onSectionChange={(section) => { 
                      if (section === 'dashboard') window.location.href = '/dashboard/visualise';
                      else if (section === 'emissionData') window.location.href = '/dashboard/dataInput';
                      else if (section === 'carbonSinks') window.location.href = '/dashboard/carbonSinks';
                      else if (section === 'pathways') window.location.href = '/dashboard/suggestions';
                      else if (section === 'reports') window.location.href = '/dashboard/reports';
                    }}
                    onLogout={handleLogout}
                  />
                  <main className="p-8 bg-white dark:bg-white flex-grow overflow-auto">
                    <Routes>
                      <Route path="/" element={<Navigate to="/dashboard/dataInput" />} />
                      <Route path="/dataInput" element={<DataInput />} />
                      <Route path="/carbonSinks" element={<CarbonSinks />} />
                      <Route path="/visualise" element={<Visualization />} />
                      <Route path="/suggestions" element={<Suggestions />} />
                      <Route path="/myProfile" element={<MyProfile ownerData={ownerData} />} />
                      <Route path="/accountSettings" element={<AccountSettings ownerData={ownerData} onSave={setOwnerData} />} />
                      <Route path="/chartOne" element={<ChartOne />} />
                      <Route path="/chartTwo" element={<ChartTwo />} />
                      <Route path="/chartThree" element={<ChartThree />} />
                      <Route path="/reports" element={
                        <div>
                          <h1 className="text-2xl font-bold mb-4">Reports</h1>
                          <ExportOptions
                            inputData={inputData}
                            suggestions={suggestions}
                          />
                        </div>
                      } />
                      <Route path="/carbon-speedometer" element={<CarbonSpeedometerPage />} />
                    </Routes>
                  </main>
                </div>
              </div>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
