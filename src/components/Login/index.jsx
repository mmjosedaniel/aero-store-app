/* eslint-disable react/prop-types */
import React, { useState } from "react";

import "./index.css";

function Login({ setIsUserLogged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = { name: "test", password: "test", email: "test@test.test" };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === user.email && password === user.password) {
      setIsUserLogged(true);
    } else {
      console.log("Incorrect email or password");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder="test@test.test"
          />
        </div>

        <div className="form-group">
          <label>password</label>

          <input
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="test"
          />
        </div>

        <button type="submint">Login</button>
      </form>
    </div>
  );
}

export default Login;
