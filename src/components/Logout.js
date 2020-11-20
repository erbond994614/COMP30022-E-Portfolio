import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/users";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Logout = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userAuth.token);

  function handleLogout(event) {
    event.preventDefault();
    dispatch(logout(token));
  }

  return (
    <Button
      color="primary"
      onClick={handleLogout}
      startIcon={<ExitToAppIcon />}
    >
      Logout
    </Button>

    // <button className='btn btn-primary btn-block' onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
