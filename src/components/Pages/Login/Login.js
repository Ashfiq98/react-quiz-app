import React from "react";
import please from "../../../assets/images/please.gif";
import Button from "../../Button/Button";
import Form from "../../Form/Form";
import Illustration from "../../Illustration/Illustration";
import TextInput from "../../TextInput/TextInput";
import "./Login.css";
// import classes from "./Login.css";
export default function Login() {
  return (
    <>
      <h1> Login to your account </h1>{" "}
      <div className="column">
        <Illustration> </Illustration>{" "}
        <Form className="login">
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          ></TextInput>
          <TextInput
            type="text"
            placeholder="Enter password"
            icon="lock"
          ></TextInput>
          {/* <Checkbox text="I agree to the Terms & Conditions"></Checkbox> */}
          <Button>
            {" "}
            <span>Login</span>Login{" "}
          </Button>
          <div className="info">
            Don 't have an account? <a href="signup.html">Register</a> instead.{" "}
          </div>{" "}
          <div className="please">
            <img src={please} alt="" />
          </div>{" "}
        </Form>{" "}
      </div>{" "}
    </>
  );
}
