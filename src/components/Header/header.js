import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./header.scss";

const Header = () => {
  const auth = useSelector((store) => store.userAuth.token);
  const user = useSelector((store) => store.userAuth && store.userAuth.user);
  return (
    <header className="header">
      <div className="logo-box">
        <img src={Logo} alt="logo"></img>
      </div>
      <div className="home-index">
        <Link to="/">ePortfolio</Link>
      </div>
      <div className="right-nav">
        <nav>
          <ul>
            {auth ? (
              <li>
                <Link to="logout">Logout</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="login">Sign In</Link>
                </li>
                <li>
                  <Link to="register">Register</Link>
                </li>
              </>
            )}
            {auth && user.role === "artist" ? (
              <li>
                <Link to="artist">Artist</Link>
              </li>
            ) : null}
            {auth && user.role === "professional" ? (
              <li>
                <Link to="professional">Professional</Link>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
