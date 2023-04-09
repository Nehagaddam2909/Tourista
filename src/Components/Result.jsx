import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FetchData from "./FetchData";


const Result = () => {
    const loc=useLocation()
    if(!loc.state)
    {
        alert("Answer all questions...!!!")
        window.location.href="/";
    }
    const dist=loc.state.distance;
    const mode=loc.state.mode 
    console.log("data:  lll",dist,mode)
  // #eb7434 #cf1b48

    return ( <div className="flex flex-col justify-center">
       
        <div className="my-[2rem] uppercase text-center font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Result of the Choice</div>
       
           <FetchData dist={dist} mode={mode}></FetchData>
        
    </div> );
}
 
export default Result;