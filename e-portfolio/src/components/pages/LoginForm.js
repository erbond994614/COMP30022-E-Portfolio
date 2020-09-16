import React from 'react'

//TODO: tranfer from login page to user draft page
class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: "", password: "" }

        this.handleLogin = this.handleLogin.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
    }

    handleLogin(event) {
        event.preventDefault()
        fetch('/api/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then(response => response.json()).then(result => console.log("Client Recieved", result))
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
            <div>
                <label>
                    Username:
                    <input type='text' name="Username" value={this.state.username} onChange={event => this.setState({ username: event.target.value })} />
                    <br></br>
                    Password:
                    <input type='text' name="Password" value={this.state.password} onChange={event => this.setState({ password: event.target.value })} />
                </label>
                <br></br>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleSignup}>Sign Up</button>
            </div>
        )
    }
}

export default LoginForm
