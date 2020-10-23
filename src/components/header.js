import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const auth = useSelector((state) => state.userAuth.token);
  return (
    <header>
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
              <li>
                <Link to="dev">TestPage</Link>
              </li>
              <li>
                <Link to="downloads">Downloads</Link>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
