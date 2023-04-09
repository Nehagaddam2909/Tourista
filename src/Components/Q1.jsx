import { useState } from "react";
import { Link}  from "react-router-dom";
const Q1 = () => {
  const [mode, setMode] = useState("Bus");
  const changeValue = (e) => {
    setMode(e.target.value);
    console.log(mode);
  };
  return (
    <div className="m-4">
      <div className="">
        What is your most frequently used means of travel from your home to work
        location?
      </div>
      <div className="flex flex-col" onChange={(e) => changeValue(e)}>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="op1"
            name="q1"
            className="h-3 w-3 cursor-pointer "
            value="Bus"
          ></input>
          <label htmlFor="op1">Bus</label>
        </div>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="op2"
            name="q1"
            className="h-3 w-3 cursor-pointer border"
            value="Metro"
          ></input>
          <label htmlFor="op2">Metro</label>
        </div>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="op3"
            name="q1"
            className="h-3 w-3 cursor-pointer border-8"
            value="Own Two-wheeler"
          ></input>
          <label htmlFor="op3" className="">Own Two-wheeler</label>
        </div>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="op4"
            name="q1"
            className="h-3 w-3 cursor-pointer border"
            value="Own Car"
          ></input>
          <label htmlFor="op4">Own Car</label>
        </div>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="op5"
            name="q1"
            className="h-3 w-3 cursor-pointer border"
            value="Walk/Bicycle"
          ></input>
          <label htmlFor="op5">Walk/Bicycle</label>
        </div>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="op6"
            name="q1"
            className="h-3 w-3 cursor-pointer border  "
            value="Auto"
          ></input>
          <label htmlFor="op6">Auto</label>
        </div>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="op7"
            name="q1"
            className="h-3 w-3 cursor-pointer border "
            value="Auto based ride hailing services including ola/uber"
          ></input>
          <label htmlFor="op7">
            Auto based ride hailing services including ola/uber
          </label>
        </div>
      </div>
      <Link to='/q2' state={{mode:mode}}>Submit</Link>
    </div>
  );
};

export default Q1;
