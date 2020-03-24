import React, { useState, useEffect } from "react";
import "./App.css";
export default function AppFunction() {
  const [count, setCount] = useState(0);
  const [isOn, setOn] = useState(false);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    document.title = `you have clicked ${count} times`;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [count]);
  const handleMouseMove = event => {
    setX(event.pageX);
    setY(event.pageY);
  };

  const handleOnline = () => {
    setStatus(true);
  };
  const handleOffline = () => {
    setStatus(false);
  };
  const incrementCount = () => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    setCount(prevState => count + 1);
  };
  const toggleLight = () => {
    setOn(prevState => !isOn);
  };
  return (
    <>
      <h1>functional Component</h1>
      <button onClick={incrementCount}>clicked {count} times</button>
      <h1>Toggle Light</h1>
      <div
        style={{
          height: "50px",
          width: "50px",
          background: isOn ? "orange" : "grey"
        }}
        onClick={toggleLight}
      ></div>
      <h2>Mouse Position</h2>
      <p>x Position:{x}</p>
      <p>y Position:{y}</p>

      <h2>Network status</h2>
      <p>
        you are <strong>{status ? "Online" : "Offline"}</strong>
      </p>
    </>
  );
}
