import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Video from "../Video/Video";
import "./Videos.css";

export default function Videos() {
  return (
    <div className="videos">
      <Link to="/quiz">
        <Video></Video>
      </Link>
      <Link to="/quiz">
        <Video></Video>
      </Link>
      <Link to="/quiz">
        <Video></Video>
      </Link>
      <Link to="/quiz">
        <Video></Video>
      </Link>
    </div>
  );
}
