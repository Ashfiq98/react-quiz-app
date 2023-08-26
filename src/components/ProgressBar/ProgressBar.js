import React, { useRef, useState } from "react";
import Button from "../Button/Button";
import "./ProgressBar.css";

export default function ProgressBar({ next, prev, submit, progress }) {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();
  function toggleTooltip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.display = "block";
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
    }
  }

  return (
    <div className="progressBar">
      <div className="backButton" onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className="rangeArea">
        <div className="tooltip" ref={tooltipRef}>
          {progress}% Complete!
        </div>
        <div className="rangeBody">
          <div
            className="progress"
            style={{ width: `${progress}%` }}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
          ></div>
        </div>
      </div>
      {/* <Link to="/result"> */}
      <Button className="next" onClick={progress === 100 ? submit : next}>
        <span>{progress === 100 ? "Submit quiz" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
      {/* </Link> */}
    </div>
  );
}
