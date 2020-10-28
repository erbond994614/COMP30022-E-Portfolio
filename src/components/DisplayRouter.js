import React from 'react'
import { useDispatch } from 'react-redux'
import { downloadPortfolio } from '../redux/actions/portfolio'

const DisplayRouter = (props) => {
    const dispatch = useDispatch()
    dispatch(downloadPortfolio(props.params.id))
    return <h2>Loading...</h2>
}

export default DisplayRouter