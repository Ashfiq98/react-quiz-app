import React from "react";
import Illustration from "../../Illustration/Illustration";
import SignupForm from "../../SignupForm/SignupForm";

export default function Signup() {
  return (
    <>
      <h1>Create an account here...</h1>
      <div className="column">
        <Illustration></Illustration>
        <SignupForm></SignupForm>
      </div>
    </>
  );
}
