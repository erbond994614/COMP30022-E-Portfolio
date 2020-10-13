import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updatePortfolio } from '../redux/actions/users'
import history from '../history'

const StudentInformation = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userAuth.user)
    const token = useSelector(state => state.userAuth.token)

    const [name, setName] = useState(user.portfolio.info.name)
    const [age, setAge] = useState(user.portfolio.info.age)
    const [major, setMajor] = useState(user.portfolio.info.major)

    function handleSubmit(event) {
        event.preventDefault()
        const newPortfolio = JSON.parse(JSON.stringify(user.portfolio)) // deep copy because of redux immutability
        newPortfolio.info.name = name
        newPortfolio.info.age = age
        newPortfolio.info.major = major
        dispatch(updatePortfolio(newPortfolio, token))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Edit your portfolio</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" value={name} onChange={event => setName(event.target.value)} placeholder="Name" />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" value={age} onChange={event => setAge(event.target.value)} placeholder="Age" />
                </div>
                <div className="form-group">
                    <label>Major</label>
                    <input type="text" className="form-control" value={major} onChange={event => setMajor(event.target.value)} placeholder="Major" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Save</button>
                <button type="reset" className="btn btn-primary btn-block" onClick={(event) => history.push('/portfolio')}>Discard Changes</button>
        </form>
    )
}



export default StudentInformation;
