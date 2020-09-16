import React from 'react'


//Called by <FetchImage imagename="..." />
class FetchImage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            image: ""
        }

        fetch(`/api/images/${props.imageName}`, {
            method: 'GET',
        }).then(response => response.json()).then(result => {
            this.setState({image: result.image})
        })
    }

    render () {
        return (
            <div>
                <img src={"data:image/png;base64," + this.state.image} alt="failed render" />
            </div>
        )
    }
}

export default FetchImage