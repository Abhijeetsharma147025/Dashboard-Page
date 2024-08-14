import React, { useState } from "react";
import Widget from "./Widget";

const Category = ({ category, addWidget, removeWidget }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleAddWidget = () => {
    if (widgetName && widgetText) {
      addWidget(category.id, widgetName, widgetText);
      setWidgetName("");
      setWidgetText("");
    }
  };

  return (
    <div className="category-container">
      <h2>{category.name}</h2>
      <div className="widgets-container">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            removeWidget={() => removeWidget(category.id, widget.id)}
          />
        ))}
      </div>
      <div className="add-widget-container">
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
        <button onClick={handleAddWidget}>+ Add Widget</button>
      </div>
    </div>
  );
};

export default Category;
