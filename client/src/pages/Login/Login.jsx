import React, { useState } from "react";
import Logo from "../../img/Frame.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../actions/AuthActions";

import "./Login.css";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(logIn(values));
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="main">
      <div>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <h4>Login into your account</h4>
            <label htmlFor="">Email Address</label>
            <input
              onChange={handleChange}
              placeholder="email"
              required="true"
              name="email"
              type="email"
            />
            <label htmlFor="">Password</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="password"
              required="true"
            />

            <button className="loginButton">Login</button>
            <button className="loginButton" onClick={() => navigate("/signup")}>
              Signup
            </button>
          </div>
        </form>
      </div>
      <div>
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default Login;
