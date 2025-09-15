import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';

const AddCategoryModal = () => {
  const { dashboardData, toggleWidgetInCategory, closeCategoryModal } = useDashboard();
  const [activeTab, setActiveTab] = useState('CSPM');

  const tabs = ['CSPM', 'CWPP', 'Image', 'Ticket'];

  const getWidgetStatus = (widget) => {
    return dashboardData.categories.some(category => 
      category.widgets.some(w => w.id === widget.id)
    );
  };

  const getDefaultCategoryForTab = (tab) => {
    switch(tab) {
      case 'CSPM': return 1;
      case 'CWPP': return 2;
      case 'Image': return 3;
      case 'Ticket': return 1;
      default: return 1;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
      <div className="bg-white h-full w-96 shadow-xl flex flex-col">
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Add Widget</h2>
          <button onClick={closeCategoryModal} className="text-white hover:text-gray-200">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b">
            <p className="text-gray-600">Personalise your dashboard by adding the following widget</p>
          </div>
          
          <div className="border-b">
            <div className="flex">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 font-medium ${
                    activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-3">
              {dashboardData.availableWidgets[activeTab]?.map(widget => {
                const isChecked = getWidgetStatus(widget);
                const categoryId = getDefaultCategoryForTab(activeTab);
                
                return (
                  <div key={widget.id} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={(e) => toggleWidgetInCategory(categoryId, widget.id, e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label className="text-gray-700">{widget.name}</label>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="p-4 border-t flex justify-end space-x-3">
            <button
              onClick={closeCategoryModal}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={closeCategoryModal}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;