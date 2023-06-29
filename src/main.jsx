import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import store from "./store.js";
import { Provider } from "react-redux";

const htmlRoot = document.getElementById("root");
const root = ReactDOM.createRoot(htmlRoot);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
