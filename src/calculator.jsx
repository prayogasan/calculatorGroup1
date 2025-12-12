import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Calculator() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleClick = (value) => {
    setInput(input + value);
  };

  // Fungsi menghitung hasil
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  // Fungsi hapus layar
  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="container">
      <h3>Kalkulator Sederhana</h3>
      <input type="text" className="display" value={input} readOnly />

      <div className="buttons">
        <button className="clear" onClick={handleClear}>
          C
        </button>
        <button className="operator" onClick={() => handleClick("/")}>
          /
        </button>
        <button className="operator" onClick={() => handleClick("*")}>
          x
        </button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button className="operator" onClick={() => handleClick("-")}>
          -
        </button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button className="operator" onClick={() => handleClick("+")}>
          +
        </button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleCalculate()}>=</button>

        <button
          onClick={() => handleClick("0")}
          style={{ gridColumn: "span 2" }}
        >
          0
        </button>
        <button onClick={() => handleClick(".")}>.</button>
      </div>

      <button
        className="btn-nav"
        style={{ marginTop: "20px", backgroundColor: "#576574" }}
        onClick={() => navigate("/")}
      >
        Kembali ke Home
      </button>
    </div>
  );
}

export default Calculator;
