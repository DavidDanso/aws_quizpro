import React from "react";
import Timer from "./Timer";

const Footer = ({
  questionNum,
  dispatch,
  questionIndex,
  answer,
  btnIndex,
  displayBtn,
  index,
  secondsLeft,
}) => {
  const hasAnswered = answer !== null;

  // const check = displayBtn === true and index < questionNum -1

  //
  return (
    <div className="footer">
      <Timer secondsLeft={secondsLeft} dispatch={dispatch} />
      {/* end timer */}
      <hr className="line--divider" />
      <div className="footer--banner">
        <h6>
          Question {questionIndex} 0f {questionNum}
        </h6>

        <div className="btn--actions">
          {displayBtn ? (
            <button
              disabled={hasAnswered ? false : true}
              className="btn left--btn"
              onClick={() => dispatch({ type: "newAnswer", payload: btnIndex })}
            >
              Check Answer
            </button>
          ) : index < questionNum - 1 ? (
            <button
              className="btn"
              onClick={() => dispatch({ type: "nextQuestion" })}
            >
              Next Question
            </button>
          ) : (
            <button
              className="btn"
              onClick={() => dispatch({ type: "finishQuiz" })}
            >
              See Results ▶️
            </button>
          )}
        </div>
        {/* end btn--actions */}
      </div>
      {/* end footer--banner */}
    </div>
  );
};

export default Footer;
