import React from "react";

const AlertBanner = ({ alertToggle, btnIndex, test }) => {
  return (
    <div className="alert--banner">
      {alertToggle !== null ? (
        btnIndex === test ? (
          <div className="correct">
            <h6>
              <img
                src="./accept.png"
                className="img-fluid alert--icon"
                alt="alert--icon"
              />
              Good Job!
            </h6>
            <p>Impressive! You've got the correct answer. Keep it up!</p>
          </div>
        ) : (
          <div className="wrong">
            <h6>
              <img
                src="./warning.png"
                className="img-fluid alert--icon"
                alt="alert--icon"
              />
              Incorrect answer
            </h6>
            <p>Close, but not quite. Keep going, you'll get it!</p>
          </div>
        )
      ) : null}
    </div>
  );
};

export default AlertBanner;
