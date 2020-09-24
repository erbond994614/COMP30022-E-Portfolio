import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const FetchImage = () => {
    const dispatch = useDispatch()
    const [image, setImage] = useState("")

    // TODO: dispatch(fetchImage(image))
    /*fetch(`/api/images/${props.imageName}`, {
        method: 'GET',
    }).then(response => response.json()).then(result => {
        this.setState({image: result.image})
    })*/

    return (
        <div>
            <img src={"data:image/png;base64," + image} alt="failed render" />
        </div>
    )
}

export default FetchImage