import React from 'react'
import { useSelector } from 'react-redux'

const DownloadFile = (props) => {
    const file = useSelector(state => state.imageStore.images)[props.fileId]

    return (
        <div>
            <a download={file.name} href={image ? "data:image/png;base64," + file.data : ""} >{file.name}</a>
        </div>
    )
}

export default DownloadFile