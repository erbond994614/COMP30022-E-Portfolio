import React from "react";
import Router from "./router";
// components
import Header from "./components/header";
import Footer from "./components/footer";

//import Downloads from './components/Downloads';

// includes
import "./Assets/css/default.min.css";

const App = () => {
  if (
    window.location.pathname === "/login" ||
    window.location.pathname === "/register"
  ) {
    return (
      <div className="App">
        <Router />
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
};

export default App;
