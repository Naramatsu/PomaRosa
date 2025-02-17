import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PreferencesState from "./context/PreferencesState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PreferencesState>
    <App />
  </PreferencesState>
);

reportWebVitals();
