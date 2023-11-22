import React, { useEffect } from "react";

const Timer = ({ secondsLeft, dispatch }) => {
  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  //
  return (
    <div className="timer">
      <span className="badge rounded-pill text-bg-danger">
        ⏱️{mins < 10 && "0"}
        {mins}:{secs < 10 && "0"}
        {secs}
      </span>
    </div>
  );
};

export default Timer;
