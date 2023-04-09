import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Q2 = ({changeV,mode,dist}) => {
  
  return (
    <div className="m-4">
      <div className="">
        What is the total distance between your home and workplace?
      </div>
      <div className="flex flex-col mb-[2rem]" onChange={(e) => changeV(e)}>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="o1"
            name="q2"
            className="h-3 w-3 cursor-pointer "
            value="0"
            defaultChecked={dist ==="0"}
          ></input>
          <label htmlFor="o1">{"< 5 km"}</label>
        </div>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="o2"
            name="q2"
            className="h-3 w-3 cursor-pointer border"
            value="5"
          ></input>
          <label htmlFor="o2">5 - 10 km </label>
        </div>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="o3"
            name="q2"
            className="h-3 w-3 cursor-pointer border-8"
            value="10"
          ></input>
          <label htmlFor="o3" className="">
             10- 15 km
          </label>
        </div>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="o4"
            name="q2"
            className="h-3 w-3 cursor-pointer border"
            value="15"
          ></input>
          <label htmlFor="o4">15- 20 km </label>
        </div>
       
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="o5"
            name="q2"
            className="h-3 w-3 cursor-pointer border  "
            value="20"
          ></input>
          <label htmlFor="o5">20- 25 km</label>
        </div>
        <div className="flex space-x-8 cursor-pointer items-center">
          <input
            type="radio"
            id="o6"
            name="q2"
            className="h-3 w-3 cursor-pointer border "
            value={"25"}
          ></input>
          <label htmlFor="o6">
            {"> 25 km"}
          </label>
        </div>
      </div>
     
      <Link to="/result" state={{mode:mode,distance:dist}} className=" p-2 text-white rounded-md my-[2rem]  text-center font-extrabold bg-gradient-to-r from-purple-400 to-pink-600">Generate</Link>
    </div>
  );
};

export default Q2;
