import React from "react";
import { useSelector } from 'react-redux'
import avatar from './Template/avatar.png'
import './Template/Template.css'
import { studentTemplate } from "./Template/templates";
import history from '../history'
import DisplayFile from "./DisplayFile";
import ProfilePictureUpload from './ProfilePictureUpload'

const Portfolio = () => {
    var portfolio = useSelector(state => state.userAuth.user.portfolio)

    if (!portfolio) {
        portfolio = studentTemplate
    }

    function handleEditPortfolio (event) {
        event.preventDefault()
        history.push('/info')
    }

    function handleEditAboutMe(event) {
        event.preventDefault()
        history.push('/aboutme')
    }

    return (
        <div>
            <section>
                <div className='container'>
                    {portfolio.info.Name ? <h1 className='intro'>Welcome to <b>{portfolio.info.Name}'s</b> portfolio.</h1> : <h1 className='intro'>Welcome to my portfolio</h1>}
                          
                    {portfolio.profilePicture
                        ? <DisplayFile className='avatar' file={portfolio.profilePicture} />
                        : <img className='avatar' src={avatar} alt='Avatar' />
                    }
                    <ProfilePictureUpload/>

                    <div className='text'>
                        {Object.entries(portfolio.info).map(([key, value]) => {
                            return (
                                <div key={key}>
                                    {key}: {value}
                                </div>
                            )
                        })}
                    </div>
                    <button className='editButton' onClick={handleEditPortfolio}>Edit</button>
                </div>
                <br/>
                <h3>About Me</h3>

                <button className='editButton' onClick={handleEditAboutMe}>Edit</button>

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

export default Portfolio