import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useDashboard } from '../context/DashboardContext';

const AddWidgetModal = () => {
  const { dashboardData, currentCategory, addWidgetToCategory, closeAddWidgetModal } = useDashboard();
  const [widgetName, setWidgetName] = useState('');
  const [widgetContent, setWidgetContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (widgetName.trim() && widgetContent.trim()) {
      addWidgetToCategory(currentCategory, Date.now(), widgetName, widgetContent);
      setWidgetName('');
      setWidgetContent('');
      closeAddWidgetModal();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Add New Widget</h2>
          <button onClick={closeAddWidgetModal} className="text-gray-400 hover:text-red-500">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label htmlFor="widgetName" className="block text-sm font-medium text-gray-700 mb-2">
              Widget Name:
            </label>
            <input
              type="text"
              id="widgetName"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="widgetContent" className="block text-sm font-medium text-gray-700 mb-2">
              Widget Content:
            </label>
            <textarea
              id="widgetContent"
              value={widgetContent}
              onChange={(e) => setWidgetContent(e.target.value)}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="flex justify-end space-x-3">
            <button 
              type="button" 
              onClick={closeAddWidgetModal}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Widget
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetModal;