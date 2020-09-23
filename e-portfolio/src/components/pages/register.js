import React, { Component } from 'react';
import {studentTemplate} from '../Template/templates'
import {Redirect} from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = { email: "", password: "", template: "student", redirect: false}

    this.handleSignup = this.handleSignup.bind(this)
}

async handleSignup(event) {
  event.preventDefault()
  if (this.state.template === 'student') {
    await this.setState({portfolio: studentTemplate})
  } else {

  }
  console.log(this.state)
  fetch('/api/users/signup', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
  }).then(response => response.json()).then(result => {
    if (result.portfolio) {
      this.setState({redirect: true})
    } else {
      console.log(result)
    }
  })
}

  render() {
    return (

      <div className="container-fluid">
            <form onSubmit={this.handleSignup}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" value={this.state.email} onChange={event => this.setState({ email: event.target.value })} placeholder="Enter Email" required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={this.state.password} onChange={event => this.setState({ password: event.target.value })} placeholder="Enter password" minLength='6' required/>
                </div>

                <div className="form-group">
                    <label>I Am</label>
                    <select id='template' className='form-control' value={this.state.template} onChange={event => this.setState({template: event.target.value})} >
                      <option value='student'>A Student</option>
                      <option value='artist'>An Artist</option>
                      <option value='professional'>A Professional</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>

            <p>Already have an account? <a href='login'>Sign in.</a></p>
            {/*{this.state.redirect ? (<Redirect push to='/portfolio' />) : null}*/}
      </div>

    );
  }
}

export default Register;
