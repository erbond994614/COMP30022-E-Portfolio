import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from '../logo.png'

const Header = () => {
  const auth = useSelector((store) => store.userAuth.token);
  const user = useSelector((store) => store.userAuth && store.userAuth.user);
  return (
    <header>
      <div className="logo-box">
          <img src={Logo} alt="logo"></img>
      </div>
      <div className="logo">
        <Link to="/">ePortfolio</Link>
      </div>

      <nav>
        <ul>
          {auth ? (
            <div>
              <li>
                <Link to="logout">Logout</Link>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link to="login">Sign In</Link>
              </li>
              <li>
                <Link to="register">Register</Link>
              </li>
            </div>
          )}
          {
            auth && user.role === "artist" ? (
              <li>
                <Link to="artist">Artist</Link>
              </li>
            ): null
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
