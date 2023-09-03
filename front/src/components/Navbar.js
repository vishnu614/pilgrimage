import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
      <li>
          <Link to="/register">SIGNUP</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link to="/otp">OTP LOGIN</Link>
        </li>
        <li>
          <Link to="/">LOGOUT</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
