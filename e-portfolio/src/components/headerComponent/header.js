import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Header = () => {
  const auth = useSelector(state => state.userAuth.token)
  return (
    <header>

      <div className="logo">
        INSERT LOGO HERE
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {auth
            ? <li>
                <Link to="logout">Logout</Link>
              </li>
            : <div>
                <li>
                  <Link to="login">Login</Link>
                </li>
                <li>
                  <Link to="register">Register</Link>
                </li>
              </div>
            }
        </ul>
      </nav>

    </header>
  )
}

export default Header;