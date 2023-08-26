import React from "react";
import excellent from "../../assets/images/excellent.gif";
import fail from "../../assets/images/fail.gif";
import good from "../../assets/images/good.gif";
import notGood from "../../assets/images/not-good.gif";
import "./Summary.css";

export default function Summary({ score, noq }) {
  return (
    <div className="summary">
      <div className="point">
        <p className="score">
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      <div className="badge">
        {score === 0 ? (
          <img src={fail} alt="fail" />
        ) : score <= 10 ? (
          <img src={notGood} alt="notGood" />
        ) : score >= 10 && score <= 15 ? (
          <img src={good} alt="good" />
        ) : (
          <img src={excellent} alt="excellent" />
        )}
      </div>
    </div>
  );
}
