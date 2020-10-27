import React from "react";
import Router from "./router";
import history from './history';
// components
import Header from "./components/Header/header";
import Footer from "./components/footer";

//import Downloads from './components/Downloads';

// includes
import "./Assets/css/default.min.css";

const App = () => {
  if (
    history.location.pathname === "/login" ||
    history.location.pathname === "/register" ||
    history.location.pathname === "/display"
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

export default App;
