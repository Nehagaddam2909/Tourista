import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
    const loc=useLocation()
    if(!loc.state)
    {
        alert("Answer all questions...!!!")
        window.location.href="/";
    }

    return ( <div>
        This is result
    </div> );
}
 
export default Result;