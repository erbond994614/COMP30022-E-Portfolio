import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updatePortfolio } from '../redux/actions/users'
import history from '../history'

const StudentInformation = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userAuth.user)
    const token = useSelector(state => state.userAuth.token)

    const [info, setInfo] = useState(user.portfolio.info)
    const [newField, setNewField] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        const newPortfolio = JSON.parse(JSON.stringify(user.portfolio)) // deep copy because of redux immutability
        newPortfolio.info = info
        dispatch(updatePortfolio(newPortfolio, token))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Edit your portfolio</h3>
                <div className="form-group">
                    {Object.keys(info).map((key) => {
                        return (
                            <div key={key}>
                                <label>
                                    {key}
                                </label>
                                <input type='text' className='form-control' value={info[key]} onChange={event => {const newValue = event.target.value; setInfo((state) => {
                                    const newState = JSON.parse(JSON.stringify(state))
                                    newState[key] = newValue
                                    return newState})}} placeholder={`Enter ${key} Here`}/>
                                <button className='btn btn-primary btn-block' onClick={event => {event.preventDefault(); setInfo(state => {
                                    const newState = JSON.parse(JSON.stringify(state))
                                    delete newState[key]
                                    return newState
                                })}} >Remove Field</button>
                                <br/>
                            </div>
                        )
                    })}
                    <label>New Field Title:</label>
                    <input type='text' className='form-control' value={newField} onChange={event => setNewField(event.target.value)} placeholder='Enter title of new field'/>
                    <button className='btn btn-secondary btn-block' onClick={(event) => {event.preventDefault(); setInfo(state => {
                        const newState = JSON.parse(JSON.stringify(state))
                        newState[newField] = ''
                        return newState})}}>Add New Field</button>
                    <br/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Save</button>
                <button type="reset" className="btn btn-primary btn-block" onClick={(event) => history.push('/portfolio')}>Discard Changes</button>
        </form>
    )
}



export default StudentInformation;
