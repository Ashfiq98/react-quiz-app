import React from "react";
import "./TextInput.css";

export default function TextInput({ type, placeholder, icon }) {
  return (
    <div className="textInput">
      <input type={type} placeholder={placeholder} />

      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
