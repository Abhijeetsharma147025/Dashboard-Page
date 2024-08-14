import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faChartPie } from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  "chart-bar": faChartBar,
  "chart-pie": faChartPie,
  // Add more icons as needed
};

const Widget = ({ widget, removeWidget }) => {
  return (
    <div className="widget-container">
      <div className="widget-header">
        <FontAwesomeIcon icon={iconMap[widget.icon]} className="widget-icon" />
        <h3>{widget.name}</h3>
      </div>
      <p>{widget.text}</p>
      <button onClick={removeWidget} className="remove-button">x</button>
    </div>
  );
};

export default Widget;
