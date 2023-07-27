import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Form from "../Form/Form";
import classes from "../Pages/Signup/Signup.css";
import TextInput from "../TextInput/TextInput";
import "./SignupForm.css";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form className={`${classes.signup}`} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        name="username"
        required
        placeholder="Enter Name"
        icon="person"
        // value={username}
        // onChange={(e) => setUsername(e.target.value)}
      ></TextInput>

      <TextInput
        type="text"
        required
        name="email"
        placeholder="Enter email"
        icon="alternate_email"
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
      ></TextInput>

      <TextInput
        type="password"
        name="password"
        required
        placeholder="Enter password"
        icon="lock"
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
      ></TextInput>

      <TextInput
        type="password"
        required
        name="confirmPassword"
        placeholder="Confirm password"
        icon="lock_clock"
        // value={confirmPassword}
        // onChange={(e) => setConfirmPassword(e.target.value)}
      ></TextInput>

      <Checkbox
        text="I agree to the Terms & Conditions"
        required
        // value={agree}
        // onChange={(e) => setAgree(e.target.value)}
      ></Checkbox>

      <Button disabled={loading} type="submit">
        {" "}
        <span>Register</span>{" "}
      </Button>

      {error && <p className="error"> {error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};
export default SignupForm;
