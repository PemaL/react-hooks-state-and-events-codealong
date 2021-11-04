import { useState } from "react";
import React from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)
    function handleButton(){
      setIsOn((isOn)=> isOn = false);
    }
    const color = isOn ? "red" : "white";
  
  return <button onClick ={handleButton} style = {{background : color}}> {isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
