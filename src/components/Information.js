import React from 'react'
import { useSelector } from 'react-redux'
import history from '../history'

const Information = (props) => {
    const info = useSelector(state => {if (!props.display) return state.userAuth.user.portfolio.info; else return state.portfolio.portfolio.info})
    return (
        <div className='text'>
            {Object.entries(info).map(([key, value]) => {
                return (
                    <div key={key}>
                        {key}: {value}
                    </div>
                )
            })}
            {!props.display ? <button className='editButton' onClick={() => history.push('/info')}>Edit</button> : null}
        </div>
    )
}

export default Information