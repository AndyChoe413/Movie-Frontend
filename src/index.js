import React from "react";
import ReactDOM from "react-dom";
//brings middleware toastify
import "react-toastify/dist/ReactToastify.css";

import App from "./App";

import "./_base.css";
import "./index.css";
console.log(process.env.NODE_ENV);
//renders App.js file to DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
