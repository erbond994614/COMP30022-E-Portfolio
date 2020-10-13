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
            <form onSubmit={handleLogin} onKeyDown={event => {
                if (event.key === 'Enter') {
                    handleLogin(event)
                }
            }}>
                <h3>Login</h3>
                <div className="form-group">
                    <label>Email:</label>
                    <input type='email' className='form-control' value={email} onChange={event => setEmail(event.target.value)} required/>
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type='password' className='form-control' value={password} onChange={event => setPassword(event.target.value)} minLength='6' required/>
                </div>
                
                <button className="btn btn-primary btn-block" type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login