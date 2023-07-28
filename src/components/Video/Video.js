import React from "react";
import image from "../../assets/images/3.png";
import "./Video.css";

export default function Video() {
  return (
    <div className="video">
      <img src={image} alt="Video title" />
      <p p> #1 ► Documentary : The history of Fc Barcelona ! ✦ 1899-2021. </p>
      <div className="qmeta">
        <p> 10 Questions </p> <p> Score: Not taken yet </p>{" "}
      </div>{" "}
    </div>
  );
}
