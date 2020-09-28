import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions/users'

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(event) {
        event.preventDefault()
        dispatch(login({email, password}))
    }

    return (
        <div className='container-fluid'>
            <h3>Login</h3>
            <div className="form-group">
                <label>Email:</label>
                <input type='email' className='form-control' value={email} onChange={event => setEmail(event.target.value)} />
            </div>

            <div className="form-group">
                <label>Password:</label>
                <input type='password' className='form-control' value={password} onChange={event => setPassword(event.target.value)} onKeyDown={event => {
                    if (event.key === 'Enter') {
                        handleLogin(event)
                    }
                }}/>
            </div>
            
            <button className="btn btn-primary btn-block" type='submit' onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login