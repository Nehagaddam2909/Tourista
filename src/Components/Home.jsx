import { useState } from "react";
import Q1 from "./Q1";
import Q2 from "./Q2";
const Home = () => {
    const [mode,setMode]=useState("Bus");
    const [dist,setDist]=useState("0");
    const changeValue = (e) => {
        console.log(e.target.value)

        setMode(e.target.value);
      };
      const changeV=(e)=>{
        console.log(e.target.value)
        setDist(e.target.value)    
      }
    return ( <div>
        <Q1 changeValue={changeValue} mode={mode}></Q1>
        <Q2 changeV={changeV} mode={mode} dist={dist}></Q2>
    </div> );
}
 
export default Home;