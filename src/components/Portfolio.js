import React from "react";
import { useSelector } from 'react-redux'
import './Template/Template.css'
import { studentTemplate } from "./Template/templates";
import ProfilePicture from './ProfilePicture'
import ProfilePictureUpload from './ProfilePictureUpload'
import Information from './Information'
import AboutMe from './AboutMe'
import Preview from './Preview'

const Portfolio = () => {
    var portfolio = useSelector(state => state.userAuth.user.portfolio)

    if (!portfolio) {
        portfolio = studentTemplate
    }

    return (
        <div>
            <section>
                <div className='container'>
                    {portfolio.info.Name ? <h1 className='intro'>Welcome to <b>{portfolio.info.Name}'s</b> portfolio.</h1> : <h1 className='intro'>Welcome to my portfolio</h1>}
                          
                    <ProfilePicture/>
                    <ProfilePictureUpload/>

                    <Information/>
                </div>
                <br/>
                <AboutMe/>
            </section>
            <Preview/>
        </div>
    )
}

export default Portfolio