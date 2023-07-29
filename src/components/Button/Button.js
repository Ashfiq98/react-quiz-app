import React from "react";
import "./Button.css";
export default function Button({ className, children, ...rest }) {
  return (
    <button className={`button ${className}`} {...rest}>
      {" "}
      {children}{" "}
    </button>
  );
}
