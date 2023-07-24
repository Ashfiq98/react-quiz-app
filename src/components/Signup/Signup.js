import React from "react";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Form from "../Form/Form";
import Illustration from "../Illustration/Illustration";
import TextInput from "../TextInput/TextInput";
import classes from "./Signup.css";

export default function Signup() {
  return (
    <>
      <h1>Create an account here...</h1>
      <div className="column">
        <Illustration></Illustration>
        <Form className={`${classes.signup}`}>
          <TextInput
            type="text"
            placeholder="Enter Name"
            icon="person"
          ></TextInput>

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

          <TextInput
            type="text"
            placeholder="Confirm password"
            icon="lock_clock"
          ></TextInput>

          <Checkbox text="I agree to the Terms & Conditions"></Checkbox>

          <Button> Register </Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
