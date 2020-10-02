import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updatePortfolio } from '../../../redux/actions/users'
import history from '../../../history'
import { studentTemplate } from '../../Template/templates'

const StudentInformation = () => {
    const dispatch = useDispatch()
    const userEmail = useSelector(state => state.userAuth.user.email)
    var portfolio = useSelector(state => state.userAuth.user.portfolio)

    if (!portfolio) {
        portfolio = studentTemplate
    }

    const [firstName, setFirstName] = useState(portfolio.firstName)
    const [lastName, setLastName] = useState(portfolio.lastName)
    const [age, setAge] = useState(portfolio.age)
    const [major, setMajor] = useState(portfolio.major)
    const [aboutMe, setAboutMe] = useState(portfolio.aboutMe)

    // modified here to keep data flow consistent
    function handleSubmit(event) {
        event.preventDefault()
        
        var newPortfolio = portfolio
        newPortfolio.firstName = firstName
        newPortfolio.lastName = lastName
        newPortfolio.age = age
        newPortfolio.major = major
        newPortfolio.info = `Name: ${firstName} ${lastName}\r\nAge: ${age}\r\nMajor: ${major}`

        dispatch(updatePortfolio(userEmail, newPortfolio))
        history.push('/portfolio')
    }

    // reset func
    function handleReset(event) {
        event.preventDefault()
        history.goBack()
    }

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
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
