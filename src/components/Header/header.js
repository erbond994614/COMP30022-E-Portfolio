import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./header.scss";
import { Button, Avatar, IconButton, MenuItem, Menu } from "@material-ui/core";
import Logout from "../Logout";
import ViewPortfolio from "../ViewPortfolio";
import DefaultAvatar from "../Template/avatar.png";

const Header = () => {
  const auth = useSelector((store) => store.userAuth.token);
  const user = useSelector((store) => store.userAuth && store.userAuth.user);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header">
      <div className="home-index">
        <Button color="primary" component={Link} to="/">
          <img className="logo-box" src={Logo} alt="logo"></img>
          <h2>E-Portfolio</h2>
        </Button>
      </div>
      <div className="right-nav">
        <nav>
          <ul>
            {auth ? (
              <>
                {/* <IconButton
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  children={}
                  size="small"
                ></IconButton> */}
                <IconButton
                  onClick={handleClick}
                  children={
                    user.portfolio.profilePicture ? (
                      <Avatar
                        src={`data:${user.portfolio.profilePicture.mimetype};base64,${user.portfolio.profilePicture.data}`}
                        // Edit alignment properties here
                        style={{
                          width: 75,
                          height: 75,
                        }}
                      />
                    ) : (
                      <Avatar
                        src={DefaultAvatar}
                        // Edit alignment properties here
                        style={{
                          width: 75,
                          height: 75,
                        }}
                      />
                    )
                  }
                ></IconButton>
                <Menu
                  id="simple-menu"
                  style={{ marginTop: "84px" }}
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem
                    style={{ margin: "500px" }}
                    component={ViewPortfolio}
                    // to="/portfolio"
                    onClick={handleClose}
                  ></MenuItem>
                  <br />
                  <MenuItem
                    style={{ margin: "500px" }}
                    component={React.forwardRef(Logout)}
                    onClick={handleClose}
                  ></MenuItem>
                </Menu>
              </>
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
