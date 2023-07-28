import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
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

  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // console.log(e.target.username.value);
    if (password != confirmPassword) {
      return setError("Password's didn't match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Failed to create an account");
    }
  }

  return (
    <Form className={`${classes.signup}`} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        name="username"
        required
        placeholder="Enter Name"
        icon="person"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></TextInput>

      <TextInput
        type="text"
        required
        name="email"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextInput>

      <TextInput
        type="password"
        name="password"
        required
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextInput>

      <TextInput
        type="password"
        required
        name="confirmPassword"
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></TextInput>

      <Checkbox
        text="I agree to the Terms & Conditions"
        required
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
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
