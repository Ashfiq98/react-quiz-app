import React from "react";
import Answers from "../../Answers/Answers";
import MiniPlayer from "../../MiniPlayer/MiniPlayer";
import ProgressBar from "../../ProgressBar/ProgressBar";
import "./Quiz.css";
export default function Quiz() {
  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers></Answers>
      <ProgressBar></ProgressBar>
      <MiniPlayer></MiniPlayer>
    </>
  );
}
