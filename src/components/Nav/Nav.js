import React from "react";
import logo from "../../assets/images/logo-bg.png";
import Account from "../Account/Account";
import "./Nav.css";
export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="index.html" className="brand">
            <img src={logo} alt="Ashfiq98" />
            <h3>Ashfiq 98</h3>
          </a>
        </li>
      </ul>
      <Account></Account>
    </nav>
  );
}
