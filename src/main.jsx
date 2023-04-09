import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Result from "./Components/Result";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        
        <Route path="/result" element={<Result></Result>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
