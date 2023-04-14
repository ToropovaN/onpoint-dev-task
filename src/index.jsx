import React from "react";

import ReactDOM from "react-dom/client";
import "regenerator-runtime";
import "./styles/styles.css";

import App from "./App/App";

const root = document.getElementById("root");

if (root)
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

if (module.hot) {
  module.hot.accept();
}
