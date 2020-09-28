import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage } from '../../redux/actions/images'

const ImageUpload = () => {
    const dispatch = useDispatch()
    const form = React.createRef()
    const token = useSelector(state => state.userAuth.token)

    function handleSubmit(event) {
        event.preventDefault()
        var formData = new FormData(form.current)
        dispatch(uploadImage(formData, token))
    }
    
    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input type='file' name='input' required />
            <input type='submit' value='Upload' />
        </form>
    )
}

export default ImageUpload