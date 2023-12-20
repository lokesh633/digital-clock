import React, { useState, useEffect } from "react";
import "./App.css";

const Digital = () => {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });

  const date = new Date();

  const dates = date.toLocaleDateString();

  const daysArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const days = date.getDay();

  const addZero = (n) => {
    return n <= 9 ? "0" + n : n;
  };

  const removeRailwayTime = (m) => {
    return m >= 13 ? m - 12 : m;
  };

  const refreshTime = () => {
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    return setTime({ h: hour, m: min, s: sec });
  };

  useEffect(() => {
    const setIntClock = setInterval(refreshTime, 1000);
    return () => {
      return clearInterval(setIntClock);
    };
  }, [time]);

  return (
    <div className="digital-main">
      <div className="clock-container">
        <div className="time-display">
          <span>{addZero(removeRailwayTime(time.h))}</span>:
          <span>{addZero(time.m)}</span>:
          <span>{addZero(time.s)}</span>-
          <span>{time.h >= 12 ? "PM" : "AM"}</span>
        </div>
          <div className="date-display">{dates}</div>
        <div className="day-display">
          <span>{daysArr[days]}</span>
        </div>
      </div>
    </div>
  );
};

export default Digital;
