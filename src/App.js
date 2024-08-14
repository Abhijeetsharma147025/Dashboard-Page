import React, { useState } from "react";
import Category from "./components/Category";
import dashboardData from "./data/dashboardData.json"; 
import "./App.css";

function App() {
  const [data, setData] = useState(dashboardData);
  const [searchTerm, setSearchTerm] = useState("");

  const addWidget = (categoryId, widgetName, widgetText) => {
    setData((prevData) => {
      const newCategories = prevData.categories.map((category) => {
        if (category.id === categoryId) {
          const newWidget = {
            id: Date.now(),
            name: widgetName,
            text: widgetText,
            icon: "chart-bar" // Default icon for new widgets
          };
          return {
            ...category,
            widgets: [...category.widgets, newWidget]
          };
        }
        return category;
      });
      return { ...prevData, categories: newCategories };
    });
  };

  const removeWidget = (categoryId, widgetId) => {
    setData((prevData) => {
      const newCategories = prevData.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: category.widgets.filter(
              (widget) => widget.id !== widgetId
            )
          };
        }
        return category;
      });
      return { ...prevData, categories: newCategories };
    });
  };

  const filteredCategories = data.categories.map((category) => {
    const filteredWidgets = category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...category, widgets: filteredWidgets };
  });

  return (
    <div className="app-container">
      <h1>Dynamic Dashboard</h1>
      <div>
        <input
          type="text"
          placeholder="Search Widgets"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        {filteredCategories.map((category) => (
          <Category
            key={category.id}
            category={category}
            addWidget={addWidget}
            removeWidget={removeWidget}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
