import React, { useState, useEffect } from "react";
import socket from "../socketConfig";

export const CountDown = () => {
  const [timer, setTimer] = useState({ CountDown: "", msg: "" });
  useEffect(() => {
    socket.on("timer", (data) => {
      setTimer(data);
    });
    socket.on("done", () => {
      socket.removeAllListeners("timer");
    });
  }, []);
  const {countDown, msg } = timer;
  return (
    <>
      <h1>{countDown}</h1>
      <h3>{msg}</h3>
    </>
  );
};
