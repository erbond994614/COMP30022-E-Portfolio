import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = { username: "", password: "" }

    this.handleSignup = this.handleSignup.bind(this)
}

handleSignup(event) {
  event.preventDefault()
  fetch('/api/users/signup', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
  }).then(response => response.json()).then(result => console.log("Client recieved", result))
}

  render() {
    return (

      <div className="container-fluid">
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control" value={this.state.username} onChange={event => this.setState({ username: event.target.value })} placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={this.state.password} onChange={event => this.setState({ password: event.target.value })} placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSignup}>Submit</button>
            </form>

            <p>Already have an account? <a href='login'>Sign in.</a></p>
      </div>

    );
  }
}

export default Register;
