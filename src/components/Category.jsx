import React from 'react';
import { Plus } from 'lucide-react';
import Widget from './Widget';
import { useDashboard } from '../context/DashboardContext';

const Category = ({ category }) => {
  const { openAddWidgetModal, filterWidgets } = useDashboard();

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterWidgets(category.widgets).map(widget => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
        
        {/* Add Widget Card */}
        <div 
          className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:border-gray-400 cursor-pointer transition-all min-h-[200px] group"
          onClick={() => openAddWidgetModal(category.id)}
        >
          <div className="text-center text-gray-500 group-hover:text-gray-700">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-200 transition-colors">
              <Plus className="h-6 w-6" />
            </div>
            <span className="font-medium">Add Widget</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;