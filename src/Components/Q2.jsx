import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Q2 = () => {
  const [dist,setDist]=useState("5");
  const loc = useLocation();
  if(!loc.state)
  {
    alert("Please answer the first question...!!!");
    window.location.href="/";
  }
  console.log(loc.state);
  const mode = loc.state.mode;
  return (
    <div className="m-4">
      <div className="">
        What is the total distance between your home and workplace?
      </div>
      <div className="flex flex-col" onChange={(e) => setDist(e.target.value)}>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="op1"
            name="q1"
            className="h-3 w-3 cursor-pointer "
            value="5"
          ></input>
          <label htmlFor="op1">{"< 5 km"}</label>
        </div>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="op2"
            name="q1"
            className="h-3 w-3 cursor-pointer border"
            value="10"
          ></input>
          <label htmlFor="op2">5 - 10 km </label>
        </div>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="op3"
            name="q1"
            className="h-3 w-3 cursor-pointer border-8"
            value="15"
          ></input>
          <label htmlFor="op3" className="">
             10- 15 km
          </label>
        </div>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="op4"
            name="q1"
            className="h-3 w-3 cursor-pointer border"
            value="20"
          ></input>
          <label htmlFor="op4">15- 20 km </label>
        </div>
       
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="op6"
            name="q1"
            className="h-3 w-3 cursor-pointer border  "
            value="25"
          ></input>
          <label htmlFor="op6">20- 25 km</label>
        </div>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="op7"
            name="q1"
            className="h-3 w-3 cursor-pointer border "
            value={"26"}
          ></input>
          <label htmlFor="op7">
            {"> 25 km"}
          </label>
        </div>
      </div>
      <Link to="/">Prev</Link>
      <Link to="/result" state={{mode:mode,distance:dist}}>Generate</Link>
    </div>
  );
};

export default Q2;
