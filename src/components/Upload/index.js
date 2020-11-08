import React,{useState} from 'react';
import './upload.scss';
//import uploadIcon from './upload.svg';
import {ReactComponent as UploadIcon} from './upload.svg'
import {uploadBlog} from '../../redux/actions/users';
import { useDispatch, useSelector } from 'react-redux';
/**
 * blogs file upload component
 * @param {Object} props 
 */
export default function Upload (props) {
    const dispatch = useDispatch();
    const input = React.createRef();
    const token = useSelector(state => state.userAuth.token)
    const [uploading,setUploading] = useState(false);
    const handleClick = () => {
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
        await props.submit(formData,token,dispatch);
        setUploading(false);
    }
    return (
        <div className="upload-box" onClick={handleClick} onChange={handleChange}>
            <UploadIcon className="upload-icon" />
            <input type="file" ref={input} className="upload-file"></input>
        </div>
    )
}