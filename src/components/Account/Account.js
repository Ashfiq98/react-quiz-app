import React from "react";
import "./Account.css";

export default function Account() {
  return (
    <div className="account">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"
        rel="stylesheet"
      />

      <i className="material-icons-outlined" title="Account">
        account_circle
      </i>
      <a href="signup.html">Signup</a>
      {/* <!-- <span className="material-icons-outlined" title="Logout"> logout </span> --> */}
    </div>
  );
}
