import React from 'react'

//TODO: tranfer from login page to user draft page
class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: "", password: "" }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        fetch('/api/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: this.state.username, password: this.state.password })
        }).then(response => response.json()).then(result => console.log("Client Recieved", result))
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type='text' name="Username" value={this.state.username} onChange={event => this.setState({ username: event.target.value })} />
                    Password:
                    <input type='text' name="Password" value={this.state.password} onChange={event => this.setState({ password: event.target.value })} />
                </label>
                <input type='submit' value="Login" />
            </form>
        )
    }
}

export default LoginForm