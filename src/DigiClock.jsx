import React, { useState } from "react";

const DigiClock = () => {
  const digiC = new Date().toLocaleTimeString();

  const [digiCloTime, setCurrTime] = useState(digiC);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    //Here time and digiC both are different variable
    setCurrTime(time);
  };
  setInterval(() => {
    return updateTime();
  }, 1000);

  return (
    <>
      <div className="div_container">
        <h1>{digiCloTime}</h1>
        {/* <button onClick={updateTime}> get Time</button> */}
      </div>
    </>
  );
};

export default DigiClock;
