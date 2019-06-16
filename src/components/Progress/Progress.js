import React from "react";
import "./Progress.css";

const Progress = ({ progress }) => {
  return (
    <div className="Progress">
      <div
        className="Progress-fill"
        style={{
          width: `${progress * 100}%`,
          filter: `grayscale(${100 - progress * 100}%)`
        }}
      />
    </div>
  );
};

export default Progress;
