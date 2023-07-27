import React from "react";
import "./TextInput.css";

export default function TextInput({ type, placeholder, name, icon }) {
  return (
    <div className="textInput">
      <input type={type} placeholder={placeholder} name={name} />

      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
