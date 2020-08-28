import React from "react";

const Buttons = ({ onClear, number, decimal, operator, evaluate }) => {
  return (
    <div>
      <button id="clear" className="operatorBtn jumbo" onClick={onClear}>
        AC
      </button>
      <button id="divide" value="/" className="operatorBtn" onClick={operator}>
        /
      </button>
      <button
        id="multiply"
        value="*"
        className="operatorBtn"
        onClick={operator}
      >
        X
      </button>
      <button id="seven" value="7" className="numberBtn" onClick={number}>
        7
      </button>
      <button id="eight" className="numberBtn" value="8" onClick={number}>
        8
      </button>
      <button id="nine" className="numberBtn" value="9" onClick={number}>
        9
      </button>
      <button
        id="subtract"
        value="-"
        className="operatorBtn"
        onClick={operator}
      >
        -
      </button>
      <button id="four" className="numberBtn" value="4" onClick={number}>
        4
      </button>
      <button id="five" className="numberBtn" value="5" onClick={number}>
        5
      </button>
      <button id="six" className="numberBtn" value="6" onClick={number}>
        6
      </button>
      <button id="add" value="+" className="operatorBtn" onClick={operator}>
        +
      </button>
      <button id="one" className="numberBtn" value="1" onClick={number}>
        1
      </button>
      <button id="two" className="numberBtn" value="2" onClick={number}>
        2
      </button>
      <button id="three" className="numberBtn" value="3" onClick={number}>
        3
      </button>
      <button id="zero" className="numberBtn jumbo" value="0" onClick={number}>
        0
      </button>
      <button id="decimal" value="." className="numberBtn" onClick={decimal}>
        .
      </button>
      <button id="equals" className="equalBtn" onClick={evaluate}>
        =
      </button>
    </div>
  );
};

export default Buttons;
