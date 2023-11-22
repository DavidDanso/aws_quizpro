import React from "react";

const Options = ({ questions, answer, dispatch }) => {
  const hasAnswered = answer !== null;

  //
  return (
    <div className="options">
      {questions.options.map((option, index) => (
        <button
          disabled={hasAnswered}
          className={`btn btn-option ${index === answer ? "answer" : ""}`}
          key={option}
          onClick={() => dispatch({ type: "questionIndex", payload: index })}
        >
          {option}
        </button>
      ))}
      {/* end option */}
    </div>
  );
};

export default Options;
