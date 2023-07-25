import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-bg.png";
import Account from "../Account/Account";
import "./Nav.css";
export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="brand">
            <img src={logo} alt="Ashfiq98" />
            <h3>Ashfiq 98</h3>
          </Link>
        </li>
      </ul>
      <Account></Account>
    </nav>
  );
}
