import React from 'react'
import { useSelector } from 'react-redux'

const Preview = () => {
    const id = useSelector(state => state.userAuth.user._id)
    return (
        <>
            <button
                type="button"
                onClick={() => window.open(`/display/${id}`, '_blank')}
                className="btn btn-secondary btn-block"
            >
                Preview
            </button>
            <h4>Your Display Link is http://{window.location.hostname}/display/{id}</h4>
        </>
    )
}

export default Preview