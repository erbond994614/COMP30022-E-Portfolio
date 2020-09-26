import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updatePortfolio } from '../../../redux/actions/users'
import history from '../../../history'

const StudentInformation = () => {
    const dispatch = useDispatch()
    const portfolio = useSelector(state => state.userAuth.user.portfolio)
    const userEmail = useSelector(state => state.userAuth.user.email)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [major, setMajor] = useState("")
    const [aboutMe, setAboutMe] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        var newPortfolio = portfolio
        newPortfolio.name = firstName + " " + lastName
        newPortfolio.info = `Name: ${firstName} ${lastName}\r\nAge: ${age}\r\nMajor: ${major}`
        dispatch(updatePortfolio(userEmail, newPortfolio))
        history.push('/portfolio')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Edit your portfolio</h3>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" value={firstName} onChange={event => setFirstName(event.target.value)} placeholder="First Name" />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" value={lastName} onChange={event => setLastName(event.target.value)} placeholder="Last Name" />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" value={age} onChange={event => setAge(event.target.value)} placeholder="Age" />
                </div>
                <div className="form-group">
                    <label>Major</label>
                    <input type="text" className="form-control" value={major} onChange={event => setMajor(event.target.value)} placeholder="Major" />
                </div>

                <div className="form-group">
                    <label>About Me</label>
                    <input type="text" className="form-control" value={aboutMe} onChange={event => setAboutMe(event.target.value)} placeholder="About Me" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Save</button>
                <button type="reset" className="btn btn-primary btn-block" >Discard Changes</button>
        </form>
    )
}



export default StudentInformation;
