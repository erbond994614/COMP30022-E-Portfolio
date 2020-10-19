import React from "react";
import { useSelector } from 'react-redux'
import avatar from './Template/avatar.png'
import './Template/Template.css'
import { studentTemplate } from "./Template/templates";
import DisplayFile from "./DisplayFile";

const DisplayPortfolio = () => {
    var portfolio = useSelector(state => state.portfolio.portfolio)

    if (!portfolio) {
        portfolio = studentTemplate
    }

    return (
        <div>
            <section>
                <div className='container'>
                    <h1 className='intro'>Welcome to <b>{portfolio.info.name}'s</b> portfolio.</h1>
                          
                    {portfolio.info.profilePicture
                        ? <DisplayFile className='avatar' file={portfolio.info.profilePicture} />
                        : <img className='avatar' src={avatar} alt='Avatar' />
                    }

                    {/* items = info.items.map((item) => {item.title}: {item.content}<br/>) for arbitrary info */}
                    <div className='text'>
                        Name: {portfolio.info.name}
                        <br/>
                        Age: {portfolio.info.age}
                        <br/>
                        Major: {portfolio.info.major}
                    </div>
                </div>
                <br/>
                <h3>About Me</h3>

                <br/>
                <div className='aboutme'>         
                    <h4>Paragraph 1 <br/><br/><p>{portfolio.aboutMe.para1}</p></h4>
                    <h4>Paragraph 2 <br/><br/><p>{portfolio.aboutMe.para2}</p></h4>
                    <h4>Paragraph 3 <br/><br/><p>{portfolio.aboutMe.para3}</p></h4>
                </div>
            </section>
        </div>
    )
}

export default DisplayPortfolio