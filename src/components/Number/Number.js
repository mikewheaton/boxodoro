import React from "react";
import "./Number.css";

const Number = ({ value, deemphasizeZeros }) => {
  if (value === 0) {
    return (
      <span className="Number">
        {deemphasizeZeros ? <small>00</small> : <>00</>}
      </span>
    );
  } else if (value < 10) {
    return (
      <span className="Number">
        {deemphasizeZeros ? <small>0</small> : <>0</>}
        {value}
      </span>
    );
  } else {
    return <span className="Number">{value}</span>;
  }
};

export default Number;
