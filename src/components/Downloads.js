import React from 'react'
import { useSelector } from 'react-redux'
import DisplayFile from './DisplayFile'
import FileUpload from './FileUpload'

const Downloads = (props) => {
    const downloads = useSelector((state) => {
        if (!props.display) {
            return state.userAuth.user.portfolio.downloads
        } else {
            return state.portfolioStore.portfolio.downloads
        }
    })

    return (
        <div className="file_container">
            {downloads.length > 0 &&
                downloads.map((item) => (
                    <div key={item._id}>
                        <DisplayFile className="downloads" file={item} />
                    </div>
                ))}
            {!props.display ? <FileUpload /> : null}
        </div>
    )
}

export default Downloads