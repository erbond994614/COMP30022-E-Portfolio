import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/users'

const Logout = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.userAuth.token)

    function handleLogout(event) {
        dispatch(logout(token))
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default Logout