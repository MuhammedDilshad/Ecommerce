import React from "react";
import user from "../../img/user1.png";
import menu from "../../img/menu 1.png";
import cart from "../../img/cart.png";
import { logout } from "../../actions/AuthActions";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

import "./Header.css";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="main">
      <div>
        <h1>ECloths</h1>
      </div>
      <div className="mainContent">
        <span>HOME</span>
        <span>ABOUT</span>
        <span>CONTACT US</span>
      </div>
      <div className="mainContent">
        <button className="btnOne">ORDER HISTORY</button>
        <FiUser className="iconss" />
        <FiShoppingBag className="iconss" />
        <GiHamburgerMenu className="iconss" />
        <button onClick={handleLogout} className="btnTwo">
          SIGN OUT
        </button>
      </div>
    </div>
  );
}
