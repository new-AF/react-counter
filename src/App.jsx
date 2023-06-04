import React, { useState } from "react";
import MadeWith from "./MadeWith.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(BigInt(0));
  const increment = (event) => {
    setCount((prevValue) => prevValue + BigInt(1));
  };
  const decrement = (event) => {
    setCount((prevValue) => prevValue - BigInt(1));
  };
  const reset = (event) => {
    setCount((prevValue) => BigInt(0));
  };
  const setMax = (event) => {
    setCount((prevValue) => BigInt(Number.MAX_SAFE_INTEGER));
  };
  return (
    <React.Fragment>
      <h1 id="header">React Counter</h1>
      <p className="text">Count is</p>
      <p id="number" className="text">{`${count}`}</p>
      <button className="counter" onClick={increment}>
        Increment
      </button>
      <button className="counter" onClick={decrement}>
        Decrement
      </button>
      <button className="counter" onClick={reset}>
        Set to <code>0</code>
      </button>
      <button className="counter" onClick={setMax}>
        Set to <code>Number.MAX_SAFE_INTEGER</code>
      </button>
      <MadeWith></MadeWith>
      <footer id="footer">by Abdullah Fatota</footer>
    </React.Fragment>
  );
}

export default App;
