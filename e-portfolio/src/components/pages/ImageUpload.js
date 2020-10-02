import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage } from '../../redux/actions/images'

const ImageUpload = () => {
    const dispatch = useDispatch()
    const form = React.createRef()
    const userEmail = useSelector(state => state.userAuth.user.email)

    function handleSubmit(event) {
        event.preventDefault()
        var formData = new FormData(form.current)
        formData.set('userEmail', userEmail)
        dispatch(uploadImage(formData))
    }
    
    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input type='file' name='input' required />
            <input type='submit' value='Upload' />
        </form>
    )
}

export default ImageUpload