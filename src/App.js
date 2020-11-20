import React from "react";
import Router from "./router";
// components
import Header from "./components/Header/header";
import Footer from "./components/Footer";

//import Downloads from './components/Downloads';

// includes
import "./Assets/css/default.min.css";

const App = () => {
  return (
    <div className="App">
      <Router Header={Header} Footer={Footer} />
    </div>
  );
};

export default App;
