import React from 'react';
import Dashboard from './components/Dashboard';
import { DashboardProvider } from './context/DashboardContext';

const App = () => {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
};

export default App;