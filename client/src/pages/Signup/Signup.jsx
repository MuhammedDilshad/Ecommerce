import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../actions/AuthActions.js";
import Logos from "../../img/login-illustrator.png";
import "./Signup.css";

function Signup() {
  const [initialValues, setInitValue] = useState({
    email: "",
    password: "",
    mobile: "",
    address: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(initialValues));
  };
  const handleChange = (e) => {
    setInitValue({ ...initialValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="main">
      <div>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div>
            <h4>Create your new account</h4>
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              name="email"
              onChange={handleChange}
              value={initialValues.email}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
              value={initialValues.password}
            />
            <label htmlFor="">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter Number"
              onChange={handleChange}
              value={initialValues.mobile}
            />
            <label htmlFor="">Shipping Address</label>
            <input
              type="text"
              placeholder="Enter your Address"
              name="address"
              onChange={handleChange}
              value={initialValues.address}
            />
            <button>Signup Now</button>
            <hr />
            <button onClick={() => navigate("/")}>Login Now</button>
          </div>
        </form>
      </div>
      <div className="secondMain">
        <img className="LogImg" src={Logos} alt="" />
      </div>
    </div>
  );
}

export default Signup;
