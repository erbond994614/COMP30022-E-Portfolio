import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../redux/actions/users";

import ".././Assets/css/login.min.css";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    dispatch(login({ email, password }));
  }

  return (
    <div className="container">
      <form
        onSubmit={handleLogin}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleLogin(event);
          }
        }}
      >
        <h3>Welcome Back</h3>
        <h4>Sign in to update your ePortfolio</h4>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength="6"
            required
          />
        </div>

        <button className="btn btn-primary btn-block" type="submit">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register.</Link>
      </p>
      <p>
        Forget your password? <Link to="/resetPass">Forget Password.</Link>
      </p>
    </div>
  );
};

export default Login;
