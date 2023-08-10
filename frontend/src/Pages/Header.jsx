// Header.js
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        {" "}
        <div class="logo">
          <img src={process.env.PUBLIC_URL + "/Chartology.png"} alt="Logo" />
        </div>
      </Link>

      <ul>
        <li className="homebutton">
          <Link to="/">Home</Link>
        </li>
        <li className="technologyUsedbutton">
          <Link to="/technologyused">Technology-Used</Link>
        </li>
        <li className="aboutMEbutton">
          <Link to="/aboutme">AboutMe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
