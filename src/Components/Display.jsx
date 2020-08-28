import React from "react";

const Display = ({ currentValue, formula }) => {
  return (
    <div className="output">
      <div className="formula">{formula}</div>
      <div id="display"> {currentValue}</div>
    </div>
  );
};

export default Display;
