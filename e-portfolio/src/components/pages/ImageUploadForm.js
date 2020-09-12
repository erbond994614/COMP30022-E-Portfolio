import React from 'react'

class ImageUploadForm extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.form = React.createRef()
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch('/api/images/upload', {
            method: 'POST',
            body: new FormData(this.form.current)
        }).then(response => response.json()).then(result => console.log(result))
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} ref={this.form}>
                <input type='file' name='input' required />
                <input type='submit' value='Upload' />
            </form>
        )
    }
}

export default ImageUploadForm