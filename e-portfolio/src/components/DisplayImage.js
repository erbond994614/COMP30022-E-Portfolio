import React from 'react'
import { useSelector } from 'react-redux'

const DisplayImage = (props) => {
    const image = useSelector(state => state.imageStore.images)[props.imageId]
    console.log(props.imageId)
    console.log(image)

    return (
        <div>
            <img src={image ? "data:image/png;base64," + image.image : ""} alt="failed render" />
        </div>
    )
}

export default DisplayImage