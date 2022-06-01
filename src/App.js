import React, { useState, useEffect } from "react";

const App = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [mseconds, setMseconds] = useState(0);
  const [stop, setStop] = useState(true);

  const onstart = () => {
    setStop(false);
    // setMseconds(mseconds + 1);
  };

  const onstop = () => {
    setStop(true);
  };

  const onreset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setMseconds(0);
  };

  useEffect(() => {
    let interval = null;
    if (!stop) {
      interval = setInterval(() => {
        if (minutes > 59) {
          setHours(hours + 1);
          setMinutes(0);
          clearInterval(interval);
        }
        if (seconds > 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
          clearInterval(interval);
        }
        if (mseconds > 999) {
          setSeconds(seconds + 1);
          setMseconds(0);
          clearInterval(interval);
        }
        if (mseconds <= 999) {
          setMseconds(mseconds + 1);
        }
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <div>
        <h1>
          {" "}
          {hours}Hr : {minutes}Min : {seconds}Sec : {mseconds}
        </h1>
        <button onClick={onstart}>Start</button>
        <button onClick={onstop}>Stop</button>
        <button onClick={onreset}>Reset</button>
      </div>
    </>
  );
};

export default App;
