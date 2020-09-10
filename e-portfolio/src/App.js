import React from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './components/LoginForm'

function buttonTest() {
  fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: 'Admin', password: 'password' })
  }).then(response => response.json()).then(result => console.log("Client recieved ", result))
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={buttonTest}>Test Button</button>
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
