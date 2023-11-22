import React from "react";

const QuestionSelector = ({ dispatch }) => {
  const handleQuestionNumber = (number) => {
    dispatch({ type: "qustNumber", payload: number });
  };

  return (
    <div className="dropdown mb-5">
      <button
        className="btn btn-secondary dropdown-toggle dropdown--btn"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Questions
      </button>

      <ul className="dropdown-menu">
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => handleQuestionNumber(5)}
          >
            5
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => handleQuestionNumber(8)}
          >
            8
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => handleQuestionNumber(12)}
          >
            12
          </button>
        </li>
      </ul>
    </div>
  );
};

export default QuestionSelector;
