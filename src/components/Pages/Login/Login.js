import React from "react";
import Illustration from "../../Illustration/Illustration";
import LoginForm from "../../LoginForm/LoginForm";
import "./Login.css";
// import classes from "./Login.css";
export default function Login() {
  return (
    <>
      <h1> Login to your account </h1>
      <div className="column">
        <Illustration> </Illustration>
        <LoginForm></LoginForm>
      </div>
    </>
  );
}
