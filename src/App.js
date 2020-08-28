import React, { useState, useEffect } from "react";
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";

import "./App.css";

function App() {
  const [currentValue, setCurrentValue] = useState("0");

  const [formula, setFormula] = useState("");

  const [evaluated, setEvaluated] = useState(false);

  const isOperator = /[*/+-]/,
    endWithOperator = /[*/+-]$/,
    endWithNegativeStyle = /[+/*]-$/;

  const handleClear = () => {
    setCurrentValue("0");

    setFormula("");

    setEvaluated(false);
  };

  const handleEvaluate = () => {
    if (evaluated === true) return;
    let expression = formula;
    let error;
    while (endWithOperator.test(expression)) {
      expression = expression.slice(0, -1);
    }

    const answer = Math.round(1000000000000 * eval(expression)) / 1000000000000;
    setCurrentValue(answer.toString());
    setFormula(`${formula}${"="}${answer}`);
    setEvaluated(true);
  };

  const handleNumbers = (e) => {
    const value = e.target.value;

    if (evaluated) {
      setFormula(value !== "0" ? value : "");
      setCurrentValue(value);
      setEvaluated(false);
    } else {
      currentValue === "0" || isOperator.test(currentValue)
        ? setCurrentValue(value)
        : setCurrentValue(currentValue + value);

      setFormula(
        currentValue === "0" && value === "0"
          ? formula === ""
            ? value
            : formula
          : /([^.0-9]0|^0)$/.test(formula)
          ? formula.slice(0, -1) + value
          : formula + value
      );
    }
  };

  const handleDecimal = (e) => {
    const value = e.target.value;
    if (evaluated) {
      setCurrentValue("0.");
      setFormula("0.");
      setEvaluated(false);
    } else {
      setCurrentValue(
        currentValue.includes(".") ? currentValue : currentValue + value
      );
      setFormula(
        formula === ""
          ? "0."
          : currentValue.includes(".")
          ? formula
          : formula + value
      );
    }
  };

  const handleOperator = (e) => {
    const value = e.target.value;

    setCurrentValue(value);
    if (evaluated === true) {
      setEvaluated(false);
      setFormula(currentValue + value);
      setCurrentValue(value);
    }

    if (evaluated === false) {
      if (!endWithOperator.test(formula)) {
        setFormula(formula + value);
      } else {
        if (value === "-") {
          formula.charAt(formula.length - 1) === "-"
            ? setFormula(formula)
            : setFormula(formula + value);
        } else {
          endWithNegativeStyle.test(formula)
            ? setFormula(formula.slice(0, -2) + value)
            : setFormula(formula.slice(0, -1) + value);
        }
      }
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <Display currentValue={currentValue} formula={formula}></Display>
        <Buttons
          onClear={handleClear}
          number={handleNumbers}
          decimal={handleDecimal}
          operator={handleOperator}
          evaluate={handleEvaluate}
        />
      </div>
    </div>
  );
}

export default App;
