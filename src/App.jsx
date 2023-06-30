import React from "react";
import MadeWith from "./MadeWith.jsx";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { countUp, countDown, reset0, resetMax } from "./slice.js";

function App() {
    const count = useSelector((state) => {
        const count = state["counter-slice"].count;
        // format number per user's locale
        const formatter = new Intl.NumberFormat();
        return formatter.format(count);
    });
    const dispatch = useDispatch();
    const increment = (event) => dispatch(countUp());
    const decrement = (event) => dispatch(countDown());
    const reset = (event) => dispatch(reset0());
    const setMax = (event) => dispatch(resetMax());
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
                Reset
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
