import React from "react";
import QuestionSelector from "./QuestionSelector";

const StartScreen = ({ questionNum, dispatch }) => {
  return (
    <div className="start">
      {/* end toast */}
      <h1>AWS Knowledge Quest</h1>
      <h6>
        Select your desired number of quiz questions by using the dropdown menu.
      </h6>
      <p>
        ☁️ | {questionNum} questions
        <span>
          <QuestionSelector dispatch={dispatch} />
        </span>
      </p>
      <button
        type="button"
        className="btn d-flex mx-auto start--btn"
        onClick={() => dispatch({ type: "startQuiz" })}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
