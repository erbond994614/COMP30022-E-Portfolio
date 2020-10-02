import React from 'react'
import { useSelector } from 'react-redux'

const FetchImage = (props) => {
    const image = useSelector(state => state.imageStore.images)[props.imageId]

    return (
        <div>
            <img src={image ? "data:image/png;base64," + image.image : ""} alt="failed render" />
        </div>
    )
}

export default FetchImage