import React from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./Answers.css";

export default function Answers({ options = [], handleChange }) {
  return (
    <div className="answers">
      {options.map((option, index) => (
        <Checkbox
          className="answer"
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
        ></Checkbox>
      ))}
    </div>
  );
}
