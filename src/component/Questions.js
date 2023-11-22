import React from "react";
import Options from "./Options";
import AlertBanner from "./AlertBanner";

const Questions = ({
  questions,
  questionIndex,
  answer,
  dispatch,
  points,
  totalPoints,
  alertToggle,
  btnIndex,
  test,
}) => {
  const title = questions.question;

  //
  return (
    <div className="questions">
      <AlertBanner alertToggle={alertToggle} btnIndex={btnIndex} test={test} />

      <h1>
        Question {questionIndex}:
        <span>
          🎉 {points}/{totalPoints}
        </span>
      </h1>
      <p>{title}</p>
      <Options questions={questions} answer={answer} dispatch={dispatch} />
    </div>
  );
};

export default Questions;
