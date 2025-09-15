import React from 'react';
import Header from './Header';
import Category from './Category';
import AddWidgetModal from './AddWidgetModal';
import AddCategoryModal from './AddCategoryModal';
import { useDashboard } from '../context/DashboardContext';

const Dashboard = () => {
  const { dashboardData, showAddWidgetModal, showCategoryModal } = useDashboard();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="px-6 py-6">
        {dashboardData.categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </main>
      
      {showAddWidgetModal && <AddWidgetModal />}
      {showCategoryModal && <AddCategoryModal />}
    </div>
  );
};

export default Dashboard;