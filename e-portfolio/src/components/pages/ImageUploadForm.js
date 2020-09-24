import React from 'react'
import { useDispatch } from 'react-redux'

const ImageUpload = () => {
    const dispatch = useDispatch()
    const form = React.createRef()

    function handleSubmit(event) {
        event.preventDefault()
        // TODO: dispatch(uploadimage(new FormData(form.current)))
        /*fetch('/api/images/upload', {
            method: 'POST',
            body: new FormData(this.form.current)
        }).then(response => response.json()).then(result => console.log(result))*/
    }
    
    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input type='file' name='input' required />
            <input type='submit' value='Upload' />
        </form>
    )
}

export default ImageUpload