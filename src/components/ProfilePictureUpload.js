import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadProfilePicture } from '../redux/actions/users'

const ProfilePictureUpload = () => {
    const dispatch = useDispatch()
    const form = React.createRef()
    const token = useSelector(state => state.userAuth.token)

    async function handleSubmit(event) {
        event.preventDefault()
        dispatch(uploadProfilePicture(new FormData(form.current), token))
    }

    /* <form onSubmit={handleSubmit} ref={form}>
        <input
            onChange={changeHandler}
            allow=".pdf/*, image/*, .ppt/*"
            type="file"
            name="input"
            required
        />
        <input type="submit" value="Upload" />
    </form> */

    return (
        <form onSubmit={handleSubmit} ref={form}>
            <input type="file" accept='image/*' name="input" required />
            <input type='submit' value='Upload'/>
        </form>    
    )
}

export default ProfilePictureUpload