import _ from "lodash";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../../Hooks/useAnswers";
import Analysis from "../../Analysis/Analysis";
import Summary from "../../Summary/Summary";
import "./Result.css";

export default function Result() {
  const { id } = useParams();
  console.log("ID : " + id);
  const { state } = useLocation(); // it directly return a state
  // const { state } = location;

  const { qna } = state;

  const { loading, error, answers } = useAnswers(id);
  // console.log(answers);

  function calculate() {
    let score = 0;
    answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];
      let obj = question.options;
      // console.log(obj);
      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);

        const insideOption = qna[index1].options[index2];
        // console.log("Option : " + option);
        // console.log(insideOption);
        if (insideOption.checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score += 5;
      }
    });
    // console.log(score);
    return score;
  }

  const userScore = calculate();

  return (
    <>
      {" "}
      {loading && <div> Loading... </div>}{" "}
      {error && <div> There was an error! </div>}
      {answers && (
        <>
          {" "}
          <Summary score={userScore} noq={answers.length}>
            {" "}
          </Summary>{" "}
          <Analysis answers={answers}> </Analysis>{" "}
        </>
      )}{" "}
    </>
  );
}
