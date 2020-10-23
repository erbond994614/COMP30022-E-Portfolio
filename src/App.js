import React from "react";
import Router from "./router";
import { withRouter } from "react-router-dom";
// components
import Header from "./components/header";
import Footer from "./components/footer";

//import Downloads from './components/Downloads';

// includes
import "./Assets/css/default.min.css";

const App = ({ location }) => {
  // console.log("location.pathname: ", location.pathname);
  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/preview"
  ) {
    return (
      <div className="App">
        <Router Footer={Footer} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Router Header={Header} Footer={Footer} />
      </div>
    );
  }
};

export default withRouter(App);
