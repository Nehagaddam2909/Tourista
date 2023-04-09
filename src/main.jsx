import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Q1 from "./Components/Q1";
import Q2 from "./Components/Q2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Result from "./Components/Result";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Q1></Q1>}></Route>
        <Route path="/q2" element={<Q2></Q2>}></Route>
        <Route path="/result" element={<Result></Result>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
