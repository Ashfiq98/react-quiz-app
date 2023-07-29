import React from "react";
import "./Video.css";

export default function Video({ title, id, noq }) {
  return (
    <div className="video">
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p> {title}</p>
      <div className="qmeta">
        <p>{noq} </p>
        <p> Total points : {noq * 5} </p>{" "}
      </div>{" "}
    </div>
  );
}
