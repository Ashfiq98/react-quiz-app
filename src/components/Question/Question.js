import React from "react";
import Answers from "../Answers/Answers";
import "./Question.css";

export default function Question() {
  return (
    <div className="question">
      <div className="qtitle">
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers></Answers>
    </div>
  );
}
