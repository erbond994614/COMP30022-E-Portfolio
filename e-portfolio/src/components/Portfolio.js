import React from "react";
import { useSelector } from 'react-redux'
import avatar from './Template/avatar.png'
import './Template/Template.css'
import { studentTemplate } from "./Template/templates";
import history from '../history'

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
                    <h1 className='intro'>Welcome to <b>{portfolio.firstName} {portfolio.lastName}'s</b> portfolio.</h1>
                          
                    <img className='avatar' src={avatar} alt='Avatar'/> 
                    <div className='text'>{portfolio.info}</div>
                    <form onSubmit={handleEditPortfolio}>
                        <button type="submit" className='editButton'>Edit</button>
                    </form>           
                </div>
                <br/>
                <h3>About Me</h3>

                <form onSubmit={handleEditAboutMe}>
                    <button type="submit" className='editButton'>Edit</button>
                </form>

                <br/>
                <div className='aboutme'>         
                    <h4>Paragraph 1 <br/><br/><p>{portfolio.AboutMe.para1}</p></h4>
                    <h4>Paragraph 2 <br/><br/><p>{portfolio.AboutMe.para2}</p></h4>
                    <h4>Paragraph 3 <br/><br/><p>{portfolio.AboutMe.para3}</p></h4>
                </div>
            </section>
        </div>
    )
}

export default Portfolio