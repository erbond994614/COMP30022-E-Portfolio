import React from "react";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";

function ViewPortfolio() {
  const history = useHistory();

  function handleClick() {
    history.push("/portfolio");
  }

  return (
    <Button
      color="primary"
      onClick={handleClick}
      startIcon={<AccountCircleIcon />}
    >
      View Portfolio
    </Button>
  );
}

export default ViewPortfolio;
