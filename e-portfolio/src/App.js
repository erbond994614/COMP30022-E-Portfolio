import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Register from './components/pages/register';
import LoginForm from './components/pages/LoginForm'
import TestPage from './components/pages/TestPage'

// includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

      <Header />

        <Route exact path='/' component={Homepage} />
        <Route exact path='/Login' component={LoginForm} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/dev' component={TestPage} />


      <Footer />



      </div>
      </Router>
    );
  }
}

export default App;
