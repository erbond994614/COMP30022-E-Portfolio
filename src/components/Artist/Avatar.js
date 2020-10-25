import React,{useState} from 'react';
import AvatarImg from './avatar.svg';
import {updateUserAvatar} from '../../redux/actions/users';
import './Avatar.scss';
import { useDispatch, useSelector } from 'react-redux';
/**
 * Avatar component
 * @param {Object} props 
 */
export default function Avatar(props) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.userAuth.token)
    let avatar = props.avatar ? 'data:image/jpg;base64,'+props.avatar : AvatarImg;
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
        await updateUserAvatar(formData,token,dispatch)
        setUploading(false);
    }

    return (
        <div className="avatar-box" onMouseEnter={() => setUploadShow(true)} onMouseLeave={() => setUploadShow(false)}>
            <div className={`avatar-upload ${uploadShow ? 'show':''}`} onClick={handleUpload}>
                <input type="file" ref={input} onChange={handleChange}></input>
                Upload Avatar
            </div>
            <img src={avatar}></img>
        </div>
    )    
}