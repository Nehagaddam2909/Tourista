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
  
    return ( <div>
       
       
       
           <FetchData dist={dist} mode={mode}></FetchData>
        
    </div> );
}
 
export default Result;