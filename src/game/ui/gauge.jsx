import React, { useState, useEffect } from "react";
export const Gauge = (props) => {
  const { current, label, icon } = props;
  return (
    <div className="gauge-wrapper">
      <div className={`gauge-container ${label}-gauge-container`}>
        <div
          style={{ width: `${(current / 100) * 100}%` }}
          className={`${label}-gauge gauge`}
        />
        {icon && <div className="gauge-icon">{icon}</div>}
      </div>
      <span className="gauge-label">{label}</span>
    </div>
  );
};
