import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const x = 6;
// const y = 5;
// const z = 7;

// let text = " hello simplilearn";

// if (x > y) {
//   if (x > z) {
//     text = "x is largest";
//   } else if (x < z) {
//     text = "z is largest";
//   }
// } else {
//   text = "y is largest";
// }

// const x = 50;
// const y = 60;
// const z = 70;
// const a = 80;

// const myelement = (
//   <h1>{x > y && x > z && x > a ? x : y > z && y > a ? y : z > a ? z : a} </h1>
// );

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
