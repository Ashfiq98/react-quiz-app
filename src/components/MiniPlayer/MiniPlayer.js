import React from "react";
import miniPlayerImage from "../../assets/images/3.png";
import "./MiniPlayer.css";

export default function MiniPlayer() {
  return (
    <div className="miniPlayer floatingBtn">
      <span className="material-icons-outlined open"> play_circle_filled </span>
      <span className="material-icons-outlined close"> close </span>
      <img src={miniPlayerImage} alt="Alt tag" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}
