import React from 'react';
import { RefreshCw, MoreHorizontal, Clock } from 'lucide-react';
import Search from './Search';
import { useDashboard } from '../context/DashboardContext';

const Header = () => {
  const { openCategoryModal } = useDashboard();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 text-gray-600 text-sm">
          <span>Home</span>
          <span>&gt;</span>
          <span className="text-blue-600 font-medium">Dashboard V2</span>
        </div>
        <div className="flex items-center space-x-4">
          <Search />
          <select className="text-gray-600 bg-gray-100 px-3 py-1 rounded text-sm border-0 focus:outline-none">
            <option>Add Widget</option>
            <option>Remove Widget</option>
          </select>
        </div>
      </div>
      
      {/* Dashboard Title Row */}
      <div className="flex justify-between items-center mt-6">
        <h1 className="text-xl font-semibold text-gray-900">CNAPP Dashboard</h1>
        <div className="flex items-center space-x-3">
          <button 
            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 flex items-center space-x-2 text-sm"
            onClick={openCategoryModal}
          >
            <span>Add Widget</span>
            <span className="text-lg">+</span>
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <RefreshCw className="h-4 w-4" />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <MoreHorizontal className="h-4 w-4" />
          </button>
          <div className="flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm">
            <Clock className="h-4 w-4" />
            <span>Last 2 days</span>
            <span>▼</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;