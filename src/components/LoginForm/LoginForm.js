import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import please from "../../assets/images/please.gif";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../Button/Button";
import Form from "../Form/Form";
import TextInput from "../TextInput/TextInput";
import "./LoginForm.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //   if (password != confirmPassword) {
    //     return setError("Password's didn't match");
    //   }
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Invalid email or password. Please, try again!!!!");
    }
  }

  return (
    <Form className="login" onSubmit={handleSubmit}>
      <TextInput
        type="text"
        name="email"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextInput>
      <TextInput
        type="password"
        name="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextInput>
      {/* <Checkbox text="I agree to the Terms & Conditions"></Checkbox> */}
      <Button disabled={loading} type="submit">
        <span>Login</span>
      </Button>

      {error && <p className="error"> {error}</p>}

      <div className="info">
        Don 't have an account? <Link to="/signup">create an account</Link>{" "}
        instead.
      </div>
      <div className="please">
        <img src={please} alt="" />
      </div>
    </Form>
  );
}
