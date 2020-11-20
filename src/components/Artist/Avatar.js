import React,{useState} from 'react';
import AvatarImg from '../Template/avatar.png';
import {uploadProfilePicture} from '../../redux/actions/users';
import './Avatar.scss';
import { useDispatch, useSelector } from 'react-redux';
/**
 * Avatar component
 * @param {Object} props 
 */
export default function Avatar(props) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.userAuth.token)
    const avatar = useSelector(state => state.userAuth.user.portfolio.profilePicture)
    const input = React.createRef();
    const [uploadShow,setUploadShow] = useState(false);
    const [uploading,setUploading] = useState(false);

    const handleUpload = () => {
        if(!uploading){
            input.current.click();
        }
    }

    /**
     * input change event handler 
     * @param {Event} e 
     */
    const handleChange = async (e) => {
        setUploading(true);
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append('input',file)
        input.current.value = null;
        dispatch(uploadProfilePicture(formData,token))
        setUploading(false);
    }

    return (
        <div className="avatar-box" onMouseEnter={() => setUploadShow(true)} onMouseLeave={() => setUploadShow(false)}>
            <div className={`avatar-upload ${uploadShow ? 'show':''}`} onClick={handleUpload}>
                <input type="file" ref={input} onChange={handleChange}></input>
                Upload Avatar
            </div>
            {avatar
                ? <img src={`data:${avatar.mimetype};base64,${avatar.data}`} alt="avatar" />
                : <img src={AvatarImg} alt='avatar' />
            }
        </div>
    )    
}