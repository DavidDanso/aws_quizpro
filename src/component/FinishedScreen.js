import React from "react";

const FinishedScreen = ({ totalPoints, points, highscore, dispatch }) => {
  //
  let message;
  if (points === 100)
    message = "Perfect score! You nailed it. You're a true expert. 🏆";
  if (points >= 80 && points < 100)
    message = "Fantastic! You're a quiz master. Impressive performance! 🎉";
  if (points >= 50 && points < 80)
    message = "Nicely done! You're on the right track. Keep it up! 🚀";
  if (points >= 0 && points < 50)
    message = "Room for improvement. Keep exploring and learning! 🌱";
  if (points === 0)
    message = "Keep going! Every try gets you closer to mastery. 💪";

  return (
    <div className="finished--screen">
      <div className="screen--container">
        <h3>{message}</h3>
        <p className="pill">
          You scored {points} out of {totalPoints}.
          <span>( Highscore: {highscore} points )</span>
        </p>
      </div>
      {/* screen--container */}
      <button
        className="btn d-flex mx-auto"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default FinishedScreen;
