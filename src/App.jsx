import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
      <section>
        <p className="text">made with</p>
        <img src={reactLogo} alt="React library logo"></img>
        <img src={viteLogo} alt="Vite tooling logo"></img>
      </section>
      <footer id="footer">by Abdullah Fatota</footer>
    </React.Fragment>
  );
}

export default App;
