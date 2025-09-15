import React from 'react';
import { X } from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';

const Widget = ({ widget, categoryId }) => {
  const { removeWidgetFromCategory } = useDashboard();

  const handleRemove = () => {
    removeWidgetFromCategory(categoryId, widget.id);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 relative group hover:shadow-md transition-shadow">
      <button 
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all"
        onClick={handleRemove}
      >
        <X className="h-4 w-4" />
      </button>
      
      <h3 className="font-semibold text-gray-900 mb-3 pr-6">{widget.name}</h3>
      
      <div className="text-gray-600">
        {widget.content.split('\n').map((line, index) => (
          <div key={index} className={line.includes('Total') ? 'text-lg font-bold text-gray-900 mb-2' : 'text-sm'}>
            {line}
          </div>
        ))}
      </div>
      
      {/* Visual elements for different widget types */}
      {widget.name === "Cloud Accounts" && (
        <div className="mt-4 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-8 border-blue-500 border-r-gray-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-bold text-gray-900">2</div>
                <div className="text-xs text-gray-500">Total</div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {widget.name === "Cloud Account Risk Assessment" && (
        <div className="mt-4 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 relative">
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="font-bold text-gray-900 text-xs">9659</div>
                <div className="text-xs text-gray-500">Total</div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {(widget.name.includes("Risk Assessment") || widget.name.includes("Security Issues")) && widget.name !== "Cloud Account Risk Assessment" && (
        <div className="mt-4">
          <div className="h-2 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default Widget;