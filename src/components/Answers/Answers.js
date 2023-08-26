import React, { Fragment } from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./Answers.css";

export default function Answers({ options = [], handleChange, input }) {
  return (
    <div className="answers">
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              key={index}
              className="answer"
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            ></Checkbox>
          ) : (
            <Checkbox
              className={`answer ${
                option.correct ? "correct" : option.checked ? "wrong" : null
              }`}
              text={option.title}
              defaultChecked={option.checked}
              disabled
            ></Checkbox>
          )}
        </Fragment>
      ))}
    </div>
  );
}
