import React, { Component } from "react";
import avatar from './Template/avatar.png'
import './Template/Template.css'

class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = props.state
    }

    render() {
        return (
            <div>
            <section>
                <div className='container'>
                <h1 className='intro'>Welcome to <b>{this.state.name}</b> portfolio.</h1>          
                <img className='avatar' src={avatar} alt='Avatar'/> 
                <div className='text'>{this.state.info}</div>          
                </div>
                <br/>
                <h3>About Me</h3>
                <div className='aboutme'>         
                <h4>Paragraph 1 <br/><br/><p>{this.state.AboutMe.para1}</p></h4>
                <h4>Paragraph 2 <br/><br/><p>{this.state.AboutMe.para2}</p></h4>
                <h4>Paragraph 3 <br/><br/><p>{this.state.AboutMe.para3}</p></h4>
                </div>
            </section>
            </div>
        )
    }
}

export default Portfolio