import React, { useState } from "react";
import MadeWith from "./MadeWith.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(BigInt(0));
  const increment = (event) => {
    setCount((prevValue) => prevValue + BigInt(1));
  };
  return (
    <React.Fragment>
      <h1 id="header">React Counter</h1>
      <button id="counter" onClick={increment}>
        Count is {`${count}`}
      </button>
      <MadeWith></MadeWith>
      <footer id="footer">by Abdullah Fatota</footer>
    </React.Fragment>
  );
}

export default App;
