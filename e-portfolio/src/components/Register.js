import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {studentTemplate, artistTemplate, professionalTemplate} from './Template/templates'
import { signup } from '../redux/actions/users'

const Register = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [portfolio, setPortfolio] = useState(studentTemplate)

  function handleSignup (event) {
    event.preventDefault()
    dispatch(signup({email, password, portfolio}))
  }

  return (
    <div className="container-fluid">
      <form onSubmit={handleSignup}>
        <h3>Register</h3>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={event => setEmail(event.target.value)} placeholder="Enter Email" required/>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={event => setPassword(event.target.value)} placeholder="Enter password" minLength='6' required/>
        </div>

        <div className="form-group">
          <label>I Am</label>
          <select id='portfolio' className='form-control' onChange={event => {
            if (event.target.value === "student") {
              setPortfolio(studentTemplate)
            } else if (event.target.value === 'artist') {
              setPortfolio(artistTemplate)
            } else if (event.target.value === 'professional') {
              setPortfolio(professionalTemplate)
            }
          }} >
            <option value='student'>A Student</option>
            <option value='artist'>An Artist</option>
            <option value='professional'>A Professional</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>

      <p>Already have an account? <Link to='login'>Sign in.</Link></p>
    </div>
  )
}

export default Register