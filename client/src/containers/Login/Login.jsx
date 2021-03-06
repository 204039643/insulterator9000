import React, { useState } from "react";
import "./Login.css";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/login", { email, password })
      .then((response) => {
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("sport", response.data.sport);
        localStorage.setItem("occupation", response.data.occupation);
        localStorage.setItem("hobby", response.data.hobby);
        console.log(response);
        setToken(response.data.token);
        history.push("/dashboard");
      })
      .catch((err) => {
        alert("Email or password incorrect, please re-enter!");
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Sign in to be INSULERATED!</h1>
      </div>
      <div className="row">
        <form className="col s12" id="login-form" onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="input-field col offset-s2 s8">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="icon_prefix"
                type="email"
                className="validate"
                value={email}
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="icon_prefix">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col offset-s2 s8">
              <i className="material-icons prefix">filter_vintage</i>
              <input
                id="password"
                type="password"
                className="validate"
                value={password}
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="row" id="button-row">
            <div className="col s4">
              <Link
                className="btn waves-effect waves-light hoverable"
                type="submit"
                name="action"
                to="/registration"
              >
                Register
              </Link>
            </div>
            <div className="col s4">
              <h3> -OR- </h3>
            </div>
            <button className="btn waves-effect waves-light hoverable">
              Sign in!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
