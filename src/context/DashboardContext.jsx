import React, { createContext, useState, useContext } from 'react';

// Initial dashboard data
const initialDashboardData = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { 
          id: 1, 
          name: "Cloud Accounts", 
          content: "2\nTotal\n\nConnected (2)\nNot Connected (2)"
        },
        { 
          id: 2, 
          name: "Cloud Account Risk Assessment", 
          content: "9659\nTotal\n\nFailed (1689)\nWarning (681)\nNot available (36)\nPassed (7253)"
        }
      ]
    },
    {
      id: 2,
      name: "CWPP Dashboard:",
      widgets: [
        { 
          id: 3, 
          name: "Top 5 Namespace Specific Alerts", 
          content: "No Graph data available!"
        },
        { 
          id: 4, 
          name: "Workload Alerts", 
          content: "No Graph data available!"
        }
      ]
    },
    {
      id: 3,
      name: "Registry Scan",
      widgets: [
        { 
          id: 5, 
          name: "Image Risk Assessment", 
          content: "1470 Total Vulnerabilities\n\nCritical (9)    High (150)"
        },
        { 
          id: 6, 
          name: "Image Security Issues", 
          content: "2 Total Images\n\nCritical (2)    High (2)"
        }
      ]
    }
  ],
  availableWidgets: {
    CSPM: [
      { id: 1, name: "Cloud Accounts", content: "2\nTotal\n\nConnected (2)\nNot Connected (2)" },
      { id: 2, name: "Cloud Account Risk Assessment", content: "9659\nTotal\n\nFailed (1689)\nWarning (681)\nNot available (36)\nPassed (7253)" },
      { id: 101, name: "Security Compliance", content: "95% Compliance\n\nPassed (950)\nFailed (50)" },
      { id: 102, name: "Cost Analysis", content: "$2,450 Monthly\n\nCompute (60%)\nStorage (40%)" }
    ],
    CWPP: [
      { id: 3, name: "Top 5 Namespace Specific Alerts", content: "No Graph data available!" },
      { id: 4, name: "Workload Alerts", content: "No Graph data available!" },
      { id: 103, name: "Container Security", content: "25 Containers\n\nSecure (20)\nVulnerable (5)" },
      { id: 104, name: "Runtime Protection", content: "Active Monitoring\n\nThreats Blocked (15)\nIncidents (2)" }
    ],
    Image: [
      { id: 5, name: "Image Risk Assessment", content: "1470 Total Vulnerabilities\n\nCritical (9)    High (150)" },
      { id: 6, name: "Image Security Issues", content: "2 Total Images\n\nCritical (2)    High (2)" },
      { id: 105, name: "Registry Scan Summary", content: "50 Images Scanned\n\nClean (45)\nVulnerable (5)" },
      { id: 106, name: "License Compliance", content: "License Check\n\nCompliant (48)\nNon-compliant (2)" }
    ],
    Ticket: [
      { id: 107, name: "Support Tickets", content: "15 Open Tickets\n\nHigh Priority (3)\nMedium Priority (8)\nLow Priority (4)" },
      { id: 108, name: "Incident Reports", content: "8 Active Incidents\n\nCritical (1)\nHigh (3)\nMedium (4)" },
      { id: 109, name: "Change Requests", content: "12 Pending Changes\n\nApproved (8)\nPending (4)" }
    ]
  }
};

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState(initialDashboardData);
  const [showAddWidgetModal, setShowAddWidgetModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const addWidgetToCategory = (categoryId, widgetId, widgetName, widgetContent) => {
    setDashboardData(prev => {
      const newCategories = prev.categories.map(category => {
        if (category.id === categoryId) {
          const newWidget = {
            id: Date.now(),
            name: widgetName,
            content: widgetContent
          };
          return {
            ...category,
            widgets: [...category.widgets, newWidget]
          };
        }
        return category;
      });
      
      return {
        ...prev,
        categories: newCategories
      };
    });
  };

  const removeWidgetFromCategory = (categoryId, widgetId) => {
    setDashboardData(prev => {
      const newCategories = prev.categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: category.widgets.filter(widget => widget.id !== widgetId)
          };
        }
        return category;
      });
      
      return {
        ...prev,
        categories: newCategories
      };
    });
  };

  const toggleWidgetInCategory = (categoryId, widgetId, isEnabled) => {
    setDashboardData(prev => {
      const newCategories = prev.categories.map(category => {
        if (category.id === categoryId) {
          if (isEnabled) {
            // Add widget if it doesn't exist
            const widgetToAdd = prev.availableWidgets.CSPM.find(w => w.id === widgetId) ||
                              prev.availableWidgets.CWPP.find(w => w.id === widgetId) ||
                              prev.availableWidgets.Image.find(w => w.id === widgetId) ||
                              prev.availableWidgets.Ticket.find(w => w.id === widgetId);
            
            if (widgetToAdd && !category.widgets.some(w => w.id === widgetId)) {
              return {
                ...category,
                widgets: [...category.widgets, { 
                  id: widgetId, 
                  name: widgetToAdd.name, 
                  content: widgetToAdd.content 
                }]
              };
            }
          } else {
            // Remove widget
            return {
              ...category,
              widgets: category.widgets.filter(widget => widget.id !== widgetId)
            };
          }
        }
        return category;
      });
      
      return {
        ...prev,
        categories: newCategories
      };
    });
  };

  const openAddWidgetModal = (categoryId) => {
    setCurrentCategory(categoryId);
    setShowAddWidgetModal(true);
  };

  const closeAddWidgetModal = () => {
    setShowAddWidgetModal(false);
    setCurrentCategory(null);
  };

  const openCategoryModal = () => {
    setShowCategoryModal(true);
  };

  const closeCategoryModal = () => {
    setShowCategoryModal(false);
  };

  const filterWidgets = (widgets) => {
    if (!searchTerm) return widgets;
    return widgets.filter(widget => 
      widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      widget.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <DashboardContext.Provider value={{
      dashboardData,
      showAddWidgetModal,
      showCategoryModal,
      currentCategory,
      searchTerm,
      setSearchTerm,
      addWidgetToCategory,
      removeWidgetFromCategory,
      toggleWidgetInCategory,
      openAddWidgetModal,
      closeAddWidgetModal,
      openCategoryModal,
      closeCategoryModal,
      filterWidgets
    }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};