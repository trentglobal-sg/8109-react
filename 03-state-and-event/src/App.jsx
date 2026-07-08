import { useState } from "react";

export default function App() {

  // a state is a variable remembered by the component
  // if a state ever changes, the function is called again and the JSX will re-render (i.e redraws)

  // we call the `useState` to create a state
  // it will return two values in an array
  // the first value is the current value of the state
  // the second value is a function for us to change the state
  // the argument to useState is the default value of the state
  const [lightOn, setLightOn] = useState(false);
  const [numberOfTimes, setNumberOfTimes] = useState(0);

  return <>
  <h1>Light Switch</h1>
    <div style={{
      border:"1px solid black",
      backgroundColor: lightOn ? "yellow" : "white",
      height:"50px",
      width:"50px"
    }}></div>
    <button onClick={()=>{
      // you cannot modify a state variable directly
      // lightOn = true;
      setLightOn(true);
      setNumberOfTimes(numberOfTimes+1);
    }}>Turn On</button>

    <button onClick={()=>{
      setLightOn(false);
    }}>Turn Off</button>
    <p>Is Light On = {"" + lightOn}</p>
    <p>You have clicked on turn on {numberOfTimes} times</p>
  </>
}